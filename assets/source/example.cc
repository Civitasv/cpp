#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int> &data, int lo, int hi) {
  int temp = data[hi];
  int index = lo;

  // 2, 3, 1
  for (int i = lo; i < hi; i++) {
    if (data[i] < temp) {
      swap(data[i], data[index++]);
    }
  }

  swap(data[hi], data[index]);

  return index;
}

void quick_sort(vector<int> &data, int lo, int hi) {
  if (lo >= hi)
    return;
  int index = partition(data, lo, hi);

  quick_sort(data, lo, index - 1);
  quick_sort(data, index + 1, hi);
}

int main() {
  vector<int> data = {2, 3, 1, 2};
  quick_sort(data, 0, data.size() - 1);

  for (int item : data)
    cout << item << ' ';
}