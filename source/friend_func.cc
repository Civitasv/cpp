#include <iostream>

class FriendClass;

class Another {
public:
  void member_function(const FriendClass &clz);
};

class FriendClass {
public:
  FriendClass(int private_data) : private_data(private_data) {}

  // please let him have access to my private memeber
  friend void friend_function(const FriendClass &clz);

  friend void Another::member_function(const FriendClass &clz);

private:
  int private_data;
};

void friend_function(const FriendClass &clz) {
  std::cout << clz.private_data << '\n';
}

// friend function definition
void Another::member_function(const FriendClass &clz) {
  std::cout << "Private Variable: " << clz.private_data << std::endl;
}

int main() {
  friend_function(2);

  Another another;
  another.member_function(2);
  return 0;
}