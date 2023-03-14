#include <algorithm>
#include <functional>
#include <iostream>
#include <numeric>
#include <string_view>
#include <thread>
#include <vector>
using namespace std;

int main() {
  vector<int> a{1, 2, 3, 3, 45};
  auto iter = remove(a.begin(), a.end(), 1);
  cout << iter - a.begin() << '\n';
  cout << "FIRST:: " << *a.begin();
  cout << "END:: " << *(a.end() - 1);
  cout << '\n';
  for (auto item : a) {
    cout << item << ' ';
  }

  return 0;
}
