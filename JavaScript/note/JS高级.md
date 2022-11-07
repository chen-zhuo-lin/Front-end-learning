# 一、this的绑定规则

## 1.1 规则一：默认绑定

- **什么情况下使用默认绑定呢？独立函数调用。**

  - 独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用；

  - 常见的默认绑定：

    ```javascript
    // 1.案例一
    function foo() {
     console.log(this) 
    }
    foo()
    
    // 2.案例二
    function test1() {
      console.log(this)
      test2()
    }
    function test2() {
      console.log(this)
      test3()
    }
    function test3() {
      console.log(this)
    }
    test1()
    
    // 3.案例三	
    fucntion foo(func) {
      func()
    }
    var obj = {
      name: "why",
      bar: function() {
        console.log(this)
      }
    }
    foo(obj.bar)
    ```



## 1.2 规则二：隐式绑定

- **另外一种比较常见的调用方式是`通过某个对象进行调用`的：**

- 常见的隐式绑定：

  ```JavaScript
  // 1.通过对象调用
  function foo() {
    console.log(this) // obj对象
  }
  var obj = {
    name: "why",
    foo: foo
  }
  obj.foo()
  ```

  ```javascript
  function foo() {
    console.log(this)
  }
  
  var obj1 = {
    name: "obj1",
    foo: foo
  }
  
  var obj2 = {
    name: "obj2",
    obj1: obj1
  }
  
  obj2.obj1.foo() // obj1对象
  ```

  ```JavaScript
  function foo() {
    console.log(this)
  }
  
  var obj1 = {
    name: "obj1",
    foo: foo
  }
  
  // 将obj1的foo赋值给bar
  var bar = obj1.foo
  bar() // window
  ```



## 1.3 规则三：显式绑定

- **隐式绑定有一个前提条件：**

  - 必须`在调用的对象内部有一个对函数的引用`（比如一个属性）；
  - 如果没有这样的引用，在进行调用时，会报找不到该函数的错误；
  - 正是通过这个引用，间接的将this绑定到了这个对象上；

- **如果我们不希望在 `对象内部` 包含这个`函数的引用`，同时又希望在这个对象上`进行强制调用`，该怎么做呢?**

- **JavaScript所有的函数都可以使用`call和apply方法`。**

  - 第一个参数是相同的，要求传入一个对象；

    - 这个对象的作用是什么呢？就是给this准备的。
    - 在调用这个函数时，会将this绑定到这个传入的对象上。

  - 后面的参数，apply为数组，call为参数列表；

    `function.apply(thisArg, [argsArray	])`

    `function.call(this, arg1, arg2, ...)`

- 因为上面的过程，我们明确的绑定了this指向的对象，所以称之为 **显式绑定**。



## 1.4 call、apply、bind

- **通过call或者apply绑定this对象**

  - 显示绑定后，this就会明确的指向绑定的对象

    ```JavaScript
    function foo() {
      console.log(this)
    }
    
    foo.call(window) // window
    foo.call({name: "why"}) // {name: "why"}
    foo.call(123) // Number对象，存放是123
    ```

- **如果我们希望一个函数总是显示的绑定到一个对象上，可以怎么做呢？**

  - 使用bind方法，bind() 方法创建一个新的`绑定函数（bound function，BF）`；

  - 绑定函数是一个 `exotic function object（怪异函数对象，ECMAScript 2015 中的术语）`;

  - 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

    `function.bind(thisArg[, arg1[, arg2[, ...]]])`



## 1.5 new绑定

- **JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字。**

- **使用new关键字来调用函数是，会执行如下的操作：**

  1. 创建一个全新的对象；

  2. 这个新对象会被执行prototype连接；

  3. 这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）；

  4. 如果函数没有返回其他对象，表达式会返回这个新对象；

     ```JavaScript
     function Person(name){
       console.log(this) // Person {}
       this.name = name
     }
     
     var p = new Person("why")
     console.log(p)
     ```



## 1.6 规则优先级

1. **默认规则的优先级最低**
2. **显示绑定优先级高于隐式绑定**
3. n**ew绑定优先级高于隐式绑定**
4. **new绑定优先级高于bind**
   - new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高
   - new绑定可以和bind一起使用，new绑定优先级更高



## 1.7 this规则之外 – 忽略显示绑定

- **情况一：如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则：**

  ```javascript
  function foo() {
    console.log(this)
  }
  
  var obj = {
    name: "why"
  }
  
  foo.call(obj) // obj对象
  foo.call(null) // window
  foo.call(undefined) // window
  
  var bar = foo.bind(null)
  bar() // window
  ```

- **情况二：创建一个函数的 `间接引用`，这种情况使用默认绑定规则。**

  - 赋值(obj2.foo = obj1.foo)的结果是foo函数；

  - foo函数被直接调用，那么是默认绑定；

    ```javascript
    function foo() {
      console.log(this)
    }
    
    var obj1 = {
      name: "obj1",
      foo: foo
    }
    
    var obj2 = {
      name: "obj2",
    }
    
    obj1.foo() // obj1对象
    (obj2.foo = obj1.foo)() // window
    ```

- **情况三：箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this。**

- **我们来看一个模拟网络请求的案例：**

  - 这里我使用setTimeout来模拟网络请求，请求到数据后如何可以存放到data中呢？

  - 我们需要拿到obj对象，设置data；

  - 但是直接拿到的this是window，我们需要在外层定义：var _this = this

  - 在setTimeout的回调函数中使用_this就代表了obj对象

    ```JavaScript
    var obj = {
      data: [],
      getData: function() {
        var _this = this;
        setTimeout(function() {
          // 模拟获取到的数据
          var res = ["abc", "cba", "nba"];
          _this.data.push(...res)
        }, 1000)
      }
    }
    ```



## 1.8 箭头函数 arrow function

- **箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁：**

  - 箭头函数`不会绑定this、arguments属性`；
  - 箭头函数`不能作为构造函数来使用`（不能和new一起来使用，会抛出错误）；

