#include <iostream>

int count = 11; // 全局（::）的 count

class A {
public:
  static int count; // 类 A 的 count（A::count）
};
int A::count = 21;

void fun() {
  int count = 31; // 初始化局部的 count 为 31
  count = 32;     // 设置局部的 count 的值为 32
  std::cout << count << '\n';
}

int main() {
  ::count = 12; // 测试 1：设置全局的 count 的值为 12
  std::cout << ::count << '\n';

  A::count = 22; // 测试 2：设置类 A 的 count 为 22
  std::cout << A::count << '\n';

  fun(); // 测试 3

  return 0;
}