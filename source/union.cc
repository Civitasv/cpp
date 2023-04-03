#include <iostream>
#include <memory>
#include <vector>

union Variant {
  float a;
  float b;
  int c;
};

// Another example
// Inheritance with no virtual destructor
struct A {
  A() { std::cout << "A()\n"; }
  A &operator=(A &a) {
    std::cout << "=\n";
    return *this;
  }
  // stuff..
  virtual ~A() { std::cout << "~A\n"; } // not virtual
};

int main() {

  // shared_ptr<A> managing a B object
  // raw pointer is A* and managed pointer is B*
  // auto pa = std::shared_ptr<A>(new B()); // OK
  // pa.reset();                            // Calls B's destructor

  std::vector<A> as;
  as.emplace_back();
  std::cout << as.size() << '\n';

  auto& a = as[0];
  return 0;
}