- **箭头函数如何编写呢？**

  - (): 函数的参数

  - {}: 函数的执行体

    ```javascript
    nums.forEach((item, index, arr) => {
      
    })
    ```

- **箭头函数的编写优化**：

  - **优化一: 如果只有一个参数()可以省略**

    ```JavaScript
    nums.forEach(item => {})
    ```

  - **优化二: 如果函数执行体中只有一行代码, 那么可以省略大括号**

    - 并且这行代码的返回值会作为整个函数的返回值

      ```java
      nums.forEach(item => item)
      ```

  - **优化三: 如果函数执行体只有返回一个对象, 那么需要给这个对象加上()**

    ```javascript
    var foo = () => {
      return { name: "abc"}
    }
    var bar = () => ({name: "abc"})
    ```

- **ES6箭头函数this**:

  - **从ES6开始，我们会使用箭头函数;**

    - 为什么在setTimeout的回调函数中可以直接使用this呢？

    - 因为箭头函数并不绑定this对象，那么this引用就会从上层作用于中找到对应的this

    ```javascript
    var obj = {
      data: [],
      getData: function() {
        console.log(obj)
        setTimeout(() => {
          // 模拟获取到的数据
          var res = ["abc", "cba", "nba"];
          this.data.push(...res)
        }, 1000)
      }
    }
    ```



# 二、深入浏览器的渲染原理

## 2.1 浏览器的内核

- 常见的浏览器内核有
  - `Trident `（ 三叉戟）：IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器；
  - `Gecko`（ 壁虎） ：Mozilla Firefox；
  - `Presto`（急板乐曲）-> `Blink `（眨眼）：Opera
  - `Webkit `：Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器（Android、iOS）
  - `Webkit `-> `Blink `：Google Chrome，Edge
- 我们经常说的浏览器内核指的是浏览器的排版引擎：
  - **排版引擎**（layout engine），也称为**浏览器引擎**（browser engine）、**页面渲染引擎**（rendering engine）或**样版引擎**。
- 也就是一个网页下载下来后，就是由我们的渲染引擎来帮助我们解析的。



## 2.2 渲染引擎解析页面的详细流程

- **解析一：HTML解析过程**
  - 默认情况下服务器会给浏览器返回index.html文件，所以解析HTML是所有步骤的开始:
  - 解析HTML，会构建DOM Tree：
- **解析二 – 生成CSS规则**
  - 在解析的过程中，如果遇到CSS的link元素，那么会由浏览器负责下载对应的CSS文件：
    - 注意：下载CSS文件是不会影响DOM的解析的；
  - 浏览器下载完CSS文件后，就会对CSS文件进行解析，`解析出对应的规则树`：
    - 我们可以称之为 `CSSOM`（CSS Object Model，CSS对象模型）；
- **解析三 – 构建Render Tree**
  - 当有了DOM Tree和 CSSOM Tree后，就可以两个结合来构建`Render Tree`了
  - 注意一：`link元素不会阻塞DOM Tree的构建过程`，但是`会阻塞Render Tree的构建过程`
    - 这是因为Render Tree在构建时，需要对应的CSSOM Tree；
  - 注意二：`Render Tree和DOM Tree并不是一一对应的关系`，比如对于display为none的元素，压根不会出现在render tree中；
- **解析四 – 布局（layout）和绘制（Paint）**
  - 第四步是在渲染树（Render Tree）上运行`布局（Layout）`以计算每个节点的几何体。
    - 渲染树会表示显示哪些节点以及其他样式，但是`不表示每个节点的尺寸、位置`等信息；
    - 布局是确定呈现树中`所有节点的宽度、高度和位置信息`；
  - 第五步是将每个节点绘制（Paint）到屏幕上
    - 在绘制阶段，浏览器将布局阶段计算的`每个frame转为屏幕上实际的像素点`；
    - 包括`将元素的可见部分进行绘制`，比如`文本、颜色、边框、阴影、替换元素（比如img）`



## 2.3 回流和重绘

- **理解回流reflow：（也可以称之为重排）**
  - 第一次确定节点的大小和位置，称之为布局（layout）。
  - 之后对节点的大小、位置修改重新计算称之为回流。
- **什么情况下引起回流呢？**
  - 比如DOM结构发生改变（添加新的节点或者移除节点）；
  - 比如改变了布局（修改了width、height、padding、font-size等值）
  - 比如窗口resize（修改了窗口的尺寸等）
  - 比如调用getComputedStyle方法获取尺寸、位置信息；
- **理解重绘repaint：**
  - 第一次渲染内容称之为绘制（paint）。
  - 之后重新渲染称之为重绘。
- **什么情况下会引起重绘呢？**
  - 比如修改背景色、文字颜色、边框颜色、样式等；
  - 回流一定会引起重绘，所以回流是一件很消耗性能的
    事情。
- **避免回流的方式:**
  1. 修改样式时`尽量一次性修改`;
     - 比如通过cssText修改，比如通过添加class修改
  2. 尽量`避免频繁的操作DOM`;
     - 我们可以在一个DocumentFragment或者父元素中将要操作的DOM操作完成，再一次性的操作；
  3. 尽量`避免通过getComputedStyle获取尺寸、位置`等信息；
  4. 对`某些元素使用position的absolute或者fixed`
     - 并不是不会引起回流，而是开销相对较小，不会对其他元素造成影响。



## 2.4 特殊解析 – composite合成

- **绘制的过程，可以将布局后的元素绘制到多个合成图层中。**
  - 这是浏览器的一种优化手段；
- **默认情况下，标准流中的内容都是被绘制在同一个图层（Layer）中的；**
- **而一些特殊的属性，会创建一个新的合成层（ CompositingLayer ），并且新的图层可以利用GPU来加速绘制；**
  - 因为每个合成层都是单独渲染的；
