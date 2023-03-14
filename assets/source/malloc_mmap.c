#include <malloc.h>
#include <stdio.h>
#include <unistd.h>

int main() {
  // 申请1字节的内存
  void *addr = malloc(256 * 1024);
  printf("此256KB字节的内存起始地址：%x\n", addr);
  printf("使用cat /proc/%d/maps查看内存分配\n", getpid());

  // 将程序阻塞，当输入任意字符时才往下执行
  getchar();

  // 释放内存
  free(addr);
  printf("释放了256KB字节的内存，内存也归还给了操作系统\n");

  getchar();
  return 0;
}