# await、async、事件循环

## 1. 异步函数 async function

- async关键字用于声明一个异步函数：

  - async是asynchronous单词的缩写，异步、非同步；
  - sync是synchronous单词的缩写，同步、同时；

- async异步函数可以有很多中写法：

  ```javascript
  async function foo1() {
    
  }
  
  const foo2 = async function() {
    
  }
  
  const foo3 = async () => {
    
  }
  
  class Person {
    async foo() {
      
    }
  }
  ```



## 2. 异步函数的执行流程

- 异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行。

- 如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递；

- 异步函数有返回值时，和普通函数会有区别：

  - **情况一**：异步函数也可以有返回值，但是异步函数的返回值相当于被包裹到Promise.resolve中；

  - **情况二**：如果我们的异步函数的返回值是Promise，状态由会由Promise决定；

  - **情况三**：如果我们的异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定；

    ```javascript
    async function foo2() {
      // 1.返回一个普通的值
      // -> Promise.resolve(321)
      // return ["abc", "cba", "nba"]
    
      // 2.返回一个Promise
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve("aaa")
      //   }, 3000)
      // })
    
      // 3.返回一个thenable对象
      // return {
      //   then: function(resolve, reject) {
      //     resolve("bbb")
      //   }
      // }
    }
    
    foo2().then(res => {
      console.log("res:", res)
    })
    ```



## 3. await关键字

- **async函数另外一个特殊之处** 就是可以在它内部 **使用await关键字**，而 **普通函数中是不可以** 的。
- await关键字有什么特点呢？
  - 通常使用await是后面会跟上一个表达式，这个表达式会返回一个Promise；
  - 那么await会等到Promise的状态变成fulfilled状态，之后继续执行异步函数;
- 如果await后面是一个 **普通的值**，那么会 **直接返回这个值**；
- 如果await后面是一个 **thenable的对象**，那么会根据对象的 **then方法调用来决定后续的值**；
- 如果await后面的表达式，返回的Promise是 **reject的状态**，那么会将这个 **reject结果直接作为函数的Promise的reject值**；



## 4. 进程和线程

- 线程和进程是操作系统中的两个概念：

  - `进程（process）`：计算机`已经运行的程序`，是`操作系统管理程序`的一种方式；
  - `线程（thread）`：操作系统能够运行`运算调度的最小单位`，通常情况下`它被包含在进程`中；

- **听起来很抽象，这里还是给出我的解释：**

  - `进程`：我们可以认为，启动`一个应用程序`，就会默认`启动一个进程`（也可能是多个进程）；
  - `线程`：每`一个进程`中，都会启动`至少一个线程`用来执行程序中的代码，这个线程被称之为`主线程`；
  - 所以我们也可以说进程是线程的容器；

- **再用一个形象的例子解释：**

  - 操作系统类似于一个大工厂；

  - 工厂中里有很多车间，这个车间就是进程；

  - 每个车间可能有一个以上的工人在工厂，这个工人就是线程；

    

## 5. 操作系统 – 进程 – 线程

![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112145355.png)



## 6. 操作系统的工作方式

- **操作系统是如何做到同时让多个进程（边听歌、边写代码、边查阅资料）同时工作呢？**

  - 这是因为`CPU的运算速度非常快`，它可以`快速的在多个进程之间迅速的切换`；
  - 当我们`进程中的线程`获取到`时间片`时，就可以`快速执行我们编写的代码`；
  - 对于用户来说`是感受不到这种快速的切换的`；

- 你可以在Mac的活动监视器或者Windows的资源管理器中查看到很多进程：

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112145502.png)



## 7. 浏览器中的JavaScript线程

- 我们经常会说**JavaScript是单线程（可以开启workers）**的，但是**JavaScript的线程应该有自己的容器进程**：`浏览器或者Node`。
- **浏览器是一个进程吗，它里面只有一个线程吗？**
  - 目前`多数的浏览器其实都是多进程`的，当我们`打开一个tab页面时就会开启一个新的进程`，这是为了`防止一个页面卡死而造成
    所有页面无法响应`，整个浏览器需要强制退出；
  - `每个进程中又有很多的线程`，其中`包括执行JavaScript代码的线程`；
- **JavaScript的代码执行是在一个单独的线程中执行的：**
  - 这就意味着JavaScript的代码，在`同一个时刻只能做一件事`；
  - 如果`这件事是非常耗时`的，就意味着当前的线程就`会被阻塞`；
- **所以真正耗时的操作，实际上并不是由JavaScript线程在执行的：**
  - 浏览器的每个进程是多线程的，那么`其他线程可以来完成这个耗时的操作`；
  - 比如`网络请求、定时器`，我们只需要在特性的时候执行应该有的回调即可；



## 8. 浏览器的事件循环

- **如果在执行JavaScript代码的过程中，有异步操作呢？**

  - 中间我们插入了一个setTimeout的函数调用；

  - 这个函数被放到入调用栈中，执行会立即结束，并不会阻塞后续代码的执行；

    ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112145632.png)



