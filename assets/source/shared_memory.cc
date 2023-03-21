#include <cstring>
#include <iostream>
#include <sys/ipc.h>
#include <sys/shm.h>

using namespace std;

int main() {
  // 创建共享内存
  int shmid = shmget(IPC_PRIVATE, sizeof(int), IPC_CREAT | 0666);
  if (shmid < 0) {
    cerr << "shmget error" << endl;
    return 1;
  }

  // 获取共享内存的指针
  int *shared_mem = (int *)shmat(shmid, nullptr, 0);
  if (shared_mem == (int *)-1) {
    cerr << "shmat error" << endl;
    return 1;
  }

  // 在共享内存中存储数据
  *shared_mem = 123;

  // 分离共享内存
  if (shmdt(shared_mem) < 0) {
    cerr << "shmdt error" << endl;
    return 1;
  }

  // 在另一个进程中获取共享内存中的数据
  int *shared_mem_another = (int *)shmat(shmid, nullptr, 0);
  if (shared_mem_another == (int *)-1) {
    cerr << "shmat error" << endl;
    return 1;
  }

  cout << "The value in shared memory is: " << *shared_mem_another << endl;

  // 分离共享内存
  if (shmdt(shared_mem_another) < 0) {
    cerr << "shmdt error" << endl;
    return 1;
  }

  // 删除共享内存
  if (shmctl(shmid, IPC_RMID, nullptr) < 0) {
    cerr << "shmctl error" << endl;
    return 1;
  }

  return 0;
}
