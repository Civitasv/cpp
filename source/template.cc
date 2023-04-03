template <typename T1, typename T2> class A {
  T1 data1;
  T2 data2;
};

template <class T> T max(const T lhs, const T rhs) {
  return lhs > rhs ? lhs : rhs;
}

// 全特化
template <> class A<int, double> {
  int data1;
  double data2;
};

template <> int max(const int lhs, const int rhs) {
  return lhs > rhs ? lhs : rhs;
}

// 偏特化
template <class T2> class A<int, T2> {
  int data1;
  T2 data2;
};

// 函数不支持偏特化，可以使用函数重载替代偏特化的需求