- **那么哪些属性可以形成新的合成层呢？常见的一些属性：**
  - `3D transforms`
  - `video、canvas、iframe`
  - `opacity 动画转换时；`
  - `position: fixed`
  - `will-change`：一个实验性的属性，提前告诉浏览器元素可能发生哪些变化；
  - `animation 或 transition 设置了opacity、transform`；
- 分层确实可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分过度使用。



## 2.5 script元素和页面解析的关系

- **我们现在已经知道了页面的渲染过程，但是JavaScript在哪里呢？**
  - 事实上，浏览器在解析HTML的过程中，遇到了`script元素是不能继续构建DOM树`的；
  - 它会`停止继续构建，首先下载JavaScript代码，并且执行JavaScript的脚本`；
  - 只有`等到JavaScript脚本执行结束后，才会继续解析HTML，构建DOM树`；
- **为什么要这样做呢？**
  - 这是`因为JavaScript的作用之一就是操作DOM，并且可以修改DOM`；
  - 如果我们`等到DOM树构建完成并且渲染再执行JavaScript，会造成严重的回流和重绘，影响页面的性能`；
  - 所以会在`遇到script元素时，优先下载和执行JavaScript代码，再继续构建DOM树`；
- **但是这个也往往会带来新的问题，特别是现代页面开发中：**
  - 在目前的开发模式中（比如Vue、React），`脚本往往比HTML页面更“重”，处理时间需要更长`；
  - 所以会`造成页面的解析阻塞，在脚本下载、执行完成之前，用户在界面上什么都看不到`；



## 2.6 defer属性

- **defer 属性告诉浏览器`不要等待脚本下载`，而`继续解析HTML，构建DOM Tree`。**

  - 脚本`会由浏览器来进行下载，但是不会阻塞DOM Tree`的构建过程；
  - 如果脚本提前下载好了，它会`等待DOM Tree构建完成，在DOMContentLoaded事件之前先执行defer中的代码`；

- **所以DOMContentLoaded总是会等待defer中的代码先执行完成。**

  ```html
  <script defer src="demo.js"></script>
  <script>
  	window.addEventListener("DOMContentLoaded", () => {
      console.log('DOM 加载完成')
    })
  </script>
  ```

- **另外多个带defer的脚本是可以保持正确的顺序执行的**。

- **从某种角度来说，defer可以提高页面的性能，并且推荐放到head元素中**；

- **注意：defer仅适用于外部脚本，对于script默认内容会被忽略**。



## 2.7 async属性

- **async 特性与 defer 有些类似，它也能够让脚本不阻塞页面。**

- **async是让一个脚本完全独立的：**

  - 浏览器`不会因 async 脚本而阻塞`（与 defer 类似）；

  - `async脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本`；

  - `async不会能保证在DOMContentLoaded之前或者之后执行`；

    ```html
    <script>
      window.addEventListener("DOMContentLoaded", () => {
        console.log('DOM 加载完成')
      })
    </script>
    <script async src="demo.js"></script>
    ```

- **defer通常用于需要在文档解析后操作DOM的JavaScript代码，并且对多个script文件有顺序要求的;**

- **async通常用于独立的脚本，对其他脚本，甚至DOM没有依赖的；**

  

# 三、深入JavaScript的运行原理

## 3.1 JavaScript代码的执行

- **JavaScript代码下载好之后，是如何一步步被执行的呢？**
- **我们知道，浏览器内核是由两部分组成的，以webkit为例**：
  - `WebCore`：负责HTML解析、布局、渲染等等相关的工作；
  - `JavaScriptCore`：解析、执行JavaScript代码；
- **另外一个强大的JavaScript引擎就是V8引擎。**



## 3.2 V8引擎的架构

- V8引擎本身的源码**非常复杂**，大概有超过**100w行C++代码**，通过了解它的架构，我们可以知道它是如何对JavaScript执行的：
- `Parse`模块会将JavaScript代码转换成AST（抽象语法树），这是因为解释器并不直接认识JavaScript代码；
  - 如果函数没有被调用，那么是不会被转换成AST的；
  - Parse的V8官方文档：https://v8.dev/blog/scanner
- `Ignition`是一个解释器，会将AST转换成ByteCode（字节码）
  - 同时会收集TurboFan优化所需要的信息（比如函数参数的类型信息，有了类型才能进行真实的运算）；
  - 如果函数只调用一次，Ignition会解释执行ByteCode；
  -  Ignition的V8官方文档：https://v8.dev/blog/ignition-interpreter
- `TurboFan`是一个编译器，可以将字节码编译为CPU可以直接执行的机器码；
  - 如果一个函数被多次调用，那么就会被标记为`热点函数`，那么就会经过`TurboFan转换成优化的机器码，提高代码的执行性能`；
  - 但是，`机器码实际上也会被还原为ByteCode`，这是因为如果后续执行函数的过程中，`类型发生了变化（比如sum函数原来执
    行的是number类型，后来执行变成了string类型）`，之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码；
  - TurboFan的V8官方文档：https://v8.dev/blog/turbofan-jit



## 3.3 初始化全局对象

- js引擎会在`执行代码之前`，会在`堆内存中创建一个全局对象`：Global Object（GO）
  - 该对象 `所有的作用域（scope）`都可以访问；
  - 里面会包含`Date、Array、String、Number、setTimeout、setInterval`等等；
  - 其中还有一个`window属性`指向自己；



## 3.4 执行上下文（ Execution Contexts ）

- js引擎内部有一个**执行上下文栈（Execution Context Stack，简称ECS）**，它是用于执行**代码的调用栈**。
- 那么现在它要执行谁呢？执行的是**全局的代码块**：
  - 全局的代码块为了执行会构建一个 **Global Execution Context（GEC）**；
  - GEC会 `被放入到ECS中` 执行；
- **GEC被放入到ECS中里面包含两部分内容：**
  - **第一部分**：在代码执行前，在`parser转成AST的过程`中，会将`全局定义的变量、函数`等加入到`GlobalObject`中，但是并`不会
    赋值`，这个过程也称之为`变量的作用域提升（hoisting）`；
  - **第二部分**：在代码执行中，对变量赋值，或者执行其他的函数；



