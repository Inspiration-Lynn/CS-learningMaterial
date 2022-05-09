# CMake指南

> "All problems in computer science can be solved by another level of indirection"
>
> "... except for the problem of too many levels of indirection"
>
> \- David Wheeler

## 什么是CMake?

不同平台有不同的Make工具，Makefile也有不同标准。

CMake允许开发者编写一种**与平台无关**的 CMakeList.txt 文件来定制整个编译流程，然后根据平台生成所需的本地化 Makefile 和工程文件，如 Unix 的 Makefile 或 Windows 的 Visual Studio 工程。从而做到 “Write once, run everywhere”。

Linux平台使用CMake编译构建项目流程：

1. 编写 CMake 配置文件 CMakeLists.txt 
2. 执行命令`cmake <CMakeLists.txt-path>` 生成`Makefile`
3. 在`Makefile`同目录执行命令`make`进行编译

通常在项目中创建build文件夹进行编译：

```bash
mkdir build && cd build
cmake ..
make
```

## 基本语法

1. 说明所需cmake的最小版本

```cmake
cmake_minimum_required(VERSION 3.9)
```

2. 声明项目名

生成几个变量：`PROJECT_NAME`、 `PROJECT_VERSION`、`PROJECT_DESCRIPTION`

```cmake
project(Tutorial VERSION 1.0.1 DESCRIPTION "cmake tutorial")
```

### 预定义变量

`PROJECT_NAME`：项目名称
`PROJECT_SOURCE_DIR`：工程的根目录
`PROJECT_BINARY_DIR` ：执行cmake命令的目录
`CMAKE_CURRENT_SOURCE_DIR`：当前CMakeLists.txt文件所在目录
`CMAKE_C_FLAGS`：C编译选项
`CMAKE_CXX_FLAGS`：C++编译选项
`CMAKE_C_COMPILER`：C编译器
`CMAKE_CXX_COMPILER`：C++编译器
`EXECUTABLE_OUTPUT_PATH`：设置编译后可执行文件目录
`LIBRARY_OUTPUT_PATH`：设置生成的库文件目录

例子 - 设置可执行文件输出位置：

```CMakeLists.txt
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR})
```

## 引入动态库编译可执行文件

以构建OpenCV项目为例：

```cmake
#cmake_minimum_required(VERSION 3.22)
cmake_minimum_required(VERSION 3.16)
project(yolov5)

set(CMAKE_CXX_STANDARD 14)
find_package(OpenCV)

include_directories(${OpenCV_INCLUDE_DIRS})

add_executable(yolov5 main.cpp)

target_link_libraries(yolov5 ${OpenCV_LIBS})
```

## 构建动态库并使用

- 参考：[c++ - How to create a shared library with cmake? - Stack Overflow](https://stackoverflow.com/questions/17511496/how-to-create-a-shared-library-with-cmake?msclkid=d860eaeecf6711ecaf46cb2f9f216c7c)

quick start:

```cmake
cmake_minimum_required(VERSION 2.8)

project (test)
set(CMAKE_BUILD_TYPE Release)

include_directories(${CMAKE_CURRENT_SOURCE_DIR}/include)
add_library(test SHARED src/test.cpp)
```

以构建只依赖OpenCV的yolo动态库为例：

```cmake
cmake_minimum_required(VERSION 3.16)
project(yolov5)

set(LIBRARY_OUTPUT_PATH ${CMAKE_SOURCE_DIR})
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR})

set(CMAKE_CXX_STANDARD 14)

find_package(OpenCV)

include_directories(${OpenCV_INCLUDE_DIRS} ${CMAKE_CURRENT_SOURCE_DIR})
add_library(${PROJECT_NAME} SHARED yolo.cpp)   #生成libyolov5.so

add_executable( main main.cpp )
target_link_libraries(main ${OpenCV_LIBS} ${PROJECT_NAME} )
```

## 使用find_package引入外部依赖包

- 参考：[Cmake之深入理解find_package()的用法 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/97369704?msclkid=027e98e4cf5811ec957ce261f41f193b)

### 1- 通过Cmake内置模块引入依赖包

CMake预定义了一些寻找依赖包的[Module](https://cmake.org/cmake/help/latest/manual/cmake-modules.7.html)，存储目录为`/usr/share/cmake-<version>/Modules`（默认安装路径下）。每个以`Find<LibaryName>.cmake`命名的文件都可以找到一个包，可以直接使用find_package函数进行引用。

使用方法以curl库为例：

```CMakeLists.txt
find_package(CURL)
add_executable(curltest curltest.cc)
if(CURL_FOUND)
    target_include_directories(clib PRIVATE ${CURL_INCLUDE_DIR})
    target_link_libraries(curltest ${CURL_LIBRARY})
else(CURL_FOUND)
    message(FATAL_ERROR ”CURL library not found”)
endif(CURL_FOUND)
```

每一个模块都会定义以下几个变量

- `<LibaryName>_FOUND`
- `<LibaryName>_INCLUDE_DIR or <LibaryName>_INCLUDES`
- `<LibaryName>_LIBRARY or <LibaryName>_LIBRARIES`

### 2- 引入支持CMake编译的非官方的库

- 只对支持cmake编译安装的库有效，如OpenCV

首先通过CMake自行编译安装所需库，[以OpenCV为例](https://docs.opencv.org/4.x/d7/d9f/tutorial_linux_install.html?msclkid=723f8baccf5b11ec90636bf29794e367)。

若安装路径为系统默认目录，接下来便可以像引入curl一样引入OpenCV库了。

```CMakeLists.txt
find_package(OpenCV REQUIRED)

# 添加OpenCV头文件
include_directories(${OpenCV_INCLUDE_DIRS})

# 添加一个可执行程序
add_executable( main main.cpp )

# 将库文件链接到可执行程序上
target_link_libraries( main ${OpenCV_LIBS})
```

若要指定find_package路径（安装在非系统路径中）

```CMakeLists.txt
# instruct CMake where to look for the OpenCV config module
find_package(OpenCV REQUIRED PATHS <path-to-.cmake>)
```

### find_package机制

- Module模式（优先）
  - 机制：cmake找到文件`Find<LibraryName>.cmake`，此文件可以找到库文件与头文件
  - 搜索`Find<LibraryName>.cmake`的两个路径
    - cmake安装目录下的`share/cmake-<version>/Modules`
    - 指定的`CMAKE_MODULE_PATH`的所在目录（可以在CMakeLists.txt中设置）
- Config模式
  - 机制：通过`<LibraryName>Config.cmake` or `<package-name>-config.cmake`来引入库
    - 如OpenCVConfig.cmake路径为/usr/local/lib/cmake/opencv4/，而`/usr/local/lib/cmake/<LibraryName>/`正是find_package函数的搜索路径之一
  - 对于原生支持CMake的项目库安装时会拷贝一份XXXConfig.cmake到系统目录中，因此在没有显式指定搜索路径时也可以找到。对于非由cmake编译的项目，通常会编写一个`Find<LibraryName>.cmake`，通过脚本来获取头文件、库文件等信息。

