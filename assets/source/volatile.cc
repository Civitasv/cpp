#include <cstdio>
#include <signal.h>

volatile bool sigarrived = false;

void handler(int sig) {
  if (sig == SIGINT) {
    sigarrived = true;
  }
}

int main() {
  printf("Waiting. Press Ctrl-C to move on. \n");
  signal(SIGINT, handler);
  while (!sigarrived) {
  }
  printf("Ok. Moving on.\n");
  return 0;
}