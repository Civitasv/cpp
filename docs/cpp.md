# C/C++

## const

[Example](./cpp.cc)

## constexpr

[Example](./constexpr.cc)

> const 和 constexpr 的最大区别是：constexpr 必须在编译器初始化，而 const 可以在编译器初始化，也可以在运行期初始化。

> const 和 constexpr 都存在类型安全检查，需要分配内存，存储在数据段，而 #define 无类型安全检查，不分配内存，存储在代码段，定义常量时，可以选择 constexpr 或 #define，不过 const 和 constexpr 无法完全取代 #define。

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

[Example](./static.cc)

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

[Example](./inline.cc)

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

[Example](./sizeof.cc)

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
2. 在作选择时，始终先是 `[]` 和 `()` 再是 `*`，`int *x[10]` 表示具有10个指向 int 的指针的数组。
