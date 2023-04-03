#include <malloc.h>
#include <stdio.h>
#include <unistd.h>

int main() {
  printf("使用cat /proc/%d/maps查看内存分配\n", getpid());

  // 申请1字节的内存
  void *addr = malloc(1);
  printf("此1字节的内存起始地址：%x\n", addr);
  printf("使用cat /proc/%d/maps查看内存分配\n", getpid());

  // 将程序阻塞，当输入任意字符时才往下执行
  getchar();

  // 释放内存
  free(addr);
  printf("释放了1字节的内存，但heap堆并不会释放\n");

  getchar();
  return 0;
}