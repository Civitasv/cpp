#include <stdio.h>

// The top-level class.

typedef struct sCommClass {
  int (*open)(struct sCommClass *self, char *fspec);
} tCommClass;

// Function for the TCP 'class'.
static int tcpOpen(tCommClass *tcp, char *fspec) {
  printf("Opening TCP: %s\n", fspec);
  return 0;
}
static int tcpInit(tCommClass *tcp) {
  tcp->open = &tcpOpen;
  return 0;
}

// Function for the HTTP 'class'.
static int httpOpen(tCommClass *http, char *fspec) {
  printf("Opening HTTP: %s\n", fspec);
  return 0;
}
static int httpInit(tCommClass *http) {
  http->open = &httpOpen;
  return 0;
}

int main(void) {
  int status;
  tCommClass commTcp, commHttp;

  // Same 'base' class but initialised to different sub-classes.

  tcpInit(&commTcp);
  httpInit(&commHttp);

  // Called in exactly the same manner.

  status = (commTcp.open)(&commTcp, "bigiron.box.com:5000");
  status = (commHttp.open)(&commHttp, "http://www.microsoft.com");

  return 0;
}
