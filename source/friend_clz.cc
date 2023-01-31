#include <iostream>

class FriendClass {
private:
  int private_data;

  // this means Other is my friend,
  // please let him have access to my private memeber
  friend class Other;
};

class Other {
public:
  FriendClass clz;
  Other() { clz.private_data = 2; }

  void Print() { std::cout << "PRIVATE: " << clz.private_data; }

  void RetrieveData();
};

int main() {
  Other other;
  other.Print();

  return 0;
}