#include <iostream>
#include <ratio>
using namespace std;

struct ListNode {
  int val;
  ListNode *next;

  ListNode(int val) : val(val) {}
};

struct MyStack {
  ListNode *top;
  int size;

  MyStack() : top(nullptr), size(0) {}

  bool Empty() { return top == nullptr; }

  int Pop() {
    if (top == nullptr) {
      cout << "Stack Underflow" << endl;
    }
    ListNode *temp = top;

    int val = top->val;
    top = top->next;

    delete temp;

    size--;
    return val;
  }

  void Push(int val) {
    ListNode *node = new ListNode(val);
    node->next = top;
    top = node;
    size++;
  }
};