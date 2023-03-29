#include <iostream>
#include <ratio>
using namespace std;

struct ListNode {
  int val;
  ListNode *next;

  ListNode(int val) : val(val) {}
};

struct MyQueue {
  ListNode *front;
  ListNode *back;
  int size;

  MyQueue() : front(nullptr), back(nullptr), size(0) {}

  bool Empty() { return size == 0; }

  int Pop() {
    if (front == nullptr) {
      cout << "Stack Underflow" << endl;
    }
    ListNode *temp = front;

    if (temp == back)
      back = nullptr;

    int val = front->val;
    front = front->next;

    delete temp;

    size--;
    return val;
  }

  void Push(int val) {
    ListNode *node = new ListNode(val);
    if (back != nullptr)
      back->next = node;
    if (front == nullptr)
      front = node;
    back = node;
    size++;
  }

  int Front() { return front->val; }

  int Back() { return back->val; }
};

int main() {
  MyQueue q;
  q.Push(1);
  q.Push(2);
  q.Push(3);
  q.Pop();
  q.Push(4);

  while (!q.Empty())
    cout << q.Pop() << ' ';
}