## 9. 宏任务和微任务

- **但是事件循环中并非只维护着一个队列，事实上是有两个队列：**
  - **`宏任务队列（macrotask queue）`：ajax、setTimeout、setInterval、DOM监听、UI Rendering等**
  - `微任务队列（microtask queue）`：Promise的then回调、 Mutation Observer API、queueMicrotask()等
- **那么事件循环对于两个队列的优先级是怎么样的呢？**
  1. `main script中的代码优先执行`（编写的顶层script代码）；
  2. 在`执行任何一个宏任务之前（不是队列，是一个宏任务）`，都会`先查看微任务队列中是否有任务需要执行`
     - 也就是宏任务执行之前，必须保证微任务队列是空的；
     - 如果不为空，那么就优先执行微任务队列中的任务（回调）；



## 10. 错误处理方案

- **开发中我们会封装一些工具函数，封装之后给别人使用：**
  - 在其他人使用的过程中，`可能会传递一些参数`；
  - 对于函数来说，需要`对这些参数进行验证`，否则可能得到的是我们不想要的结果；
- **很多时候我们可能验证到不是希望得到的参数时，就会直接return：**
  - 但是return存在很大的弊端：`调用者不知道是因为函数内部没有正常执行`，还是`执行结果就是一个undefined`；
  - 事实上，正确的做法应该是`如果没有通过某些验证，那么应该让外界知道函数内部报错`了；
- **如何可以让一个函数告知外界自己内部出现了错误呢？**
  - 通过`throw关键字`，抛出一个异常；
- **throw语句：**
  - `throw语句用于抛出一个用户自定义的异常`；
  - 当`遇到throw语句`时，`当前的函数执行会被停止`（throw后面的语句不会执行）；
- **如果我们执行代码，就会报错，拿到错误信息的时候我们可以及时的去修正代码。**



## 11. throw关键字

- **throw表达式就是在throw后面可以跟上一个表达式来表示具体的异常信息：**

- **throw关键字可以跟上哪些类型呢？**

  - `基本数据类型`：比如number、string、Boolean
  - `对象类型`：对象类型可以包含更多的信息

- **但是每次写这么长的对象又有点麻烦，所以我们可以创建一个类：**

  ```javascript
  class HyError {
  	constructor(errCode, errMsg) {
  		this.errCode = errCode 
      this.errMsg = errMsg
  	}
  }
  ```



## 12. Error类型

- **事实上，JavaScript已经给我们提供了一个Error类，我们可以直接创建这个类的对象：**

  ```javascript
  function foo() {
  	throw new Error("error message", "123")
  }
  ```

- **Error包含三个属性：**

  - `messsage`：创建Error对象时传入的message；
  - `name`：Error的名称，通常和类的名称一致；
  - `stack`：整个Error的错误信息，包括函数的调用栈，当我们直接打印Error对象时，打印的就是stack；

- **Error有一些自己的子类：**

  - RangeError：下标值越界时使用的错误类型；
  - SyntaxError：解析语法错误时使用的错误类型；
  - TypeError：出现类型错误时，使用的错误类型；



## 13. 异常的处理

- **我们会发现在之前的代码中，一个函数抛出了异常，调用它的时候程序会被强制终止：**

  - 这是因为如果我们在调用一个函数时，这个函数`抛出了异常`，但是我们`并没有对这个异常进行处理`，那么这个`异常会继续传
    递到上一个函数调用`中；
  - 而如果`到了最顶层（全局）的代码中依然没有对这个异常的处理代码`，这个时候就会报错并且终止程序的运行；

- **我们先来看一下这段代码的异常传递过程：**

  - foo函数在被执行时会抛出异常，也就是我们的bar函数会拿到这个异常；

  - 但是bar函数并没有对这个异常进行处理，那么这个异常就会被继续传递到调用bar函数的函数，也就是test函数；

  - 但是test函数依然没有处理，就会继续传递到我们的全局代码逻辑中；

  - 依然没有被处理，这个时候程序会终止执行，后续代码都不会再执行了；

    ```javascript
    function foo() {
    	throw "error message"
    }
    
    function bar() {
      foo()
    }
    
    function test() {
      bar()
    }
    
    test()
    ```



## 14. 异常的捕获

- **但是很多情况下当出现异常时，我们并不希望程序直接推出，而是希望可以正确的处理异常：**

  - 这个时候我们就`可以使用try catch`

    ```javascript
    function foo() {
    	throw "error message"
    }
    
    function bar() {
      try {
        foo()
        console.log("foo后续代码")
      } catch (err) {
        console.log(err)
      }
    }
    ```

- **当然，如果有一些必须要执行的代码，我们可以使用finally来执行：**

  - finally表示最终一定会被执行的代码结构；
  - 注意：如果try和finally中都有返回值，那么会使用finally当中的返回值；



