---
slug: /
sidebar_position: 1
---

# 🛠️ C++

## const

```cpp
#include <iostream>

int main() {
  const int a = 5;
  // a = 6; // error, const 变量不能改变

  int b = 2;
  const int *p = &b;
  // attention: const int = int const
  // *p = 2; // error, 指针指向的值是 const, 所以不能修改
  int *const p2 = &b;

  *p2 = 20; // right, 此时是 const 指针，表明指针是不可变的，但指向的变量可变

  const int &c = b;
  // c = 2; // error, 引用的值是 const, 所以不能修改
  // int &const d = b; // error, const 不能修饰引用, 因为引用只是对象的别名

  class Test {
    void test() const {
      // a = 2; // error, const 成员函数不能修改成员变量，其实就是不能修改 this
      // const int* this = object;
    } // 表示该函数不能修改成员变量

    int a;
  };
}
```

## constexpr

```cpp
#include <array>
#include <iostream>

int main() {
  constexpr int a = 5;
  // a = 6; // error, const 变量不能改变

  constexpr int c = 10;
  std::array<int, c> x; // okay

  int size;
  const int d = size; // okay
  // std::array<int, d> y; // error

  const int e = 5;
  std::array<int, e> y; // okay, e is a constant expression
}
```

:::note
const 和 constexpr 的最大区别是：constexpr 必须在编译器初始化，而 const 可以在编译器初始化，也可以在运行期初始化。
:::

:::note
const 和 constexpr 都存在类型安全检查，需要分配内存，存储在数据段，而 #define 无类型安全检查，不分配内存，存储在代码段，定义常量时，可以选择 constexpr 或 #define，不过 const 和 constexpr 无法完全取代 #define。
:::

## mutable

<https://www.geeksforgeeks.org/c-mutable-keyword/>

```cpp
class Mutable {
  mutable int x;
  int y;

  void ConstMethod() const {
    x = 2;
  }
};
```

## static、auto、extern

```cpp
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
```

- 链接：
  1. 无链接: 局部变量
  2. 内部链接: static
  3. 外部链接: extern, 默认是外部链接
- 作用域：
  1. 块作用域
  2. 文件作用域
- 存储期限：
  1. 静态存储期限: static, 在程序运行期间占有同样的存储单元
  2. 自动存储期限: auto, 在所属块被执行时获得内存单元，在块终止时释放内存单元，默认是自动存储期限

```cpp
int a = 5; // 外部链接、文件作用域、静态存储期限
static int b = 5; // 内部链接、文件作用域、静态存储期限
int e = 5;
static int f = 5;
int main() {
  static int c = 5; // 无链接、块作用域、静态存储期限
  int d = 5; // 无链接、块作用域、自动存储期限
  extern int e; // 外部链接、块作用域、静态存储期限
  extern int f; // 内部链接、块作用域、静态存储期限
}
```

## this

1. 在 non-static 成员函数中，隐含着该指针，相当于 python 中的 self 变量
2. 当对一个对象调用成员函数时，编译器会先将对象的地址赋给 `this` 指针，在成员函数内部，存取数据时，都会隐式使用 `this` 指针
3. this 指针默认为 const 指针，所以不能修改 this 指针的值，在 const 成员函数中，this 指针的类型是 const ClassName\* const，所以不能修改 this 指针指向的对象（不能修改不是 mutable 的数据成员）
4. this 是一个右值，没有地址

## inline

```cpp
#include <iostream>
using namespace std;

class Base {
public:
  inline virtual void who() { cout << "I am Base\n"; }
  virtual ~Base() {}
};
class Derived : public Base {
public:
  inline void who() // 不写inline时隐式内联
  {
    cout << "I am Derived\n";
  }
};

int main() {
  // 此处的虚函数
  // who()，是通过类（Base）的具体对象（b）来调用的，编译期间就能确定了，所以它可以是内联的，但最终是否内联取决于编译器。
  Base b;
  b.who();

  // 此处的虚函数是通过指针调用的，呈现多态性，需要在运行时期间才能确定，所以不能为内联。
  Base *ptr = new Derived();
  ptr->who();

  // 因为Base有虚析构函数（virtual ~Base() {}），所以 delete
  // 时，会先调用派生类（Derived）析构函数，再调用基类（Base）析构函数，防止内存泄漏。
  delete ptr;
  ptr = nullptr;

  return 0;
}
```

