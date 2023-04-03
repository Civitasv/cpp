#include <iostream>
#include <memory>

struct Yolk {};
struct White {};
struct Egg {
  White w;
  Yolk y;
};
int main() {
  auto ep = std::shared_ptr<Egg>(new Egg());

  // Aliasing constructor to construct shared_ptr<Yolk>
  // yp shares ownership with ep but points to subobject ep->y
  auto yp = std::shared_ptr<Yolk>(ep, &ep->y);

  std::cout << ep.use_count();
}