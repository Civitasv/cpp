#include <iostream>
#include <sys/wait.h>
#include <unistd.h>

using namespace std;

int main() {
  int fd[2];
  pid_t pid;

  if (pipe(fd) < 0) {
    cerr << "pipe error" << endl;
    return 1;
  }

  if ((pid = fork()) < 0) {
    cerr << "fork error" << endl;
    return 1;
  } else if (pid > 0) { // parent process
    close(fd[0]);       // close read end

    char message[] = "Hello child process!";
    write(fd[1], message, sizeof(message));

    wait(NULL);
  } else {        // child process
    close(fd[1]); // close write end

    char buffer[100];
    read(fd[0], buffer, 100);
    cout << "Message received by child process: " << buffer << endl;

    close(fd[0]); // close read end
  }

  return 0;
}
