#include <array>
#include <iostream>

int main() {
  constexpr int a = 5;
  // a = 6; // error, const 变量不能改变

  constexpr int c = 10;
  std::array<int, c> x; // okay

  int size;
  const int d = size; // okay
  // std::array<int, d> y; // error

  const int e = 5;
  std::array<int, e> y; // okay, e is a constant expression
}
