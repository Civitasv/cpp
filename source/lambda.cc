#include <functional>
#include <iostream>
#include <vector>

void ForEach(std::vector<int>& values, const std::function<void(int&)> func) {
  for (int& value : values) {
    func(value);
  }
}

int main() {
  std::vector<int> values = {1, 2, 3, 4, 5};
  int a = 2;
  ForEach(values, [&](int& val) { val += a; });

  for (int value : values) {
    std::cout << value << ' ';
  }
  std::cin.get();
}