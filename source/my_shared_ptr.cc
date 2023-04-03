#include <iostream>

using namespace std;

template <typename T> struct MySharedPtr {
  struct ControlBlock {
    int ref_count;
    int weak_count;
    T *ptr;

    ~ControlBlock() { delete ptr; }
  };

  T *ptr;
  ControlBlock *cb;

  MySharedPtr(T *ptr) : ptr(ptr) {
    cout << "Constructor" << '\n';

    cb = new ControlBlock();
    cb->ptr = ptr;
    cb->ref_count = 1;
  }

  MySharedPtr(MySharedPtr &other) {
    cout << "Copy constructor" << '\n';

    cb = other.cb;
    cb->ref_count++;
  }

  MySharedPtr &operator=(MySharedPtr &other) {
    cout << "Copy assignment" << '\n';
    if (this == other)
      return *this; // 判断是否是本身

    cb->ref_count--;
    if (cb->ref_count == 0) {
      delete cb->ptr;
    }

    cb = other.cb;
    cb->ref_count++;
  }

  MySharedPtr(MySharedPtr &&other) {
    cout << "Move constructor" << '\n';
    cb = other.cb;

    other.cb = nullptr;
  }

  MySharedPtr &operator=(MySharedPtr &&other) {
    cout << "Move assignment" << '\n';
    if (this == other)
      return *this; // 判断是否是本身

    cb = other.cb;
    other.cb = nullptr;
  }

  ~MySharedPtr() {
    cb->ref_count--;
    if (cb->ref_count == 0) {
      delete cb;
    }
  }
};