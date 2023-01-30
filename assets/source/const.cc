#include <iostream>

int main() {
  const int a = 5;
  // a = 6; // error, const 变量不能改变

  int b = 2;
  const int *p = &b;
  // attention: const int = int const
  // *p = 2; // error, 指针指向的值是 const, 所以不能修改
  int *const p2 = &b;

  *p2 = 20; // right, 此时是 const 指针，表明指针是不可变的，但指向的变量可变

  const int &c = b;
  // c = 2; // error, 引用的值是 const, 所以不能修改
  // int &const d = b; // error, const 不能修饰引用, 因为引用只是对象的别名

  class Test {
    void test() const {
      // a = 2; // error, const 成员函数不能修改成员变量，其实就是不能修改 this
      // const int* this = object;
    } // 表示该函数不能修改成员变量

    int a;
  };
}
