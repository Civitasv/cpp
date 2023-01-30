#include <iostream>

static int e = 4;

int main() {
  extern int e;

  std::cout << e;

  return 0;
}
