namespace {
void PRIVATE() {}
} // namespace

static void PrivateFunc() {}

class StaticUsage {
public:
  static int a; // 类数据变量

  static void ClassFunc() {
    // 类函数
    PrivateFunc();
    PRIVATE();
  }
  int A(); // declaration
};

// definition
inline int StaticUsage::A() { return 0; }

int main() {
  static int a; // 变量存储区域为静态区
  StaticUsage::ClassFunc();
}
