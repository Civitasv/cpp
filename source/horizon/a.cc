#include <iostream>
#include <vector>

using namespace std;

int solve(vector<int> &data) {
  int result = data[0];
  for (int i = 1; i < data.size(); i++) {
    result ^= data[i];
  }
  return result;
}

int main() {
  vector<int> aa{1, 1, 2, 2, 3};
  cout << solve(aa) << endl;
}