## 3.5 认识VO对象（Variable Object）

- **每一个执行上下文会关联一个`VO（Variable Object，变量对象），变量和函数声明`会被添加到这个VO对象中**。
- **当全局代码被执行的时候，VO就是GO对象了**



## 3.6 函数如何被执行呢？

- 在执行的过程中**执行到一个函数时**，就会根据**函数体**创建一个**函数执行上下文（Functional Execution Context，简称FEC）**，
  并且压入到**EC Stack**中。
- **因为每个执行上下文都会关联一个VO，那么函数执行上下文关联的VO是什么呢？**
  - 当进入一个函数执行上下文时，会创建一个`AO对象（Activation Object）`；
  - 这个AO对象会`使用arguments作为初始化`，并且`初始值是传入的参数`；
  - 这个`AO对象会作为执行上下文的VO来存放变量的初始化`；



## 3.7 作用域和作用域链（Scope Chain）

- **当进入到一个执行上下文时，执行上下文也会关联一个作用域链（Scope Chain）**
  - `作用域链是一个对象列表`，用于变量标识符的求值；
  - 当进入一个执行上下文时，这个`作用域链被创建，并且根据代码类型，添加一系列的对象`；



# 四、JavaScript内存管理和闭包

## 4.1 认识内存管理

- 不管什么样的编程语言，在**代码的执行过程中都是需要给它分配内存**的，不同的是**某些编程语言**需要我们**自己手动的管理内存**，
  **某些编程语言**会可以**自动帮助我们管理内存**：
- 不管以什么样的方式来管理内存，**内存的管理都会有如下的生命周期**：
  - 第一步：`分配申请你需要的内存`（申请）；
  - 第二步：`使用分配的内存`（存放一些东西，比如对象等）；
  - 第三步：`不需要使用时，对其进行释放`；
- **不同的编程语言对于第一步和第三步会有不同的实现：**
  - `手动管理内存`：比如C、C++，包括早期的OC，都是需要手动来管理内存的申请和释放的（malloc和free函数）；
  - `自动管理内存`：比如Java、JavaScript、Python、Swift、Dart等，它们有自动帮助我们管理内存；
- **对于开发者来说，JavaScript 的内存管理是自动的、无形的。**
  - 我们创建的`原始值、对象、函数……这一切都会占用内存`；
  - 但是我们`并不需要手动来对它们进行管理，JavaScript引擎`会帮助我们处理好它；



## 4.2 JavaScript的内存管理

- JavaScript会在**定义数据时**为我们分配内存。
- **但是内存分配方式是一样的吗？**
  - JS对于`原始数据类型内存的分配`会在执行时，直接在栈空间进行分配；
  - JS对于`复杂数据类型内存的分配`会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用；



## 4.3 JavaScript的垃圾回收

- 因为**内存的大小是有限**的，所以当**内存不再需要的时候**，我们需要**对其进行释放**，以便腾出**更多的内存空间**。
- 在**手动管理内存的语言**中，我们需要通过**一些方式自己来释放不再需要的内存，比如free函数**：
  - 但是这种管理的方式其实`非常的低效`，影响我们`编写逻辑的代码的效率`；
  - 并且这种方式对`开发者的要求也很高`，并且`一不小心就会产生内存泄露`；
- 所以大部分**现代的编程语言都是有自己的垃圾回收机制**：
  - 垃圾回收的英文是`Garbage Collection`，简称`GC`；
  - 对于`那些不再使用的对象`，我们都称之为是`垃圾`，它需要被`回收`，以释放更多的内存空间；
  - 而我们的语言运行环境，比如Java的运行环境JVM，JavaScript的运行环境js引擎都会内存 `垃圾回收器`；
  - `垃圾回收器`我们也会简称为`GC`，所以在很多地方你看到GC其实指的是垃圾回收器；



## 4.4 常见的GC算法

- **引用计数：**
  - 当`一个对象有一个引用指向它`时，那么这个`对象的引用就+1`；
  - 当一个`对象的引用为0`时，这个对象就`可以被销毁掉`；
  - 这个算法有一个很大的弊端就是会产生循环引用；
- **标记清除：**
  - 标记清除的核心思路是`可达性（Reachability）`
  - 这个算法是设置一个`根对象（root object），垃圾回收器`会定期`从这个根`开始，找所有从根开始`有引用到的对象`，对于那些`没有引用到的对象，就认为是不可用的对象`；
  - 这个算法`可以很好的解决循环引用`的问题；
- **其他算法优化补充:**
  - **标记整理（Mark-Compact）** 和“标记－清除”相似；
    - 不同的是，回收期间同时会将保留的存储对象`搬运汇集到连续的内存空间`，从而`整合空闲空间，避免内存碎片化`；
  - **分代收集（Generational collection）**—— 对象被分成两组：`“新的”和“旧的”`。
    - 许多对象出现，完成它们的工作并很快死去，它们可以`很快被清理`；
    - 那些长期存活的对象会变得`“老旧”`，而且`被检查的频次也会减少`；
  - **增量收集（Incremental collection）**
    - 如果有许多对象，并且我们`试图一次遍历并标记整个对象集，则可能需要一些时间，并在执行过程中带来明显的延迟`。
    - 所以引擎试图`将垃圾收集工作分成几部分来做`，然后`将这几部分会逐一进行处理，这样会有许多微小的延迟而不是一个大的
      延迟`；
  - **闲时收集（Idle-time collection）**
    - 垃圾收集器`只会在 CPU 空闲时尝试运行，以减少可能对代码执行`的影响。



## 4.5 闭包的定义

- **MDN对JavaScript闭包的解释：**
  - 一个函数和对其周围状态**（lexical environment，词法环境）**的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包（closure）**；
  - 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域；
  - 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来；
