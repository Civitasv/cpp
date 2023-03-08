#include <iostream>
#include <ostream>

class Test {
public:
  std::ostream &operator<<(std::ostream &os) {
    os << "TEST" << '\n';
    return os;
  }
};

int main() {
  Test t;
  t << std::cout;
}