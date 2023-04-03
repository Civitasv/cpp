// C++ program to illustrate the
// above discussed functionality
#include <cstring>
#include <iostream>
#include <memory>
#include <ostream>
#include <vector>
using namespace std;

struct Deleter {
  void operator()(int *a) {
    cout << "DELETE A" << '\n';
    delete a;
  }

  void operator()(double *a) {
    cout << "DELETE A" << '\n';
    delete a;
  }

  ostream &operator<<(ostream &os) {
    os << "A deleter" << '\n';
    return os;
  }
};

int main() {
  {
    double *x = new double(2.0);
    unique_ptr<double, Deleter> vv(x);
  }
  return 0;
}

std::default_delete<int> a;

// Custom string class
class Mystring {

  // Initialise the char array
  char *str;

public:
  // No arguments Constructor
  Mystring();

  // Constructor with 1 arguments
  Mystring(char *val);

  // Copy Constructor
  Mystring(const Mystring &source);

  // Move Constructor
  Mystring(Mystring &&source);

  // Destructor
  ~Mystring() { delete str; }
};

// Function to illustrate Constructor
// with no arguments
Mystring::Mystring() : str{nullptr} {
  str = new char[1];
  str[0] = '\0';
}

// Function to illustrate Constructor
// with one arguments
Mystring::Mystring(char *val) {
  if (val == nullptr) {
    str = new char[1];
    str[0] = '\0';
  }

  else {

    str = new char[strlen(val) + 1];

    // Copy character of val[]
    // using strcpy
    strcpy(str, val);
    str[strlen(val)] = '\0';

    cout << "The string passed is: " << str << endl;
  }
}

// Function to illustrate
// Copy Constructor
Mystring::Mystring(const Mystring &source) {
  str = new char[strlen(source.str) + 1];
  strcpy(str, source.str);
  str[strlen(source.str)] = '\0';
}

// Function to illustrate
// Move Constructor
Mystring::Mystring(Mystring &&source) {
  str = source.str;
  source.str = nullptr;
}

// Driver Code
// int main() {
//   // Constructor with no arguments
//   Mystring a;

//   // Convert string literal to
//   // char array
//   char temp[] = "Hello";

//   // Constructor with one argument
//   Mystring b{temp};

//   // Copy constructor
//   Mystring c{a};

//   char temp1[] = "World";

//   // One arg constructor called,
//   // then the move constructor
//   Mystring d{Mystring{temp}};
//   return 0;
// }