- **个人理解和总结：**
  - 一个普通的函数function，如果它可以访问外层作用域的自由变量，那么这个函数和周围环境就是一个闭包；
  - `从广义的角度来说：JavaScript中的函数都是闭包；`
  - `从广义的角度来说：JavaScript中的函数都是闭包；`



## 4.6 闭包的内存泄漏

- **为什么经常会说闭包是有内存泄露的呢？**
  - 在下面的案例中，如果后续我们不再使用add10函数了，那么该函数对象应该要被销毁掉，并且其引用着的父作用域AO也应该被销毁掉；
  - 但是目前因为在全局作用域下add10变量对0xb00的函数对象有引用，而0xb00的作用域中AO（0x200）有引用，所以最终会造成这些内存都是无法被释放的；
  - 所以我们经常说的闭包会造成内存泄露，其实就是刚才的引用链中的所有对象都是无法释放的；

- **那么，怎么解决这个问题呢？**

  - 因为当将add10设置为null时，就不再对函数对象0xb00有引用，那么对应的AO对象0x200也就不可达了；
  - 在GC的下一次检测中，它们就会被销毁掉；

  ```JavaScript
  function makeAdder(count) {
    return function (num) {
      return count + num
    }
  }
  
  var add10 = makeAdder(10)
  console.log(add10(5))
  ```



## 4.7 AO不使用的属性优化

- **我们来研究一个问题：AO对象不会被销毁时，是否里面的所有属性都不会被释放？**

  - 下面这段代码中name属于闭包的父作用域里面的变量；

  - 我们知道形成闭包之后count一定不会被销毁掉，那么name是否会被销毁掉呢？

  - 这里我打上了断点，我们可以在浏览器上看看结果；`name is not defined`

    ```javascript
    function makeAdder(count) {
      let name = "why"
      return function (num) {
        debugger
        return count + num
      }
    }
    
    const add10 = makeAdder(10)
    console.log(add10(5))
    console.log(add10(8))
    ```



# 五、JavaScript函数的增强知识

## 5.1 函数的返回值

- 使用`return关键字`来返回结果；
- 一旦在`函数中执行return操作`，那么当前函数会`终止`；
- 如果函数中没有使用 return语句 ，那么函数有默认的返回值：`undefined`；
- 如果函数使用 return语句，但是`return`后面没有任何值，那么函数的返回值也是：`undefined`；



## 5.2 arguments参数

- 默认情况下，arguments对象是所有（非箭头）函数中都可用的局部变量；
- 该对象中存放着所有的调用者传入的参数，从0位置开始，依次存放；
- arguments变量的类型是一个object类型（ array-like ），不是一个数组，但是和数组的用法看起来很相似；
- 如果调用者传入的参数多余函数接收的参数，可以通过arguments去获取所有的参数；



## 5.3 递归函数

- **封装函数，求n的m次方**

```javascript
// for循环实现
function pow1(n , m){
  let result = 0
  for(let i = 0;i < m;i++){
    result *= n
  }
  return result
}

// 递归实现
function pow2(n,m){
  if(m === 1) return n
  return n * pow1(n,m-1)
}
```



## 5.4 局部变量和外部变量

- **在JavaScript（ES5之前）中没有块级作用域的概念，但是函数可以定义自己的作用域。**
  - 作用域（Scope）表示一些标识符的作用有效范围（所以也有被翻译为有效范围的）；
  - 函数的作用域表示在函数内部定义的变量，只有在函数内部可以被访问到；
- **外部变量和局部变量的概念：**
  - 定义在函数内部的变量，被称之为局部变量（Local Variables）。
  - 定义在函数外部的变量，被称之为外部变量（Outer Variables）。
- **什么是全局变量？**
  - 在函数之外声明的变量（在script中声明的），称之为全局变量。
  - 全局变量在任何函数中都是可见的。
  - 通过var声明的全局变量会在window对象上添加一个属性（了解）；
- **在函数中，访问变量的顺序是什么呢？**
  - 优先访问自己函数中的变量，没有找到时，在外部中访问。



## 5.5 函数声明 vs 函数表达式

- **首先，语法不同：**
  - 函数声明：在主代码流中声明为单独的语句的函数。
  - 函数表达式：在一个表达式中或另一个语法结构中创建的函数。
- **其次，JavaScript创建函数的时机是不同的：**
  - 函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。
  - 在函数声明被定义之前，它就可以被调用



## 5.6 回调函数（Callback Function）

- **既然函数可以作为一个值相互赋值，那么也可以传递给另外一个函数。**

- **高阶函数必须至少`满足两个条件之一`：**

  - 接受一个或多个函数作为输入；
  - 输出一个函数；

- **`匿名（anonymous）函数`的理解**：

  - 如果在传入一个函数时，我们没有指定这个函数的名词或者通过函数表达式指定函数对应的变量，那么这个函数称之为匿名函数。

  ```JavaScript
  // 高阶函数foo
  function foo(fn){
    fn()
  }
  foo(function (){
      console.log("我是匿名函数被调用")
  })
  ```



## 5.7 立即执行函数

- **一个函数定义完后被立即执行；**

  - 第一部分是定义了一个匿名函数，这个函数有自己独立的作用域。

  - 第二部分是后面的（），表示这个函数被执行了

    ```JavaScript
    (function(){
      console.log("立即执行函数")
    })()
    ```

- **这个东西有什么用？**

  - 会创建一个独立的执行上下文环境，可以避免外界访问或修改内部的变量，也避免了对内部变量的修改

    ```JavaScript
    var btns = document.querySelectorAll(".btn")
    for(var i = 0;i < btns.length;i++){
      (function(m){
        btns[m].onclick = function(){
          console.log(`第${m}个按钮被点击了`)
        }
      })(i)
    }
    ```



## 5.8 函数对象的属性

- `属性name`：一个函数的名词我们可以通过name来访问

