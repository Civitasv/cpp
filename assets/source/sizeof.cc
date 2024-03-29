#include <iostream>
#include <string>

using namespace std;

extern "C" {
int function_in_c_lib();
}

struct alignas(16) MyStruct {};

int main() {
  int a = 3;
  cout << sizeof(a) << '\n'; // return sizeof integer, 4

  int *b = &a;
  cout << sizeof(b) << '\n'; // return sizeof pointer, 8

  int n[] = {1, 2, 3, 4};
  cout << sizeof(n) << '\n'; // return size of array, 16

  int *p = n;
  cout << sizeof(p) << '\n'; // return sizeof pointer, 8

  string ss = "1234";
  cout << sizeof(ss) << '\n'; // return sizeof string pointer, 32
}
