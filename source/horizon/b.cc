#include <iostream>
using namespace std;

static int count = 0;

struct A {
  string ss;
  A() { cout << "CONSTRUCTOR:: " << __LINE__ << '\n'; }
  A(const A &a) : ss(a.ss) {
    cout << "COPY CONSTRUCTOR:: " << __LINE__ << '\n';
  }
  ~A() { cout << "DESTRUCTOR:: " << __LINE__ << '\n'; }
};

A test() {
  A a;      // CON
  return a; // COPY
} // DES

int main() {
  A b = test(); // CON

  cout << "This is a test" << '\n';
  return 0;
} // DES