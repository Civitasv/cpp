#include <cstdint>
#include <iostream>
#include <type_traits>
#include <typeinfo>

const int &get_value();

int main() {
  decltype(get_value()) j = 2;
  std::cout << typeid(j).name() << '\n';
  static_assert(std::is_same<decltype(get_value()), const int &>::value, "TYPE SHOULD BE THE SAME");
  std::cout << j;
}