- `属性length`：属性length用于返回函数参数的个数；

  - 注意：rest参数是不参与参数的个数的；

  ```JavaScript
  function foo(name, age) {
    
  }
  foo.name // foo
  foo.length // 2
  ```



## 5.9 arguments

- **arguments** 是一个 对应于 **传递给函数的参数** 的 **类数组(array-like)对象**。

- array-like意味着它不是一个数组类型，而是一个对象类型：

  - 但是它却拥有数组的一些特性，比如说length，比如可以通过index索引来访问；
  - 但是它却没有数组的一些方法，比如filter、map等；

  ```javascript
  function foo(x, y, z) {
    // [Arguments] {'0': 10, '1': 20, '2', 30}
    console.log(arguments)
  }
  
  foo(10, 20, 30)
  
  console.log(arguments.length)
  console.log(arguments[0])
  console.log(arguments[1])
  console.log(arguments[2])
  ```

- **arguments转Array**

  - **转化方式一：**
    - 遍历arguments，添加到一个新数组中；
  - **转化方式二：较难理解（有点绕），了解即可**
    - 调用数组slice函数的call方法；
  - **转化方式三：ES6中的两个方法**
    - Array.from
    - […arguments]

  ```javascript
  // 1.转化方式一
  var length = arguments.length
  var arr = []
  for (var i = 0; i < length; i++){
    arr.push(arguments[i])
  }
  
  // 2.转化方式二
  var arr1 = Array.prototype.slice.call(arguments)
  var arr2 = [].slice.call(arguments)
  
  // 3.转化方式三
  const arr3 = Array.from(arguments)
  const arr4 = [...arguments]
  ```

- **箭头函数是不绑定arguments的，所以我们在箭头函数中使用arguments会去上层作用域查找：**

  ```javascript
  function bar(m, n) {
    return (x, y, z) => {
      console.log(arguments)
    }
  }
  
  var fn = bar(20, 30)
  fn(10, 20, 30)
  ```



## 5.10 函数的剩余（rest）参数

- **ES6中引用了rest parameter，可以将不定数量的参数放入到一个数组中：**

  - 如果最后一个参数是 ... 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组；

    ```javascript
    function foo(m,n,...args){
      console.log(args)
    }
    ```

- **那么剩余参数和arguments有什么区别呢？**

  - 剩余参数只包含那些没有`对应形参的实参`，而 `arguments 对象包含了传给函数的所有实参`；
  - `arguments对象不是一个真正的数组`，而`rest参数是一个真正的数组`，可以进行数组的所有操作；
  - arguments是`早期的ECMAScript中`为了方便去获取所有的参数提供的一个数据结构，而rest参数是`ES6中提供`并且希望以此
    来替代arguments的;

- **剩余参数必须放到最后一个位置，否则会报错**。



## 5.11 JavaScript纯函数

- **纯函数的维基百科定义：**

  - 在程序设计中，若一个函数`符合以下条件`，那么这个函数被称为纯函数：
  - 此函数`在相同的输入值时`，需`产生相同的输出`。
  - 函数的`输出和输入值以外的其他隐藏信息或状态无关`，也和`由I/O设备产生的外部输出`无关。
  - 该函数`不能有语义上可观察的函数副作用`，诸如`“触发事件”`，`使输出设备输出，或更改输出值以外物件的内容`等。

- **当然上面的定义会过于的晦涩，所以我简单总结一下：**

  - `确定的输入，一定会产生确定的输出`；
  - `函数在执行过程中，不能产生副作用`；

- **副作用概念的理解**:

  - **副作用（side effect）**其实本身是医学的一个概念，比如我们经常说吃什么药本来是为了治病，可能会产生一些其他的副作用；
  - 在计算机科学中，也引用了副作用的概念，表示`在执行一个函数`时，除了`返回函数值`之外，还对`调用函数产生了附加的影响`，比如`修改了全局变量，修改参数或者改变外部的存储`;
  - **纯函数在执行的过程中就是不能产生这样的副作用，副作用往往是产生`bug的 “温床”`。**

- **纯函数的案例**

  - **我们来看一个对数组操作的两个函数：**

    - `slice`：截取数组时不会对原数组进行任何操作,而是生成一个新的数组；
    - `splice`：截取数组, 会返回一个新的数组, 也会对原数组进行修改；

  - **slice就是一个纯函数，不会修改数组本身，而splice函数不是一个纯函数；**

    ```javascript
    var names = ['abc','cba','nba']
    
    var newNames = names.slice(0, 2)
    
    var newNames2 = names.splice(0, 2)
    ```

- **纯函数的作用和优势**:

  - 可以`安心的编写和安心的使用`；
  - 在`写的时候`保证了函数的纯度，只是`单纯实现自己的业务逻辑`即可，`不需要关心传入的内容`是如何获得的或者依赖`其他的外部变量`是否已经发生了修改；
  - 在`用的时候`，你确定`你的输入内容不会被任意篡改`，并且`自己确定的输入`，一定会`有确定的输出`；



## 5.12 函数柯里化

- **柯里化概念的理解**:

  - **柯里化**也是属于**函数式编程**里面一个非常重要的概念。
    - 是一种关于函数的高阶技术；
    - 它不仅被用于 JavaScript，还被用于其他编程语言；
  - **维基百科的解释：**
    - 把接收`多个参数的函数`，变成接`受一个单一参数`（最初函数的第一个参数）的函数，并且`返回接受余下的参数`，而且`返回
      结果的新函数`的技术；
    - 柯里化声称 `“如果你固定某些参数，你将得到接受余下参数的一个函数”`；
  - **维基百科的解释非常的抽象，我们这里做一个总结：**
    - 只`传递给函数一部分参数来调用它`，让`它返回一个函数去处理剩余的参数`；
    - `这个过程就称之为柯里化`
  - 柯里化是一种函数的转换，将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。
    - 柯里化不会调用函数。它只是对函数进行。

