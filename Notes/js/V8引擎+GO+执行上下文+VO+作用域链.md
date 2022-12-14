# 深入JavaScript的运行原理

## 1. V8引擎

### 1.1 V8引擎的执行原理

- 官方对**V8引擎的定义**：

  - V8是用 **C++编写** 的Google开源 **高性能JavaScript和WebAssembly引擎**，它用于 **Chrome和Node.js** 等。
  - 它实现 **ECMAScript** 和 **WebAssembly**，并在Windows 7或更高版本，macOS 10.12+和使用x64，IA-32，ARM或MIPS处理
    器的Linux系统上运行。
  - **V8可以独立运行，也可以嵌入到任何C ++应用程序中**。

  [![1668140292484](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCED2T.png)]()

### 1.1 V8引擎的架构

- V8引擎本身的源码**非常复杂**，大概有超过**100w行C++代码**，通过了解它的架构，我们可以知道它是如何对JavaScript执行的：
- **Parse** 模块会将JavaScript代码转换成AST（抽象语法树），这是因为解释器并不直接认识JavaScript代码；
  - 如果函数没有被调用，那么是不会被转换成AST的；
  - Parse的V8官方文档：https://v8.dev/blog/scanner
- **Ignition** 是一个解释器，会将AST转换成ByteCode（字节码）
  - 同时会收集TurboFan优化所需要的信息（比如函数参数的类型信息，有了类型才能进行真实的运算）；
  - 如果函数只调用一次，Ignition会解释执行ByteCode；
  - Ignition的V8官方文档：https://v8.dev/blog/ignition-interpreter
- **TurboFan** 是一个编译器，可以将字节码编译为CPU可以直接执行的机器码；
  - 如果一个函数被多次调用，那么就会被标记为 **热点函数**，那么就会经过 **TurboFan转换成优化的机器码，提高代码的执行性能**；
  - 但是，**机器码实际上也会被还原为ByteCode**，这是因为如果后续执行函数的过程中，**类型发生了变化（比如sum函数原来执**
    **行的是number类型，后来执行变成了string类型）**，之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码；
  - TurboFan的V8官方文档：https://v8.dev/blog/turbofan-jit

### 1.3 V8引擎的解析图（官方）

![image](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCE5RK.png)

### 1.4 V8引擎的解析图

![image](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCEHqH.png)



## 2. 初始化全局对象

- js引擎会在 **执行代码之前**，会在 **堆内存中创建一个全局对象**：Global Object（GO）

  - 该对象 **所有的作用域（scope）** 都可以访问；

  - 里面会包含 **Date、Array、String、Number、setTimeout、setInterval** 等等；

  - 其中还有一个 **window属性** 指向自己；

    ![image](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCELdA.png)



## 3. 执行上下文（ Execution Contexts ）

- js引擎内部有一个**执行上下文栈（Execution Context Stack，简称ECS）**，它是用于执行**代码的调用栈**。
- 那么现在它要执行谁呢？执行的是**全局的代码块**：
  - 全局的代码块为了执行会构建一个 **Global Execution Context（GEC）**；
  - GEC会 **被放入到ECS中** 执行；
- GEC被放入到ECS中里面**包含两部分内容**：
  - 第一部分：在代码执行前，在 **parser转成AST的过程** 中，会将 **全局定义的变量、函数** 等加入到 **GlobalObject** 中，但是并 **不会赋值**，这个过程也称之为 **变量的作用域提升（hoisting）**;
  - 第二部分：在代码执行中，对变量赋值，或者执行其他的函数；



## 4. 认识VO对象（Variable Object）

- 每一个执行上下文会关联一个 **VO（Variable Object，变量对象），变量和函数声明** 会被添加到这个VO对象中；
- 当全局代码被执行的时候，VO就是GO对象了。



## 5. 全局代码执行过程

### 5.1 执行前

![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCZP1K.png)

### 5.2 执行后

![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCZE0H.png)



## 6. 函数如何被执行呢？

- 在执行的过程中**执行到一个函数时**，就会根据**函数体**创建一个**函数执行上下文（Functional Execution Context，简称FEC）**，
  并且压入到 **EC Stack** 中。
- 因为每个执行上下文都会关联一个VO，那么**函数执行上下文关联的VO是什么**呢？
  - 当进入一个函数执行上下文时，会创建一个 **AO对象（Activation Object）**；
  - 这个AO对象会 **使用arguments作为初始化**，并且 **初始值是传入的参数**；
  - 这个 **AO对象会作为执行上下文的VO来存放变量的初始化**；



## 7. 函数的执行过程

### 7.1 执行前

![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCZYAs.png)

### 7.2 执行后

![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCZa90.png)



## 8. 作用域和作用域链（Scope Chain）

- 当进入到一个**执行上下文**时，执行上下文也会**关联一个作用域链（Scope Chain）**

  - **作用域链是一个对象列表**，用于变量标识符的求值；

  - 当进入一个执行上下文时，这个 **作用域链被创建，并且根据代码类型，添加一系列的对象**；

    ![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCZcNR.png)





