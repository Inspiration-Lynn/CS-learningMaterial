## chapter 2 Operating system organization

- ##### multiplexing

- ##### isolation

- ##### interaction

#### 2.1 Abstracting physical resources

forbid applications from directly accessing sensitive hardware resources, and instead to **abstract the resources into services**

1. ###### Unix applications interact with storage only through the file system’s open, read, write, and close system calls, instead of reading and writing the disk directly.

2. ###### Unix processes use exec to build up their memory image, instead of directly interacting with physical memory.

3. ###### Unix transparently switches hardware CPUs among processes, saving and restoring register state as necessary, so that applications don’t have to be aware of time sharing.

#### 2.2 User mode, supervisor mode, and system calls

Strong isolation requires a **hard boundary between applications and the operating system.**