- **柯里化的代码转换**:

  ```javascript
  // 未柯里化的函数
  function add1(x, y, z) {
    return x + y + z
  }
  
  // 柯里化处理的函数
  function add2(x) {
    return function(y) {
      return function(z) {
        return x + y + z
      }
    }
  }
  
  // 箭头函数简写
  var add3 = x => y => z => {
    return x + y + z
  }
  add2(10)(20)(30)
  ```

- **柯里化优势**:

  - **函数的职责单一**

    - 在函数式编程中，我们其实往往希望`一个函数处理的问题尽可能的单一`，而`不是将一大堆的处理过程交给一个函数来处理`；
    - 那么`我们是否就可以将每次传入的参数在单一的函数中进行处理`，处理完后在`下一个函数中再使用处理后的结果`；

  - **函数的参数复用**

    - makeAdder函数要求我们传入一个num（并且如果我们需要的话，可以在这里对num进行一些修改）；

    - 在之后使用返回的函数时，我们不需要再继续传入num了；

      ```JavaScript
      function makeAdder(num) {
        return function(count){
          return num + count
        }
      }
      
      var add5 = makeAdder(5)
      add5(5)
      
      var add10 = makeAdder(10)
      add5(10)
      ```

  - **柯里化案例练习**

    - **案例，需求是打印一些日志：日志包括时间、类型、信息**；

      ```JavaScript
      // 普通函数
      function log(date, type, message) {
        console.log(`${date.getHours(),${type},${message}`)
      }
      
      // 柯里化
      var log = date => type => message => {
        console.log(`${date.getHours(),${type},${message}`)
      }
      
      var logNow = log(new Date())
      ```

  - **自动柯里化函数**

    ```javascript
    function hyCurrying(fn) {
      return function curryFn(...args) {
        // 两类操作:
        // 第一类操作: 继续返回一个新的函数, 继续接受参数
        // 第二类操作: 直接执行fn的函数
        if (args.length >= fn.length) { // 执行第二类
          // return fn(...args)
          return fn.apply(this, args)
        } else { // 执行第一类
          return function(...newArgs) {
            // return curryFn(...args.concat(newArgs))
            return curryFn.apply(this, args.concat(newArgs))
          }
        }
      }
    }
    ```



## 5.13 组合函数

- **组合函数概念的理解**

  - **组合（Compose）函数**是在JavaScript开发过程中一种对函数的使用技巧、模式：

    - 比如我们现在需要对`某一个数据进行函数的调用`，执行`两个函数fn1和fn2`，这`两个函数是依次执行`的；
    - 那么如果每次我们都需要`进行两个函数的调用`，`操作上就会显得重复`；
    - 那么`是否可以将这两个函数组合起来，自动依次调用`呢？
    - 这个过程就是`对函数的组合`，我们称之为 `组合函数（Compose Function）`；

    ```javascript
    function compose(fn1, fn2) {
      return function(x) {
        return fn2(fn1(x))
      }
    }
    
    function double(num) {
      return num * 2
    }
    
    function square(num) {
      return num ** 2
    }
    
    var calcFn = compose(double, square)
    caleFn(10)
    ```

- **实现组合函数**

  - **刚才我们实现的compose函数比较简单**

  - **我们需要考虑更加复杂的情况：比如传入了更多的函数，在调用compose函数时，传入了更多的参数：**

    ```javascript
    function compose(...fns) {
      // 遍历所有的原生如果不是函数，那么直接报错
      var length = fns.length
      for (var i = 0; i < length; i++) {
        var fn = fns[i]
        if (typeof fn !== 'function') {
          throw new TypeError('Expected a function')
        }
      }
      
      // 取出所有的函数一次调用
      return function(...args) {
        // 先获取到第一次执行的结果
        var index = 0
        var result = length ? fns[index].apply(this, args) : args
        while(++index < length) {
          result = fns[index].call(this, result)
        }
        return result
      }
    }
    ```



## 5.14 with语句的使用

- **with语句** 扩展一个语句的作用域链。

  ```javascript
  var obj = {
  	name: "hello world",
  	age: 18
  }
  
  with(obj) {
    console.log(name)
    console.log(age)
  }
  ```

- 不建议使用with语句，因为它可能是混淆错误和兼容性问题的根源。



## 5.15 eval函数

- **内建函数 eval 允许执行一个代码字符串。**

  - `eval是一个特殊的函数`，它可以`将传入的字符串当做JavaScript代码来运行`；

  - `eval会将最后一句执行语句的结果，作为返回值`;

    ```javascript
    var evalString = `var message = "Hello World";console.log(message)`
    eval(evalString)
    
    console.log(message)
    ```

- **不建议在开发中使用eval：**

  - eval代码的`可读性非常的差`（代码的可读性是高质量代码的重要原则）；
  - eval是`一个字符串`，那么有可能在`执行的过程中被刻意篡改，那么可能会造成被攻击的风险`；
  - eval的执行`必须经过JavaScript解释器，不能被JavaScript引擎优化`；



## 5.16 严格模式

- **认识严格模式**

  - **JavaScript历史的局限性：**
    - 长久以来，`JavaScript 不断向前发展且并未带来任何兼容性`问题；
    - 新的特性被加入，旧的功能也没有改变，这么做`有利于兼容旧代码`；
    - 但缺点是 JavaScript 创造者的`任何错误或不完善的决定也将永远被保留在 JavaScript 语言`中；
  - 在ECMAScript5标准中，JavaScript提出了**严格模式的概念（Strict Mode）**：
    - 严格模式很好理解，是一种`具有限制性的JavaScript模式`，从而使`代码隐式的脱离了 ”懒散（sloppy）模式“`；
    - `支持严格模式的浏览器`在检测到代码中有严格模式时，会`以更加严格的方式对代码进行检测和执行`；
  - 严格模式对正常的JavaScript语义进行了一些限制:
    - 严格模式通过 `抛出错误` 来消除一些原有的 `静默（silent）`错误；
    - 严格模式让`JS引擎在执行代码时可以进行更多的优化`（不需要对一些特殊的语法进行处理）；
    - 严格模式禁用了`在ECMAScript未来版本中可能会定义的一些语法`；

- **开启严格模式:**

  - **那么如何开启严格模式呢？严格模式支持粒度话的迁移：**

    - 可以支持`在js文件中`开启严格模式；
    - 也支持对`某一个函数`开启严格模式；

  - **严格模式通过在文件或者函数开头使用 use strict 来开启。**

    ```javascript
    "use strict"
    
    // 使用let作为标识符的名称
    var name = "abc"
    console.log(name)
    
    // 定义变量时不使用var
    var message = "Hello World"
    
    function foo(){
      "use strict"
      
      m = "foo"
      console.log(m)
    }
    foo()
    ```

  - **没有类似于 "no use strict" 这样的指令可以使程序返回默认模式。**

    - 现代 JavaScript 支持 “class” 和 “module” ，它们会自动启用 use strict；

- **严格模式限制**:

  - **这里我们来说几个严格模式下的严格语法限制：**
    - JavaScript被设计为新手开发者更容易上手，所以有时候本来错误语法，被认为也是可以正常被解析的；
    - 但是这种方式可能给带来留下来安全隐患；
    - 在严格模式下，这种失误就会被当做错误，以便可以快速的发现和修正；
  - 1. **无法意外的创建全局变量**
  - 2. **严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常**
  - 3. **严格模式下试图删除不可删除的属性**
  - 4. **严格模式不允许函数参数有相同的名称**
  - 5. **不允许0的八进制语法**
  - 6. **在严格模式下，不允许使用with**
  - 7. **在严格模式下，eval不再为上层引用变量**
  - 8. **严格模式下，this绑定不会默认转成对象** 



## 5.17 手写apply、call、bind函数实现

- **接下来我们来实现一下apply、call、bind函数：**

  - 注意：我们的实现是练习函数、this、调用关系，不会过度考虑一些边界情况

    ```javascript
    Function.prototype.hyexec = function(thisArg, arg) {
      thisArg = thisArg ? Object(thisArg) : window
      thisArg.fn = this
      args = args || []
      
      var result = thisArg.fn(...args)
      delete thisArg.fn
      
      return result
    }
    
    Function.prototype.hycpply = function(thisArg, args) {
      return this.hyexec(thisArg, args)
    }
    
    Function.prototype.hycall = function(thisArg, ...args) {
      return this.hyexec(thisArg, args)
    }
    
    Function.prototype.hybind = funciton(thisArg, ...argArray) {
      thisArg = thisArg ? Object(thisArg) : window
      thisArg.fn = this
      
      return function(...newArray){
        var args = [...argArray, ...newArray]
        return thisArg.fn(...args)
      }
    }
    ```



# 六、JavaScript对象的增强知识

## 6.1 对象的常见操作

```javascript
var message = "hello world"
var info = {
  name: '陈卓林',
  age: 18,
  // 方括号的使用
  [message]:'你好，世界'
}
// 访问对象的属性
var age = info.age
var msg = info[message]

// 修改对象的属性
info.name = "刘德华"

// 添加对象的属性
info.height = 1.88

// 删除对象的属性
delete info.age
```



## 6.2 对象的遍历

- **对象的遍历（迭代）**：表示获取对象中所有的属性和方法。

  - Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组；

- **遍历方式一**：普通for循环

  ```javascript
  var info = {
    name: '陈卓林',
    age: 18,
    // 方括号的使用
    [message]:'你好，世界'
  }
  var infoKeys = Object.keys(info)
  for(var i = 0;i<infoKeys.length;i++){
    var key = infoKeys[i]
    var value = info[key]
  }
  ```

- **遍历方式二**：for in 遍历方法

  ```javascript
  for(var key in info){
    var value = info[key]
  }
  ```



## 6.3 栈内存和堆内存

- **原始类型**占据的空间是在**栈内存**中分配的；
  - **原始类型的保存方式**：在变量中保存的是值本身，所以原始类型也被称之为值类型
- **对象类型**占据的空间是在**堆内存**中分配的；
  - **对象类型的保存方式**：在变量中保存的是对象的“引用”，所以对象类型也被称之为引用类型；



## 6.4 this指向什么？

- 在**全局环境**下面，this指向window；

- 通过**对象**调用，this指向调用的对象；

  ```javascript
  function foo(){
  	console.log(this) // window
  }
  foo()
  
  var obj = {
    bar: function(){
      console.log(this) // obj
    }
  }
  obj.bar()
  
  ```



## 6.5 创建对象的方案 – 工厂函数

- **工厂模式**其实是一种常见的**设计模式**；

- **工厂函数的缺陷**：

  - 在打印对象时，对象的类型都是Object类型

  ```javascript
  function createPerson(name,age,height){
    var p = {}
    p.name = name
    p.age = age
    p.height = height
    
    p.eating = function(){
      console.log(this.name+'在吃东西')
    }
    return p
  }
  
  ```



## 6.6 JavaScript中的类（ES5）

- **JavaScript中的构造函数是怎么样的**？
  - 构造函数也是一个普通的函数，从表现形式来说，和千千万万个普通的函数没有任何区别；
  - 那么如果这么一个普通的函数被使用new操作符来调用了，那么这个函数就称之为是一个构造函数；
- **如果一个函数被使用new操作符调用了，那么它会执行如下操作**：
  1. 在内存中创建一个新的对象（空对象）；
  2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；
  3. 构造函数内部的this，会指向创建出来的新对象；
  4. 执行函数的内部代码（函数体代码）；
  5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；



## 6.7 创建对象的方案 – 构造函数（类）

- 这个构造函数可以确保我们的对象是有Person的类型的；

  ```JavaScript
  function Person(name,age){
    this.name = name
    this.age = age
    
    this.eating = function(){
      console.log(this.name+'在吃东西')
    }
  }
  
  const p1 = new Person('陈卓林',18)
  
  ```







