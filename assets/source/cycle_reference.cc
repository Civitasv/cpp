#include <iostream>
#include <memory>

using namespace std;

class B;

class A {
 public:
  shared_ptr<B> b;

  A() { cout << "A constructor" << endl; }
  ~A() {
    cout << "[A] used count :: b ::" << b.use_count() << endl;
    cout << "A destructor" << endl;
  }
};

class B {
 public:
  weak_ptr<A> a;

  B() { cout << "B constructor" << endl; }
  ~B() {
    cout << "[B] used count :: a ::" << a.use_count() << endl;
    cout << "B destrcutor" << endl;
  }
};

int main() {
  {
    shared_ptr<A> a = make_shared<A>();
    shared_ptr<B> b = make_shared<B>();
    a->b = b;
    b->a = a;
    cout << "used count :: a ::" << a.use_count() << endl;
    cout << "used count :: b ::" << b.use_count() << endl;
  }

  cin.get();
  return 0;
}