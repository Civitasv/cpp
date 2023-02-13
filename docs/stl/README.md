---
sidebar_position: 3
---

# STL

## STL 的基本组成部分

STL 由算法(Algorithm)、容器(Container)和迭代器(Iterator)组成。

容器，是一种数据结构，如 vector, list, deque，以模板类的方法提供。

算法，用于操作容器中的数据，如 sort 函数。

迭代器提供了访问容器中数据的方法，类似于指针。

仿函数(Function object)又称为函数对象，本质上是重载了操作符的 struct。

适配器(Adaptor)用于修改现有类的接口。

空间配置器(Allocator)管理对象的创建与销毁，内存的获取与释放。

## 常见的容器

### 顺序容器

#### vector

动态数组，查询仅常数时间，删除效率较低，在序列的尾部添加/删除元素较快，存储时若需要扩容，效率很低

#### deque

双向队列，查询仅常数时间，删除效率较低，擅长在序列的头部和尾部添加或删除元素。

底层实现：容器存储数据的空间由一段段等长的连续空间构成，各段空间之间并不一定是连续的，可以位于内存的不同区域，为了管理这些连续空间，容器用数组存储各个连续空间的首地址。

#### list

双向链表，增加，删除仅常数时间，查询效率较低

### 关联式容器

#### set

#### map

#### unordered_map

#### unordered_set

### 容器适配器

指封装了一些基本的容器，使之具备了新的函数功能，比如把 deque 封装变为一个具有 stack 功能的数据结构，这种新得到的数据结构就称为适配器。

#### stack

后入先出

#### queue

先入先出

#### priority_queue

优先队列

## STL 的空间配置器

STL 中，空间配置器用于实现内存空间的分配。

## Reference

1. 牛客网: <https://www.nowcoder.com/issue/tutorial?tutorialId=93&uuid=b36a4e16637540b48edebbe29a405eb8>
2. C 语言中文网: <http://c.biancheng.net/view/6908.html>
