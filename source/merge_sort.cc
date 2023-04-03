#include <iostream>
#include <vector>

using namespace std;

void merge(vector<int> &data, int lo, int mid, int hi) {
  static vector<int> aux(data.size());
  for (int i = lo; i <= hi; i++)
    aux[i] = data[i];

  int i = lo, j = mid + 1;
  int index = lo;
  while (i <= mid || j <= hi) {
    if (i > mid)
      data[index++] = aux[j++];
    else if (j > hi)
      data[index++] = aux[i++];
    else if (aux[i] < aux[j])
      data[index++] = aux[i++];
    else
      data[index++] = aux[j++];
  }
}

void merge_sort(std::vector<int> &data, int lo, int hi) {
  if (lo >= hi)
    return;

  int mid = lo + (hi - lo) / 2;

  merge_sort(data, lo, mid);
  merge_sort(data, mid + 1, hi);

  merge(data, lo, mid, hi);
}

int main() {
  vector<int> data{2, 1, 3, 4, 2};
  merge_sort(data, 0, data.size() - 1);

  for (int item : data)
    cout << item << ' ';
}