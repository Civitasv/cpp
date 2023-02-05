// 限定作用域
enum class open_modes { input, output, append };

// 不限定作用域
enum color { red, yellow, green };
enum { floatPrec = 6 };

int main() {
  int a = red; // okay
  int c = floatPrec; // okay
  // int b = open_modes::input; // error
}