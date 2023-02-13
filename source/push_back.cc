#include <cstring>
#include <iostream>
#include <vector>
using namespace std;

class A {
public:
  explicit A(int i) { cout << "normal constructor" << endl; }
  ~A() {}
  A(const A &other) { cout << "copy constructor" << endl; }
  A(A &&other) { cout << "move construtor" << endl; }
};

void a(A &&a) {}

int main() {
  vector<A> vec;
  vec.reserve(2);
  A v(1);
  // a(v);
  a(std::move(v));
  vec.push_back(std::move(v)); // 调用了10次构造函数和10次拷贝构造函数,
  vec.emplace_back(1); // 调用了10次构造函数一次拷贝构造函数都没有调用过
}