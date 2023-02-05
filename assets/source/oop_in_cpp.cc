#include <iostream>

class Fruit {
public:
  void setPrice(float new_price) { price = new_price; }

  virtual void poly() { std::cout << "Fruit" << '\n'; }

private:
  float price;
};

// derived class
class Durian : public Fruit {
private:
  bool thorns = true;

public:
  void poly() override { std::cout << "Durian" << '\n'; }
};

int main() {
  Fruit *dr = new Durian();
  dr->poly();

  delete dr;
}