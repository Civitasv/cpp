#include <algorithm>
#include <atomic>
#include <condition_variable>
#include <iostream>
#include <iterator>
#include <mutex>
#include <set>
#include <thread>
#include <vector>

using namespace std;

int resource = 0;
condition_variable cv;
mutex mt;

int Consume() {
  unique_lock<mutex> lk(mt);
  while (resource == 0) {
    cv.wait(lk);
  }
  resource--;
  return resource;
}

void Produce() {
  unique_lock<mutex> lk(mt);
  resource++;
  lk.unlock();

  cv.notify_one();
}

int main() {
  set<int> st{1, 2, 3};
  set<int> st2{2, 3};

  vector<int> result(10, 0);
  set_intersection(st.begin(), st.end(), st2.begin(), st2.end(),
                   result.begin());

  for (int item : result)
    cout << item << ' ';
}