- 相当于把内联函数里面的内容写在调用内联函数处；
- 相当于不用执行进入函数的步骤，直接执行函数体；
- 相当于宏，却比宏多了类型检查，真正具有函数特性；
- 编译器一般不内联包含循环、递归、switch 等复杂操作的内联函数；
- 在类声明中定义的函数，除了虚函数的其他函数都会自动隐式地当成内联函数。

```cpp
class InlineClz {
public:
  int A(); // declaration
};

// definition
inline int InlineClz::A() { return 0; }
```

优点：

1. 运行速度提高，代码直接复制到执行处，无须参数压栈、结果返回等
2. 内联函数相比宏函数来说，在代码展开时，会做安全检查或自动类型转换（同普通函数），而宏定义则不会
3. 在类中声明同时定义的成员函数，自动转化为内联函数，因此内联函数可以访问类的成员变量，宏定义则不能
4. 容易调试

缺点：

1. 代码膨胀
2. 是否内联，程序员不可控。内联函数只是对编译器的建议，是否对函数内联，决定权在于编译器

虚函数可以是内联函数吗？

1. 虚函数可以是内联函数，内联是可以修饰虚函数的，但是当虚函数表现多态性的时候不能内联。
2. 内联是在编译期建议编译器内联，而虚函数的多态性在运行期，编译器无法知道运行期调用哪个代码，因此虚函数表现为多态性时（运行期）不可以内联。
3. inline virtual 唯一可以内联的时候是：编译器知道所调用的对象是哪个类（如 Base::who()），这只有在编译器具有实际对象而不是对象的指针或引用时才会发生。

## volatile

```cpp
volatile int i = 10;
```

volatile tells the compiler that:

> "Hey compiler, I'm volatile and, you know, I can be changed by some XYZ that you're not even aware of. That XYZ could be anything. Maybe some alien outside this planet called program. Maybe some lightning, some form of interrupt, volcanoes, etc can mutate me. Maybe. You never know who is going to change me! So O you ignorant, stop playing an all-knowing god, and don't dare touch the code where I'm present. Okay?"

## assert()

断言，可以使用 `#define NDEBUG` 关闭

## sizeof

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  int a = 3;
  cout << sizeof(a) << '\n'; // return sizeof integer, 4

  int *b = &a;
  cout << sizeof(b) << '\n'; // return sizeof pointer, 8

  int n[] = {1, 2, 3, 4};
  cout << sizeof(n) << '\n'; // return size of array, 16

  int *p = n;
  cout << sizeof(p) << '\n'; // return sizeof pointer, 8

  string ss = "1";
  cout << sizeof(ss) << '\n'; // return sizeof string pointer, 32
}
```

## extern "C"

目的：让 C++ 编译器将 extern "C" 的声明的代码当作 C 语言代码处理，可以避免 C++ 因符号修饰导致代码不能和 C 语言库中的符号进行链接的问题。

> 简单来说，C++ 中函数可以重载，因此在处理函数时，会首先对函数名进行修改，但是 C 语言中不具有重载机制，使用 extern C 后，C++ 就不会修改函数名。

> C compiler does not use mangling while c++'s does. So if you want to call a c interface from a c++ program, you have to clearly declared that the c interface as "extern c".

## struct and typedef struct

C 语言中：

```c
typedef struct Student {
    int age;
} S;

// ==>

struct Student {
    int age;
};

typedef struct Student S;
```

而在 C++ 中，不需要使用 typedef，可以使用 `struct Student` 或者 `Student`。

若定义了与 `Student` 同名的函数，则 `Student` 只代表函数，不代表结构体。

```cpp
typedef struct Student {
    int age;
} S;

void Student() {}           // 正确，定义后 "Student" 只代表此函数

//void S() {}               // 错误，符号 "S" 已经被定义为一个 "struct Student" 的别名

