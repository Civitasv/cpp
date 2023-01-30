typedef struct {
  int (*open)(void *self, char *fspec);

  int *x[5];
} tCommClass;