int main() {
    Student();
    struct Student me;      // 或者 "S me";
    return 0;
}
```

Weird, I'd better never know or use it.

## struct Vs class

struct 作为数据的结合，class 作为 OOP 的原子。

struct 默认访问权限是 public, class 默认是 private。

I prefer struct.

## union

use std::variant instead.

1. 默认访问控制符为 public
2. 不能含有引用类型的成员
3. 不能继承自其他类，不能作为基类
4. 不能含有虚函数
5. 匿名 union 在定义所在作用域可直接访问 union 成员
6. 匿名 union 不能包含 protected 或 private 成员
7. 全局匿名联合必须是静态的

## 复杂声明

```cpp
int *(*x[10])(void);
```

规则：

1. 始终从内往外读声明符号，即从 `x` 开始读
2. 在作选择时，始终先是 `[]` 和 `()` 再是 `*`，`int *x[10]` 表示具有 10 个指向 int 的指针的数组。

## 面向对象，C 语言

Example:

```cpp
#include <stdio.h>

// The top-level class.

typedef struct sCommClass {
  int (*open)(struct sCommClass *self, char *fspec);
} tCommClass;

// Inherit
// Function for the TCP 'class'.
static int tcpOpen(tCommClass *tcp, char *fspec) {
  printf("Opening TCP: %s\n", fspec);
  return 0;
}
static int tcpInit(tCommClass *tcp) {
  tcp->open = &tcpOpen;
  return 0;
}

// Function for the HTTP 'class'.
static int httpOpen(tCommClass *http, char *fspec) {
  printf("Opening HTTP: %s\n", fspec);
  return 0;
}
static int httpInit(tCommClass *http) {
  http->open = &httpOpen;
  return 0;
}

int main(void) {
  int status;
  tCommClass commTcp, commHttp;

  // Same 'base' class but initialised to different sub-classes
  tcpInit(&commTcp);
  httpInit(&commHttp);

  // Called in exactly the same manner, polymorphism
  status = (commTcp.open)(&commTcp, "bigiron.box.com:5000");
  status = (commHttp.open)(&commHttp, "http://www.microsoft.com");

  return 0;
}
```

- 对于封装，可以使用函数指针和数据指针
- 对于继承，可以使用结构体的嵌套
- 对于多态，可以使父类和子类的函数指针不同

## operator 重载
### bool()

```cpp
struct A {
  operator bool() const { return true; }
};
```

> `operator TypeName()` are conversion operators. Thet allow objects of the class type to be used as if they were of type `TypeName` and when they are, they are converted to `TypeName` using this conversion function.  
> From <https://stackoverflow.com/questions/4600295/what-is-the-meaning-of-operator-bool-const>

因此，这个运算符重载函数能够将 A 对象转换为 `bool`。
## explicit

```cpp
struct A {
  A(int a) { cout << "Normal constructor" << '\n'; } // implicit constructor
  A(const A &a) { cout << "Copy constructor" << '\n'; }
  operator bool() const { return true; }
};

struct B {
  explicit B(int b) {}
  explicit operator bool() const { return true; }
};

int main() {
  A a1(1);
  A a2 = 1;
  A a3{1};
  A a4 = {1};
  bool a5 = a1;

  B b1(1); // OK：直接初始化
  // B b2 = 1; // 错误：被 explicit 修饰构造函数的对象不可以复制初始化
  B b3{1};    // OK：直接列表初始化
  // B b4 = {1}; // 错误：被 explicit 修饰构造函数的对象不可以复制列表初始化
  B b5 = (B)1; // OK：允许 static_cast 的显式转换
  if (b1)
    ; // OK：被 explicit 修饰转换函数 B::operator bool() 的对象可以从 B 到 bool
      // 的按语境转换
  bool b6(b1); // OK：被 explicit 修饰转换函数 B::operator bool() 的对象可以从 B
               // 到 bool 的按语境转换
  // bool b7 = b1; // 错误：被 explicit 修饰转换函数 B::operator bool()
                // 的对象不可以隐式转换
  bool b8 = static_cast<bool>(b1); // OK：static_cast 进行直接初始化
}
```

1. explicit 可以防止隐式转换，更加安全
2. 使用 explicit 时，部分情况下仍可以按语境转换，如 `if`, `while`, `for`, `!`, `&&`, `||`, `?:`, `static_assert`

## noexcept

> The noexcept operator performs a compile-time check that returns `true` if an expression is declared to not throw any expressions.

throw() 相当于 noexcept(true)

