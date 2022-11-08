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

  2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；

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



# 二、深入浏览器的渲染原理

## 2.1 浏览器的内核

- ###### 常见的浏览器内核
  
  - `Trident `（ 三叉戟）：IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器；
  - `Gecko`（ 壁虎） ：Mozilla Firefox；
  - `Presto`（急板乐曲）-> `Blink `（眨眼）：Opera
  - `Webkit `：Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器（Android、iOS）
  - `Webkit `-> `Blink `：Google Chrome，Edge
- 我们经常说的浏览器内核指的是浏览器的排版引擎：
  
  - **排版引擎**（layout engine），也称为**浏览器引擎**（browser engine）、**页面渲染引擎**（rendering engine）或**样版引擎**。
- 也就是一个网页下载下来后，就是由我们的渲染引擎来帮助我们解析的。



## 2.2 渲染引擎解析页面的详细流程

- ###### 解析一：HTML解析过程
  
  - 默认情况下服务器会给浏览器返回index.html文件，所以解析HTML是所有步骤的开始:
  - 解析HTML，会构建DOM Tree：
- ###### 解析二 – 生成CSS规则
  
  - 在解析的过程中，如果遇到CSS的link元素，那么会由浏览器负责下载对应的CSS文件：
    - 注意：下载CSS文件是不会影响DOM的解析的；
  - 浏览器下载完CSS文件后，就会对CSS文件进行解析，`解析出对应的规则树`：
    - 我们可以称之为 `CSSOM`（CSS Object Model，CSS对象模型）；
- ###### 解析三 – 构建Render Tree
  
  - 当有了DOM Tree和 CSSOM Tree后，就可以两个结合来构建`Render Tree`了
  - 注意一：`link元素不会阻塞DOM Tree的构建过程`，但是`会阻塞Render Tree的构建过程`
    - 这是因为Render Tree在构建时，需要对应的CSSOM Tree；
  - 注意二：`Render Tree和DOM Tree并不是一一对应的关系`，比如对于display为none的元素，压根不会出现在render tree中；
- ###### 解析四 – 布局（layout）和绘制（Paint）
  
  - 第四步是在渲染树（Render Tree）上运行`布局（Layout）`以计算每个节点的几何体。
    - 渲染树会表示显示哪些节点以及其他样式，但是`不表示每个节点的尺寸、位置`等信息；
    - 布局是确定呈现树中`所有节点的宽度、高度和位置信息`；
  - 第五步是将每个节点绘制（Paint）到屏幕上
    - 在绘制阶段，浏览器将布局阶段计算的`每个frame转为屏幕上实际的像素点`；
    - 包括`将元素的可见部分进行绘制`，比如`文本、颜色、边框、阴影、替换元素（比如img）`



## 2.3 回流和重绘

- ###### 理解回流reflow：（也可以称之为重排）
  
  - 第一次确定节点的大小和位置，称之为布局（layout）。
  - 之后对节点的大小、位置修改重新计算称之为回流。
- ###### 什么情况下引起回流呢？
  
  - 比如DOM结构发生改变（添加新的节点或者移除节点）；
  - 比如改变了布局（修改了width、height、padding、font-size等值）
  - 比如窗口resize（修改了窗口的尺寸等）
  - 比如调用getComputedStyle方法获取尺寸、位置信息；
- ###### 理解重绘repaint
  
  - 第一次渲染内容称之为绘制（paint）。
  - 之后重新渲染称之为重绘。
- ###### 什么情况下会引起重绘呢？
  
  - 比如修改背景色、文字颜色、边框颜色、样式等；
  - 回流一定会引起重绘，所以回流是一件很消耗性能的
    事情。
- ###### 避免回流的方式
  
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

## 3.1 V8引擎的架构

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



## 3.2 初始化全局对象

- js引擎会在`执行代码之前`，会在`堆内存中创建一个全局对象`：Global Object（GO）
  - 该对象 `所有的作用域（scope）`都可以访问；
  - 里面会包含`Date、Array、String、Number、setTimeout、setInterval`等等；
  - 其中还有一个`window属性`指向自己；



## 3.3 执行上下文（ Execution Contexts ）

- js引擎内部有一个**执行上下文栈（Execution Context Stack，简称ECS）**，它是用于执行**代码的调用栈**。
- 那么现在它要执行谁呢？执行的是**全局的代码块**：
  - 全局的代码块为了执行会构建一个 **Global Execution Context（GEC）**；
  - GEC会 `被放入到ECS中` 执行；
- **GEC被放入到ECS中里面包含两部分内容：**
  - **第一部分**：在代码执行前，在`parser转成AST的过程`中，会将`全局定义的变量、函数`等加入到`GlobalObject`中，但是并`不会
    赋值`，这个过程也称之为`变量的作用域提升（hoisting）`；
  - **第二部分**：在代码执行中，对变量赋值，或者执行其他的函数；



## 3.4 认识VO对象（Variable Object）

- **每一个执行上下文会关联一个`VO（Variable Object，变量对象），变量和函数声明`会被添加到这个VO对象中**。
- **当全局代码被执行的时候，VO就是GO对象了**



## 3.5 函数如何被执行呢？

- 在执行的过程中**执行到一个函数时**，就会根据**函数体**创建一个**函数执行上下文（Functional Execution Context，简称FEC）**，
  并且压入到**EC Stack**中。
- **因为每个执行上下文都会关联一个VO，那么函数执行上下文关联的VO是什么呢？**
  - 当进入一个函数执行上下文时，会创建一个`AO对象（Activation Object）`；
  - 这个AO对象会`使用arguments作为初始化`，并且`初始值是传入的参数`；
  - 这个`AO对象会作为执行上下文的VO来存放变量的初始化`；



## 3.6 作用域和作用域链（Scope Chain）

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

- ###### 引用计数
  
  - 当`一个对象有一个引用指向它`时，那么这个`对象的引用就+1`；
  - 当一个`对象的引用为0`时，这个对象就`可以被销毁掉`；
  - 这个算法有一个很大的弊端就是会产生循环引用；
- ###### 标记清除
  
  - 标记清除的核心思路是`可达性（Reachability）`
  - 这个算法是设置一个`根对象（root object），垃圾回收器`会定期`从这个根`开始，找所有从根开始`有引用到的对象`，对于那些`没有引用到的对象，就认为是不可用的对象`；
  - 这个算法`可以很好的解决循环引用`的问题；
- ###### 其他算法优化补充
  
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

- **MDN对JavaScript闭包的解释**
  - 一个函数和对其周围状态**（lexical environment，词法环境）**的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包（closure）**；
  - 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域；
  - 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来；
- **个人理解和总结**
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



# 五、JavaScript中的函数

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
- ###### 外部变量和局部变量的概念
  
  - 定义在函数内部的变量，被称之为局部变量（Local Variables）。
  - 定义在函数外部的变量，被称之为外部变量（Outer Variables）。
- ###### 什么是全局变量？
  
  - 在函数之外声明的变量（在script中声明的），称之为全局变量。
  - 全局变量在任何函数中都是可见的。
  - 通过var声明的全局变量会在window对象上添加一个属性（了解）；
- ###### 在函数中，访问变量的顺序是什么呢？
  
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

- ###### arguments转Array

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



## 5.10 JavaScript纯函数

- ###### 纯函数的维基百科定义

  - 在程序设计中，若一个函数`符合以下条件`，那么这个函数被称为纯函数：
  - 此函数`在相同的输入值时`，需`产生相同的输出`。
  - 函数的`输出和输入值以外的其他隐藏信息或状态无关`，也和`由I/O设备产生的外部输出`无关。
  - 该函数`不能有语义上可观察的函数副作用`，诸如`“触发事件”`，`使输出设备输出，或更改输出值以外物件的内容`等。

- ###### 简单总结

  - `确定的输入，一定会产生确定的输出`；
  - `函数在执行过程中，不能产生副作用`；

- ###### 副作用概念的理解

  - **副作用（side effect）**其实本身是医学的一个概念，比如我们经常说吃什么药本来是为了治病，可能会产生一些其他的副作用；
  - 在计算机科学中，也引用了副作用的概念，表示`在执行一个函数`时，除了`返回函数值`之外，还对`调用函数产生了附加的影响`，比如`修改了全局变量，修改参数或者改变外部的存储`;
  - **纯函数在执行的过程中就是不能产生这样的副作用，副作用往往是产生`bug的 “温床”`。**

- ###### 纯函数的案例

  - **我们来看一个对数组操作的两个函数：**

    - `slice`：截取数组时不会对原数组进行任何操作,而是生成一个新的数组；
    - `splice`：截取数组, 会返回一个新的数组, 也会对原数组进行修改；

  - **slice就是一个纯函数，不会修改数组本身，而splice函数不是一个纯函数；**

    ```javascript
    var names = ['abc','cba','nba']
    
    var newNames = names.slice(0, 2)
    
    var newNames2 = names.splice(0, 2)
    ```

- ###### 纯函数的作用和优势

  - 可以`安心的编写和安心的使用`；
  - 在`写的时候`保证了函数的纯度，只是`单纯实现自己的业务逻辑`即可，`不需要关心传入的内容`是如何获得的或者依赖`其他的外部变量`是否已经发生了修改；
  - 在`用的时候`，你确定`你的输入内容不会被任意篡改`，并且`自己确定的输入`，一定会`有确定的输出`；



## 5.11 函数柯里化

- ###### 柯里化概念的理解

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

- ###### 柯里化的代码转换

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

- ###### 柯里化优势

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

- ###### 柯里化案例练习

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

- ###### 自动柯里化函数

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



## 5.12 组合函数

- ###### 组合函数概念的理解

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

- ###### 实现组合函数

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



## 5.13 with语句的使用

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



## 5.14 eval函数

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



## 5.15 严格模式

- ###### 认识严格模式

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

- ###### 开启严格模式

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

- ###### 严格模式限制

  1. 无法意外的创建全局变量
  2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
  3. 严格模式下试图删除不可删除的属性
  4. 严格模式不允许函数参数有相同的名称
  5. 不允许0的八进制语法
  6. 在严格模式下，不允许使用with
  7. 在严格模式下，eval不再为上层引用变量
  8. 严格模式下，this绑定不会默认转成对象



## 5.16 手写apply、call、bind函数实现

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



# 六、JavaScript中的对象

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



## 6.5 创建对象的方案

- ###### 工厂函数创建
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

- ###### 构造函数（类)创建

  - 这个构造函数可以确保我们的对象是有Person的类型的；

    ```javascript
    function Person(name,age){
      this.name = name
      this.age = age
      
      this.eating = function(){
        console.log(this.name+'在吃东西')
      }
    }
    
    const p1 = new Person('陈卓林', 18)
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



## 6.7 属性描述符

- ###### 对属性操作的控制

  - 在前面我们的属性都是`直接定义在对象内部`，或者`直接添加到对象内部`的：

    - 但是这样来做的时候我们就`不能对这个属性进行一些限制`：比如`这个属性是否是可以通过delete删除的`？这个属性`是否在for-in遍历的时候被遍历出来`呢？

      ```JavaScript
      var obj = {
        name: "why",
        age: 18,
        height: 1.88
      }
      ```

  - 如果我们想要对`一个属性进行比较精准的操作控制`，那么我们就可以使用`属性描述符`。

    - 通过属性描述符`可以精准的添加或修改对象的属性`；
    - 属性描述符需要使用 `Object.defineProperty` 来对属性进行添加或者修改；

- ###### Object.defineProperty

  - **Object.defineProperty()** 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
    - `Object.defineProperty(obj, prop, descriptor)`
  - 可接收三个参数：
    - obj要定义属性的对象；
    - prop要定义或修改的属性的名称或 Symbol；
    - descriptor要定义或修改的属性描述符；
  - 返回值：
    - 被传递给函数的对象。

- ###### 属性描述符分类
  - 属性描述符的类型有两种：

    - `数据属性`（Data Properties）描述符（Descriptor）；

    - `存取属性`（Accessor访问器 Properties）描述符（Descriptor）；

    |            | configurable | enumerable | value | writable | get  | set  |
    | ---------- | :----------: | :--------: | :---: | :------: | :--: | :--: |
    | 数据描述符 |      √       |     √      |   √   |    √     |  ×   |  ×   |
    | 存取描述符 |      √       |     √      |   ×   |    ×     |  √   |  √   |

- ###### 数据属性描述符

  - **数据数据描述符有如下四个特性：**
  - **[[Configurable]]**：表示属性是否可以通过 delete 删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；
    - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Configurable]]**为`true`；
    - 当我们通过属性描述符定义一个属性时，这个属性的**[[Configurable]]**默认为`false`；
  - **[[Enumerable]]**：表示属性是否可以通过`for-in`或者`Object.keys()`返回该属性；
    - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Enumerable]]**为`true`；
    - 当我们通过属性描述符定义一个属性时，这个属性的**[[Enumerable]]**默认为`false`；
  - **[[Writable]]**：表示是否可以修改属性的值；
    - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Writable]]**为`true`；
    - 当我们通过属性描述符定义一个属性时，这个属性的**[[Writable]]**默认为`false`；
  - **[[value]]**：属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改；
    - 默认情况下这个值是undefined；

- ###### 存取属性描述符

  - **数据数据描述符有如下四个特性：**

  - **[[Configurable]]**：表示属性是否可以通过 delete 删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；

    - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Configurable]]**为true；
    - 当我们通过属性描述符定义一个属性时，这个属性的**[[Configurable]]**默认为false；

  - **[[Enumerable]]**：表示属性是否可以通过`for-in`或者`Object.keys()`返回该属性；

    - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Enumerable]]**为`true`；
    - 当我们通过属性描述符定义一个属性时，这个属性的**[[Enumerable]]**默认为`false`；

  - **[[get]]**：获取属性时会执行的函数。默认为`undefined`

  - **[[set]]**：设置属性时会执行的函数。默认为`undefined`

    ```javascript
    "use strict"
    
    var obj = {
      name: "why",
      age: 18
    }
    
    let address = '北京市'
    
    Object.defineProperty(obj,"address", {
      configurable: true,
      enumerable: true,
      get: function(){
        return address
      },
      set: function(value){
        address = value
      }
    })
    ```

- ###### 同时定义多个属性

  - **Object.defineProperties()** 方法直接在一个对象上定义 **多个** 新的属性或修改现有属性，并且返回该对象。

    ```javascript
    var obj = {
      _age: 18
    }
    
    Object.defineProperties(obj, {
      name: {
        writable: true,
        value: "why"
      },
      age: {
        get: function() {
          return this._age
        }
      }
    })
    ```



## 6.8 对象方法补充

- **获取对象的属性描述符：**

  - getOwnPropertyDescriptor
  - getOwnPropertyDescriptors

- **禁止对象扩展新属性：preventExtensions**

  - 给一个对象添加新的属性会失败（在严格模式下会报错）；

- **密封对象，不允许配置和删除属性：seal**

  - 实际是调用preventExtensions
  - 并且将现有属性的configurable:false

- **冻结对象，不允许修改现有属性： freeze**

  - 实际上是调用seal
  - 并且将现有属性的writable: false

- **hasOwnProperty**

  - 对象是否有某一个属于自己的属性（不是在原型上的属性）

- **in/for in 操作符**

  - 判断某个属性是否在某个对象或者对象的原型上

- **instanceof**

  - 用于检测`构造函数（Person、Student类）的pototype`，是否出现在`某个实例对象的原型链`上

- **isPrototypeOf**

  - 用于检测`某个对象`，是否出现在`某个实例对象的原型链`上

    ```javascript
    var obj = {
      name: "why",
      age: 18
    }
    
    // 1.获取属性描述符
    console.log(Object.getOwnPropertyDescriptor(obj, "name"))
    console.log(Object.getOwnPropertyDescriptors(obj))
    
    // 2.阻止对象的扩展
    Object.preventExtensions(obj)
    obj.address = "广州市"
    console.log(obj)
    
    // 3.密封对象(不能进行配置)
    Object.seal(obj)
    delete obj.name
    console.log(obj)
    
    // 4.冻结对象(不能进行写入)
    Object.freeze(obj)
    obj.name = "kobe"
    console.log(obj)
    ```



# 七、JavaScript ES5中实现继承

## 7.1 JavaScript中的原型

- ###### 认识对象的原型
  
  - **JavaScript当中每个对象都有一个特殊的内置属性 [[prototype]]，这个特殊的对象可以指向另外一个对象。**
  - **那么这个对象有什么用呢？**
    - 当我们通过引用对象的`属性key来获取一个value`时，它会`触发 [[Get]]`的操作；
    - 这个操作会`首先检查该对象是否有对应的属性`，如果有的话就使用它；
    - `如果对象中没有该属性，那么会访问对象[[prototype]]内置属性指向的对象上的属性`；
  - 那么如果通过字面量直接创建一个对象，这个对象也会有这样的属性吗？如果有，应该如何获取这个属性呢？
    - 答案是有的，只要是对象都会有这样的一个内置属性；
  - **获取的方式有两种：**
    - 方式一：通过对象的 __proto__ 属性可以获取到（但是这个是早期浏览器自己添加的，存在一定的兼容性问题）；
  - 方式二：通过` Object.getPrototypeOf `方法可以获取到；
  
- ###### 函数的原型 prototype

  - **新的概念：所有的函数都有一个prototype的属性（注意：不是__proto__）**

    ```javascript
    function foo(){}foo.prototype
    ```

  - 是不是因为函数是一个对象，所以它有prototype的属性呢？

    - 不是的，因为它是一个函数，才有了这个特殊的属性；
    - 而不是它是一个对象，所以有这个特殊的属性；

    ```javascript
    var obj = {}
    
    obj.prototype // obj就没有这个属性
    ```



## 7.2 创建对象的内存表现

![1667873764203](C:\Users\czl20\AppData\Roaming\Typora\typora-user-images\1667873764203.png)



## 7.3 constructor属性

- 事实上原型对象上面是有一个属性的：**constructor**

  - 默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象；

  ```JavaScript
  function Person() {
    
  }
  
  Person.prototype.constructor // [Function: Person]
  p1.__proto__.constructor // [Function: Person]
  p1.__proto__.constructor.name // Person
  ```

- ###### 原型对象的constructor

  - 如果希望constructor指向Person，那么可以手动添加：

  - 下面的方式虽然可以, 但是也会造成constructor的[[Enumerable]]特性被设置了true.

    - 默认情况下, 原生的constructor属性是不可枚举的.
    - 如果希望解决这个问题, 就可以使用我们前面介绍的Object.defineProperty()函数了.

    ```javascript
    Person.prototype = {
      constructor: Person,
      name: 'czl'
    }
    
    Object.defineProperty(Person.prototype, "constructor", {
      enumerable: false,
      value: Person
    })
    ```



## 7.4 创建对象 – 构造函数和原型组合

- 让所有的对象去共享这些函数

  ```javascript
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  
  Person.prototype.eating = function() {
    console.log(this.name,'在吃东西')
  }
  
  var p1 = new Person('czl', 20)
  p1.eating()
  ```



## 7.5 面向对象的特性 – 继承

- 面向对象有三大特性：封装、继承、多态
  - 封装：我们前面将属性和方法封装到一个类中，可以称之为封装的过程；
  - 继承：继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提（纯面向对象中）；
  - 多态：不同的对象在执行时表现出不同的形态；
- **那么继承是做什么呢？**
  - 继承可以帮助我们`将重复的代码和逻辑抽取到父类`中，子类只需要直接继承过来使用即可；
  - 在很多编程语言中，`继承也是多态的前提`；



## 7.6 JavaScript原型链

- 从一个对象上获取属性，如果在当前对象中没有获取到就会去它的**原型**上面获取：

- 原型里面还有原型，直到找到该属性为止，如果没有找到，最终会指向Object对象的原型，值为null，

- 这样的原型嵌套称为原型链。

  ```javascript
  var obj = {
    name: "why",
    age: 18
  }
  
  obj.__proto__ = {
    
  }
  
  obj.__proto__.__proto__ = {
    
  }
  
  obj.__proto__.__proto__.__proto__ = {
    address: '北京市'
  }
  ```

- ###### Object的原型

  - 那么什么地方是原型链的尽头呢？比如第三个对象是否也是有原型__proto__属性呢？

    ```JavaScript
    obj.__proto__.__proto__.__proto__.__proto__ // [Object: null prototype] {}
    ```

  - **我们会发现它打印的是 [Object: null prototype] {}**

    - 事实上这个原型就是我们最顶层的原型了
    - 从Object直接创建出来的对象的原型都是 [Object: null prototype] {}。

  - **那么我们可能会问题： [Object: null prototype] {} 原型有什么特殊吗？**

    - 特殊一：`该对象有原型属性`，但是它的原型属性已经指向的是null，也就是已经是顶层原型了；
    - 特殊二：`该对象上有很多默认的属性和方法`；

- ###### Object是所有类的父类

  - **从我们上面的Object原型我们可以得出一个结论：`原型链最顶层的原型对象就是Object的原型对象`**

    ![1667877293238](C:\Users\czl20\AppData\Roaming\Typora\typora-user-images\1667877293238.png)



## 7.7 组合式继承

- ###### 通过原型链实现继承
  
  - 目前stu的原型是p对象，而p对象的原型是Person默认的原型，里面包含running等函数；
    
  - 注意：步骤4和步骤5不可以调整顺序，否则会有问题
  
  ```JavaScript
  // 1. 定义父类构造函数
  function Person(name) {
    this.name =  name
  }
  
  // 2. 父类原型上添加内容
  Person.prototype.running = function() {
    
  }
  
  // 3. 定义子类构造函数
  function Student(sno) {
    this.sno = sno
  }
  
  // 4. 创建父类对象，并且作为子类的原型对象
  var p = new Person()
  Student.prototype = p
  
  // 5. 在子类原型上添加内容
  Student.prototype.studying = function() {
    
  }
  ```
  
- ###### 原型链继承的弊端

  - **目前有一个很大的弊端：某些属性其实是保存在p对象上的;**
    - 第一，我们通过`直接打印对象是看不到这个属性`的；
    - 第二，这个属性`会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题`；
    - 第三，`不能给Person传递参数`（让每个stu有自己的属性），因为这个对象是一次性创建的（没办法定制化）；

- ###### 借用构造函数继承

  - **借用继承的做法非常简单：在子类型构造函数的内部调用父类型构造函数.**

    - 因为函数可以在任意的时刻被调用；

    - 因此通过`apply()和call()方法`也可以在新创建的对象上执行构造函数；

      ```javascript
      function Student(name, friends, sno) {
        Person.call(this, name, friends)
        this.sno = sno
      }
      
      Student.prototype = Person.prototype
      ```

- ###### 组合借用继承的问题
  
  - 组合继承最大的问题就是无论在什么情况下，都会`调用两次父类构造函数`。
    - 一次在创建子类原型的时候；
    - 另一次在子类构造函数内部(也就是每次创建子类实例的时候)；
  - 所有的子类实例事实上会拥有两份父类的属性:
    - 一份在当前的实例自己里面(也就是person本身的)，另一份在子类对应的原型对象中(也就是person.__proto__里面)；
    - 当然，这两份属性我们无需担心访问出现问题，因为默认一定是访问实例本身这一部分的；



## 7.8 寄生组合式继承

- ###### 原型式继承函数

  - **最终的目的：student对象的原型指向了person对象；**

    ```javascript
    function object(obj) {
      function Func() {}
      Func.prototype = obj
      return new Func()
    }
    
    function object(obj) {
      var newObj = {}
      Object.setPrototypeof(newObj, obj)
      return newObj
    }
    
    var student = Object.create(person, {
      address: {
        value: "北京市",
        enumerable: true
      }
    })
    ```

- ###### 寄生式继承函数

  - 寄生式(Parasitic)继承是`与原型式继承紧密相关的一种思想`, 并且同样`由道格拉斯·克罗克福德(Douglas Crockford)提出和推广`的；

  - 寄生式继承的思路是`结合原型类继承和工厂模式`的一种方式；

  - 即`创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象，最后再将这个对象返回`；

    ```JavaScript
    function object(obj) {
      function Func() {}
      Func.prototype = obj
      return new Func()
    }
    
    function createStudent(person, name) {
      var newObj = object(person)
      newObj.name = name
      newObj.studying = function() {
        consol.log(this.name,'study')
      }
      return newObj
    }
    ```

- ###### 寄生组合式继承

  ```javascript
  // 定义object函数
  function object(o) {
    function F(){}
    F.prototype = o
    return new F()
  }
  
  // 定义寄生式核心函数
  function inheritPrototype(Subtype, Supertype) {
    // Subtype.prototype.__proto__ = Supertype.prototype
    // Object.setPrototypeOf(Subtype.prototype, Subtype.prototype)
    Subtype.prototype = createObject(Supertype.prototype)
    Object.defineProperty(Subtype.prototype, "constructor", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: Subtype
    })
    Object.setPrototypeOf(Subtype, Supertype)
    // Subtype.__proto__ = Supertype
  }
  
  inheritPrototype(Student, Person)
  ```



# 八、JavaScript ES6实现继承

## 8.1 认识class定义类

- 我们会发现，按照前面的构造函数形式创建 **类**，不仅仅和编写普通的函数过于相似，而且代码并不容易理解。

  - 在ES6（ECMAScript2015）新的标准中使用了class关键字来直接定义类；
  - 但是类本质上依然是前面所讲的构造函数、原型链的语法糖而已；
  - 所以学好了前面的构造函数、原型链更有利于我们理解类的概念和继承关系；

- 那么，如何使用class来定义一个类呢？

  - 可以使用两种方式来声明类：类声明和类表达式；

    ```javascript
    class Person {
    
    }
    
    var Student = class {}
    ```



## 8.2 类和构造函数的异同

- 我们来研究一下类的一些特性：

  - 你会发现它和我们的构造函数的特性其实是一致的；

  ```javascript
  var p = new Person()
  
  console.log(Person) // [class Person]
  console.log(Person.prototype) // {}
  console.log(Person.prototype.constructor) // [class Person]
  
  console.log(p.__proto__ === Person.prototype) // true
  
  console.log(typeof Person) // function
  ```



## 8.3 类的构造函数

- 如果我们希望在创建对象的时候给类传递一些参数，这个时候应该如何做呢？
  - 每个类都可以有一个自己的构造函数（方法），这个方法的名称是固定的constructor；
  - 当我们通过new操作符，操作一个类的时候会调用这个类的构造函数constructor；
  - 每个类只能有一个构造函数，如果包含多个构造函数，那么会抛出异常；
- 当我们通过new关键字操作类的时候，会调用这个constructor函数，并且执行如下操作：
  - 1.在内存中创建一个新的对象（空对象）；
  - 2.这个对象内部的[[prototype]]属性会被赋值为该类的prototype属性；
  - 3.构造函数内部的this，会指向创建出来的新对象；
  - 4.执行构造函数的内部代码（函数体代码）；
  - 5.如果构造函数没有返回非空对象，则返回创建出来的新对象；



## 8.4 类的实例方法

- 在上面我们定义的属性都是直接放到了this上，也就意味着它是放到了创建出来的新对象中：

  - 在前面我们说过对于实例的方法，我们是希望放到原型上的，这样可以被多个实例来共享；

  - 这个时候我们可以直接在类中定义；

    ```javascript
    class Person {
      constructor(name, age) {
        this.name = name
        this.age = age
      }
      
      running() {
        console.log(`${this.name}running`)
      }
    }
    ```



## 8.5 类的访问器方法

- 我们之前讲对象的属性描述符时有讲过对象可以添加setter和getter函数的，那么类也是可以的：

  ```javascript
  class Person {
    constructor(name) {
      this._name = name
    }
    
  	set name(newName) {
      this._name = newName
    }
      
  	get name() {
      return this._name 
    }
  }
  ```



## 8.6 类的静态方法

- 静态方法通常用于定义直接使用类来执行的方法，不需要有类的实例，使用static关键字来定义:

  ```javascript
  class Person {
    constructor(age) {
      this.age = age
    }
    
    static create() {
      return new Person(Math.floor(Math.random() * 100))
    }
  }
  ```



## 8.7 ES6类的继承 - extends

- 在ES6中新增了使用extends关键字，可以方便的帮助我们实现继承：

  ```javascript
  class Person {
  
  }
  
  class Student extends Person {
  
  }
  ```



## 8.8 super关键字

- 我们会发现在上面的代码中我使用了一个super关键字，这个super关键字有不同的使用方式：

  - 注意：在子（派生）类的构造函数中使用this或者返回默认对象之前，必须先通过super调用父类的构造函数！

  - super的使用位置有三个：子类的构造函数、实例方法、静态方法；

    ```javascript
    // 调用 父对象/父类 的构造函数
    super([arguments]);
    
    // 调用 父对象/父类 上的方法
    super.functionOnParent([arguments]);
    ```



## 8.9 继承内置类

- 我们也可以让我们的类继承自内置类，比如Array:

  ```javascript
  class HYArray extends Array {
    lastItem() {
      return this[this.length - 1]
    }
  }
  
  var array = new HYArray(10, 20 ,30)
  array.lastItem()
  ```



## 8.10 类的混入mixin

- JavaScript的类只支持单继承：也就是只能有一个父类

  - 那么在开发中我们我们需要在一个类中添加更多相似的功能时，应该如何来做呢？
  - 这个时候我们可以使用混入（mixin）；

  ```JavaScript
  function mixinRunner(BaseClass) {
    return class extends BaseClass {
      running(){
        console.log("running")
      }
    }
  }
  
  function mixinEater(BaseClass) {
    return class extends BaseClass {
      eating(){
        console.log("eating")
      }
    }
  }
  
  class Person {
    
  }
  
  class newPerson extends mixinEater(mininRunner(Person)) {
    
  }
  
  var np = newPerson()
  np.eating()
  np.running()
  ```



# 九、ES6 ~ ES13新特性

## 9.1 新的ECMA代码执行描述

- **在新的ECMA代码执行描述中（ES5以及之上），对于代码的执行流程描述改成了另外的一些词汇：**
  
  - 基本思路是相同的，只是`对于一些词汇的描述发生了改变`；
  - `执行上下文栈和执行上下文`也是相同的；
  
- ###### 词法环境（Lexical Environments）

  - **词法环境是一种规范类型，用于在词法嵌套结构中定义关联的变量、函数等标识符；**
    - 一个词法环境是由环境记录（Environment Record）和一个外部词法环境（oute;r Lexical Environment）组成；
    - 一个词法环境经常用于关联一个函数声明、代码块语句、try-catch语句，当它们的代码被执行时，词法环境被创建出来；
  - **也就是在ES5之后，执行一个代码，通常会关联对应的词法环境；**
    - 那么执行上下文会关联哪些词法环境呢？
      - LexicalEnvironment用于处理let、const声明的标识符：
      - VariableEnvironment用于处理var和function声明的标识符：

- ###### 环境记录（Environment Record）

  - **在这个规范中有两种主要的环境记录值:声明式环境记录和对象环境记录。**
    - 声明式环境记录：声明性环境记录用于定义ECMAScript语言语法元素的效果，如函数声明、变量声明和直接将标识符绑定与
      ECMAScript语言值关联起来的Catch子句。
    - 对象式环境记录：对象环境记录用于定义ECMAScript元素的效果，例如WithStatement，它将标识符绑定与某些对象的属性关联起来。

- ###### 新ECMA描述内存图

  ![1667894268160](C:\Users\czl20\AppData\Roaming\Typora\typora-user-images\1667894268160.png)



## 9.2 let/const/var关键字

- ###### let/const基本使用

  - **在ES5中我们声明变量都是使用的var关键字，从ES6开始新增了两个关键字可以声明变量：let、const**
    - `let、const在其他编程语言中都是有的`，所以也并不是新鲜的关键字；
    - 但是`let、const确确实实给JavaScript带来一些不一样的东西`；
  - **let关键字：**
    - 从直观的角度来说，`let和var是没有太大的区别`的，都是`用于声明一个变量`；
  - **const关键字：**
    - const关键字是`constant的单词的缩写，表示常量、衡量`的意思；
    - 它表示`保存的数据一旦被赋值，就不能被修改`；
    - 但是`如果赋值的是引用类型，那么可以通过引用找到对应的对象，修改对象`的内容；
  - **注意：**另外let、const不允许重复声明变量；

- ###### let/const作用域提升

  - **let、const和var的另一个重要区别是作用域提升：**
    - 我们知道`var声明的变量是会进行作用域提升`的；
    - 但是如果我们使用let声明的变量，在声明之前访问会报错；
  - **那么是不是意味着foo变量只有在代码执行阶段才会创建的呢？**
    - 事实上并不是这样的，我们可以看一下ECMA262对let和const的描述；
    - 这些变量会被创建在包含他们的词法环境被实例化时，但是是不可以访问它们的，直到词法绑定被求值；

- ###### 暂时性死区 (TDZ)

  - **我们知道，在let、const定义的标识符真正执行到声明的代码之前，是不能被访问的**

    - `从块作用域的顶部一直到变量声明完成之前`，这个变量处在`暂时性死区（TDZ，temporal dead zone）`

      ```javascript
      {
        console.log(name)
        
        let name = "why" // Uncaught ReferenceError: Cannot access 'name' before initialization
      }
      ```

  - 使用术语 “temporal” 是因为区域取决于执行顺序（时间），而不是编写代码的位置；

    ```javascript
    function foo() {
      console.log(message)
    }
    
    let message = "Hello World"
    foo()
    ```

- ###### let/const有没有作用域提升呢？

  - **从上面我们可以看出，在`执行上下文的词法环境创建出来的时候，变量事实上已经被创建`了，只是`这个变量是不能被访问`的。**
    - 那么变量已经有了，但是不能被访问，是不是一种作用域的提升呢？
  - **事实上维基百科并没有对作用域提升有严格的概念解释，那么我们自己从字面量上理解；**
    - 作用域提升：在`声明变量的作用域`中，如果`这个变量可以在声明之前被访问，那么我们可以称之为作用域提升`；
    - 在这里，它虽然被创建出来了，但是不能被访问，我认为不能称之为作用域提升；
  - 所以我的观点是`let、const没有进行作用域提升，但是会在解析阶段被创建出来`。

- ###### var的块级作用域

  - **JavaScript只会形成两个作用域：`全局作用域和函数作用域`。**

  - **ES5中放到一个代码中定义的变量，外面是可以访问的：**

    ```javascript
    // var 没有块级作用域
    {
      // 编写语句
      var foo = "foo"
    }
    
    console.log(foo) // foo 可以访问到
    ```

- ###### let/const的块级作用域

  - **在ES6中新增了块级作用域，并且通过`let、const、function、class声明`的标识符是具备块级作用域的限制的：**

    ```javascript
    {
      let foo = "foo"
      function bar() {
        console.log("bar")
      }
      class Person {}
    }
    
    console.log(foo) // ReferenceError: foo is not defined
    bar() // 可以访问
    var p = new Person() // ReferenceError: foo is not defined
    ```

  - **但是我们会发现`函数拥有块级作用域`，但是`外面依然是可以访问`的：**

    - 这是因为`引擎会对函数的声明进行特殊的处理`，允许像var那样进行提升；	

- ###### 块级作用域的应用

  - **我来看一个实际的案例：获取多个按钮监听点击**

  - **使用let或者const来实现：**

    ```html
    <body>
      <button>按钮一</button>
      <button>按钮二</button>
      <button>按钮三</button>
      <button>按钮四</button>
      
      <script>
      	var btns = document.getElementsByTagName("button")
        for(let i = 0; i < btns.length; i++) {
          btns[i].onclick = function() {
            console.log(`第${i}个按钮被点击`)
          }
        }
      </script>
    </body>
    ```

- ###### var、let、const的选择

  - **对于var的使用：**
    - 我们需要明白一个事实，var所表现出来的特殊性：比如`作用域提升、window全局对象、没有块级作用域`等都是`一些历史遗
      留问题`；
    - 其实是`JavaScript在设计之初的一种语言缺陷`；
    - 当然目前市场上也在`利用这种缺陷出一系列的面试题，来考察大家对JavaScript语言本身以及底层的理解`；
    - 但是在实际工作中，我们`可以使用最新的规范来编写，也就是不再使用var来定义变量`了；
  - **对于let、const：**
    - 对于let和const来说，是目前开发中推荐使用的；
    - 我们会`优先推荐使用const`，这样可以`保证数据的安全性不会被随意的篡改`；
    - 只有当`我们明确知道一个变量后续会需要被重新赋值`时，这个时候`再使用let`；
    - 这种在很多`其他语言里面也都是一种约定俗成的规范`，尽量我们也遵守这种规范；



## 9.3 字符串模板

- ###### 字符串模板基本使用

  - **ES6允许我们使用字符串模板来嵌入JS的变量或者表达式来进行拼接：**

    - 首先，我们会使用 `` 符号来编写字符串，称之为模板字符串；
    - 其次，在模板字符串中，我们可以`通过 ${expression} `来嵌入动态的内容；

    ```javascript
    const name = "why"
    const age = 18
    
    console.log(`my name is ${name}, age is ${age}`)
    
    function foo() {
      return 'function is foo'
    }
    
    console.log(`my function is ${foo()}`)
    ```

- ###### 标签模板字符串使用

  - **模板字符串还有另外一种用法：标签模板字符串（Tagged Template Literals）。**

  - **如果我们使用标签模板字符串，并且在调用的时候插入其他的变量：**

    - `模板字符串被拆分`了；

    - 第一个元素是`数组`，是`被模块字符串拆分的字符串组合`;

    - `后面的元素是一个个模块字符串传入的内容`；

      ```JavaScript
      const name = "why"
      const age = 18
      // [ ["Hello", "World", ''], 'why', 18]
      foo`Hello ${name} World ${age}`
      ```



## 9.4 函数的默认参数

- **在ES6之前，我们编写的函数参数是没有默认值的，所以我们在编写函数时，如果有下面的需求：**

  - 传入了参数，那么使用传入的参数；
  - 没有传入参数，那么使用一个默认值；

- **而在ES6中，我们允许给函数一个默认值：**

  ```javascript
  function foo(x = 20, y = 30) {
  
  }
  ```

- **默认值也可以和解构一起来使用：**

  ```javascript
  // 写法一
  function foo({name, age} = {name: "why", age: 18}) {
  	console.log(name, age)
  }
  
  // 写法二
  function foo({name = "why", age = 18} = {}) {
  	console.log(name, age)
  }
  ```

- **另外参数的默认值我们通常会将其放到最后（在很多语言中，如果不放到最后其实会报错的）：**

  - 但是JavaScript`允许不将其放到最后，但是意味着还是会按照顺序来匹配`；

- **另外默认值会改变函数的length的个数，默认值以及后面的参数都不计算在length之内了。**



## 9.5 函数的剩余参数

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



## 9.6 箭头函数

- ###### 箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁：

  - 箭头函数`不会绑定this、arguments属性`；
  - 箭头函数`不能作为构造函数来使用`（不能和new一起来使用，会抛出错误）；

- ###### 箭头函数如何编写呢？

  - (): 函数的参数

  - {}: 函数的执行体

    ```javascript
    nums.forEach((item, index, arr) => {
      
    })
    ```

- ###### 箭头函数的编写优化

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

- ###### ES6箭头函数this

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

- ###### 函数箭头函数的补充

  - 箭头函数是`没有显式原型prototype`的，所以不能作为构造函数，使用new来创建对象；
  - 箭头函数也`不绑定this、arguments、super参数`；



## 9.7 展开语法

- **展开语法(Spread syntax)：**
  - 可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；
  - 还可以在构造字面量对象时, 将对象表达式按key-value的方式展开；
- **展开语法的场景：**
  - 在`函数调用`时使用；
  - 在`数组构造`时使用；
  - 在`构建对象字面量`时，也可以使用展开运算符，这个是在ES2018（ES9）中添加的新特性；
- **注意：**展开运算符其实是一种浅拷贝；



## 9.8 Symbol

- ###### Symbol的基本使用

  - Symbol是什么呢？Symbol是ES6中新增的一个基本数据类型，翻译为符号。
  - **那么为什么需要Symbol呢？**
    - 在ES6之前，对象的属性名都是字符串形式，那么很容易造成属性名的冲突；
    - 比如原来有一个对象，我们希望在其中`添加一个新的属性和值`，但是我们在不确定它原来内部有什么内容的情况下，`很容易
      造成冲突，从而覆盖掉它内部的某个属性`；
    - 比如我们前面在讲apply、call、bind实现时，我们有给其中`添加一个fn属性`，那么如果它内部原来已经有了fn属性了呢？
    - 比如开发中我们使用混入，那么混入中出现了同名的属性，必然有一个会被覆盖掉；
  - Symbol就是为了解决上面的问题，用来**生成一个独一无二的值**。
    - Symbol值是通过`Symbol函数`来生成的，生成后可以`作为属性名`；
    - 也就是在ES6中，对象的属性名可以使用`字符串`，也可以使用`Symbol值`；
  - **Symbol即使多次创建值，它们也是不同的：**Symbol函数执行后每次创建出来的值都是独一无二的；
  - **我们也可以在创建Symbol值的时候传入一个描述description**：这个是ES2019（ES10）新增的特性；
  
- ###### Symbol作为属性名

  - 我们通常会使用Symbol在对象中表示唯一的属性名：

    ```JavaScript
    const s1 = Symbol("abc")
    const s2 = Symbol("cba")
    
    const obj = {}
    
    // 1.写法一：属性名赋值
    obj[s1] = "abc"
    obj[s2] = "cba"
    
    // 2.写法二：Object.defineProperty
    Object.defineProperty(obj, s1, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'abc'
    })
    
    // 3.写法三：定义字面量是直接使用
    const info = {
      [s1]: "abc",
      [s2]: "cba"
    }
    
    const symbolKeys = Object.getOwnPropertySymbols(info)
    for (const key of symbolKeys) {
      console.log(info[key])
    }
    ```

- ###### 相同值的Symbol

  - **前面我们讲Symbol的目的是为了创建一个独一无二的值，那么如果我们现在就是想创建相同的Symbol应该怎么来做呢？**

    - 我们可以使用`Symbol.for方法`来做到这一点；
    - 并且我们可以通过`Symbol.keyFor方法`来获取对应的key；

    ```javascript
    const s1 = Symbol.for("abc")
    const s2 = Symbol.for("abc")
    
    console.log(s1 === s2) // true
    const key = Symbol.KeyFor(s1)
    console.log(key) // abc
    const s3 = Symbol.for(key)
    console.log(s3 === s2) // true
    ```




## 9.9 Set

- ###### Set的基本使用

  - **在ES6之前，我们存储数据的结构主要有两种：`数组、对象`。**

    - **在ES6中新增了另外两种数据结构：`Set、Map`，以及它们的另外形式WeakSet、WeakMap。**

  - **Set是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是`元素不能重复`。**

    - 创建Set我们需要通过`Set构造函数`（暂时没有字面量创建的方式）：

  - 我们可以发现Set中存放的元素`是不会重复`的，那么Set有一个非常常用的功能就是`给数组去重`。

    ```javascript
    const set1 = new Set()
    set1.add(10)
    
    const set2 = new Set([11,22,22,34,32])
    console.log(set2) // {11, 22, 34 , 32}
    
    const arr = [10,20,10,44,78,44]
    const set3 = new Set(arr)
    const newArray1 = [...set3]
    const newArray2 = Array.from(set3)
    ```

- ###### Set的常见方法

  - **Set常见的属性：**
    - `size`：返回Set中元素的个数；
  - **Set常用的方法：**
    - `add(value)`：添加某个元素，返回Set对象本身；
    - `delete(value)`：从set中删除和这个值相等的元素，返回boolean类型；
    - `has(value)`：判断set中是否存在某个元素，返回boolean类型；
    - `clear()`：清空set中所有的元素，没有返回值；
    - `forEach(callback, [, thisArg])`：通过forEach遍历set；
  - **另外Set是支持for of的遍历的。**



## 9.10 WeakSet

- ###### WeakSet使用

  - **和Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构。**

  - **那么和Set有什么区别呢？**

    - 区别一：WeakSet中`只能存放对象类型，不能存放基本数据类型`；

    - 区别二：WeakSet`对元素的引用是弱引用`，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收；

      ```javascript
      const wset = new WeakSet()
      
      // TypeError：Invalid value used in weak set
      wset.add(10)
      ```

  - **WeakSet常见的方法：**

    - add(value)：添加某个元素，返回WeakSet对象本身；
    - delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型；
    - has(value)：判断WeakSet中是否存在某个元素，返回boolean类型；

- ###### WeakSet的应用

  - **注意：WeakSet不能遍历**

    - 因为WeakSet只是对对象的弱引用，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁。

    - 所以存储到WeakSet中的对象是没办法获取的；

      ```javascript
      const pwset = new WeakSet()
      class Person {
        constructor() {
          pwset.add(this)
        }
        running() {
          if(!pwset.has(this)) throw new Error("不能通过其他对象调用running方法")
          console.log("running",this)
        }
      }
      ```



## 9.11 Map

- ###### Map的基本使用

  - **另外一个新增的数据结构是Map，用于存储映射关系。**

  - **但是我们可能会想，在之前我们可以`使用对象来存储映射关系，他们有什么区别`呢？**

    - 事实上我们对象存储映射关系只能用`字符串（ES6新增了Symbol）作为属性名（key）`；
    - 某些情况下我们可能希望通过`其他类型作为key`，`比如对象`，这个时候`会自动将对象转成字符串来作为key`；

  - **那么我们就可以使用Map：**

    ```javascript
    const obj1 = { name: "why" }
    const obj1 = { age: 18 }
    
    const map = new Map()
    // 方式一
    map.set(obj1, "abc")
    map.set(obj2, "cba")
    
    // 方式二
    const map2 = new Map([
      [obj1, "abc"],
      [obj2, "cba"],
      [obj1, "nba"]
    ])
    
    console.log(map.get(obj1)) // nba
    console.log(map.get(obj2)) // cba
    ```

- ###### Map的常用方法

  - **Map常见的属性：**
    - `size`：返回Map中元素的个数；
  - **Map常见的方法：**
    - `set(key, value)`：在Map中添加key、value，并且返回整个Map对象；
    - `get(key)`：根据key获取Map中的value；
    - `has(key)`：判断是否包括某一个key，返回Boolean类型；
    - `delete(key)`：根据key删除一个键值对，返回Boolean类型；
    - `clear()`：清空所有的元素；
    - `forEach(callback, [, thisArg])`：通过forEach遍历Map；
  - **Map也可以通过for of进行遍历。**



## 9.12 WeakMap

- ###### WeakMap的使用

  - **和Map类型的另外一个数据结构称之为`WeakMap`，也是`以键值对的形式`存在的。**

  - 那么和Map有什么区别呢？

    - 区别一：`WeakMap的key只能使用对象，不接受其他的类型作为key`；

    - 区别二：WeakMap的`key对对象想的引用是弱引用`，如果没有其他引用引用这个对象，那么GC可以回收该对象；

      ```javascript
      const weakMap = new WeakMap()
      
      // Invalid value used as weak map key
      weakMap.set(1, "abc")
      // Invalid value used as weak map key
      weakMap.set("aaa", "abc")
      ```

  - **WeakMap常见的方法有四个：**

    - `set(key, value)`：在Map中添加key、value，并且返回整个Map对象；
    - `get(key)`：根据key获取Map中的value；
    - `has(key)`：判断是否包括某一个key，返回Boolean类型；
    - `delete(key)`：根据key删除一个键值对，返回Boolean类型；

- ###### WeakMap的应用

  - **注意：WeakMap也是不能遍历的**

    - 没有forEach方法，也不支持通过for of的方式进行遍历；

  - **WeakMap有什么作用呢？**

    ```javascript
    // WeakMap({key(对象): value}): key是一个对象，弱引用
    const targetMap = new WeakMap()
    function getDep(target, key) {
      // 1.根据对象(target)取出对应的Map对象
      let depsMap = targetMap.get(target)
      if(!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
      }
      
      // 2.取出具体的dep对象
      let dep = depsMap.get(key)
      if(!dep) {
        dep = new Dep()
        depsMap.set(key, dep)
      }
      return dep
    }
    ```



## 9.13 ES7

- ###### Array Includes

  - 在ES7之前，如果我们想判断一个数组中是否包含某个元素，需要通过 indexOf 获取结果，并且判断是否为 -1。

  - 在ES7中，我们可以通过**includes**来判断一个数组中是否包含一个指定的元素，根据情况，如果包含则返回 true，否则返回false。

    ```javascript
    const names = [1,3,4,4,5]
    
    if (names.includes("why")) {
      console.log("包含why")
    }
    
    if(names.includes("why", 4)) {
      console.log("包含why")
    }
    ```

- ###### 指数exponentiation运算符

  - 在ES7之前，计算数字的乘方需要通过 Math.pow 方法来完成。

  - 在ES7中，增加了  `** 运算符`，可以对数字来计算乘方。

    ```javascript
    const result1 = Math.pow(3, 3)
    const result2 = 3 ** 3
    ```



## 9.14 ES8

- ###### Object values

  - 之前我们可以通过 `Object.keys` 获取一个对象所有的key

  - **在ES8中提供了 `Object.values` 来获取所有的value值：**

    ```javascript
    const obj = {
    	name: "why",
      age: 18
    }
    
    console.log(Object.values(obj)) // ["why", 18]
    
    // 如果传入一个字符串
    console.log(Object.values("abc")) // ['a','b','c']
    ```

- ###### Object entries

  - **通过 `Object.entries` 可以获取到一个数组，数组中会存放可枚举属性的键值对数组。**

    - 可以针对`对象、数组、字符串`进行操作；

    ```javascript
    const obj = {
      name: 'why',
      age: 18,
      height: 1.88
    }
    
    console.log(Object.entries(obj)) // [ ['name', 'why'], ['age', 18], ['height', 1.88] ]
    for(const entry of Object.entries(obj)) {
      const [key, value] = entry
      console.log(key, value)
    }
    
    // 如果是一个数组
    console.log(Object.entries(["abc","cba","nba"])) // [ ['0', 'abc'], ['1', 'cba'], ['2', 'nba'] ]
    
    // 如果是一个字符串
    console.log(Object.entries("abc")) // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
    ```

- ###### String Padding

  - 某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8中增加了 `padStart 和 padEnd` 方法，分别是`对字符串
    的首尾进行填充`的。

    ```javascript
    const message = "Hello World"
    
    console.log(message.padStart(15, "a")) // aaaaHello World
    console.log(message.padEnd(15, 'b')) // Hello Worldbbbb
    ```

  - **我们简单具一个应用场景：比如需要对身份证、银行卡的前面位数进行隐藏：**

    ```javascript
    const cardNumber = '3242536473647364834'
    const lastFourNumber = cardNumber.slice(-4)
    const finalCardNumber = lastFourNumber.padStart(cardNumber.length, "*")
    console.log(finalCardNumber) // ***************4834
    ```

- ###### Trailing Commas

  - **在ES8中，我们允许在函数定义和调用时`多加一个逗号`：**

    ```javascript
    function foo(a, b,) {
      console.log(a, b)
    }
    
    foo(10, 20, )
    ```

- ###### Object.getOwnPropertyDescriptors

  - 获取对象属性描述符

    ```javascript
    var obj = {
      name: "why",
      age: 18
    }
    
    // 1.获取属性描述符
    console.log(Object.getOwnPropertyDescriptors(obj))
    ```



## 9.15 ES10

- ###### flat flatMap

  - **flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。**

    ```JavaScript
    const nums = [10,20,[5,8], [[2,3],[9,22]]
    
    const newNums1 = nums.flat(1) // [10, 20, 5, 8, [2,3], [9,22]]
    const newNums2 = nums.flat(2) // [10, 20, 5, 8, 2, 3, 9, 22]
    ```

  - **flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。**

    - 注意一：flatMap是先进行map操作，再做flat的操作；

    - 注意二：flatMap中的flat相当于深度为1；

      ```javascript
      const message = ["hello world","你好 小陈","my name is abc"]
      
      const newMessage = message.flatMap(item => {
          return item.split(" ")
      })
      console.log(newMessage)
      ```

- ###### Object fromEntries

  - **在前面，我们可以通过 Object.entries 将一个对象转换成 entries**

  - 那么如果我们有一个entries了，如何将其转换成对象呢？

    - ES10提供了 `Object.formEntries`来完成转换：

  - **应用场景**

    ```javascript
    // 应用场景1
    const obj = {
      name: "why",
      age: 18
    }
    
    const entries = Object.entries(obj)
    const info = Object.fromEntries(entries)
    console.log(info)
    
    // 应用场景二
    const paramsString = 'name=why&age=18&height=1.88'
    const searchParams = new URLSearchParams(paramsString)
    for(const param of searchParams) {
      console.log(param)
    }
    const searchObj = Object.fromEntries(searchParams)
    console.log(searchObj)
    ```

- ###### trimStart trimEnd

  - **去除一个字符串首尾的空格，我们可以通过trim方法，如果单独去除前面或者后面呢？**

    - ES10中给我们提供了`trimStart和trimEnd`；

      ```javascript
      const message = "    Hello World    "
      message.trimStart()
      message.trimEnd()
      ```



## 9.16 ES11

- ###### BigInt

  - **在早期的JavaScript中，我们不能正确的表示过大的数字：**

    - 大于MAX_SAFE_INTEGER的数值，表示的可能是不正确的。

  - **那么ES11中，引入了新的数据类型BigInt，用于表示大的整数：**

    - BitInt的表示方法是在数值的后面加上n

      ```javascript
      const maxInt = Number.MAX_SAFE_INTEGER
      console.log(maxInt)
      
      // 大于MAX_SAFE_INTEGER值的一些数值，无法正确的表示
      console.log(maxInt + 1) // 9007199254740992
      console.log(maxInt + 2) // 9007199254740992
      
      const bigInt = 9007199254740991n
      console.log(bigInt + 1n)
      console.log(bigInt + 2n)
      ```

- ###### 空值合并操作符 Nullish Coalescing Operator

  - **ES11，Nullish Coalescing Operator增加了空值合并操作符：**

    ```javascript
    const foo = ""
    
    const result1 = foo || '默认值' // 默认值
    const result2 = foo ?? '默认值' // " "
    ```

- ###### 可选链 Optional Chaining

  - **`可选链`也是`ES11中新增一个特性`，主要作用是让我们的代码在`进行null和undefined判断时更加清晰`和简洁：**

    ```javascript
    const obj = {
      friend: {
        girlFriend: {
          name: 'Lucy'
        }
      }
    }
    
    if(obj.friend && obj.friend.girlFriend) {
      console.log(obj.friend.girlFriend.name)
    }
    
    // 可选链的方式
    console.log(obj.friend?.girlFriend?.name)
    ```

- ###### Global This

  - **在之前我们希望获取JavaScript环境的全局对象，不同的环境获取的方式是不一样的**

    - 比如在浏览器中可以通过this、window来获取；
    - 比如在Node中我们需要通过global来获取；

  - **在ES11中对获取全局对象进行了统一的规范：globalThis**

    ```javascript
    console.log(globalThis)
    console.log(this) // 浏览器上
    console.log(global) // Node上
    ```

- ###### for..in标准化

  - **在ES11之前，虽然很多浏览器支持for...in来遍历`对象类型`，但是并没有被ECMA标准化。**

  - **在ES11中，对其进行了标准化，`for...in是用于遍历对象`的key的：**

    ```javascript
    const obj = {
      name: "why",
      age: 18
    }
    
    for (const key in obj) {
      console.log(key)
    }
    ```



## 9.17 ES12

- ###### FinalizationRegistry

  - **`FinalizationRegistry` 对象可以让你在对象被垃圾回收时请求一个回调。**

    - FinalizationRegistry 提供了这样的一种方法：当一个`在注册表中注册的对象被回收`时，`请求在某个时间点上调用一个清理回
      调`。（清理回调有时被称为 finalizer ）;

    - 你可以通过`调用register方法`，`注册任何你想要清理回调的对象，传入该对象和所含的值`;

      ```javascript
      let obj = { name: "why" }
      
      const registry = new FinalizationRegistry(value => {
          console.log('被销毁了', value);
      })
      
      registry.register(obj, "obj")
      
      setTimeout(() => {
          obj = null
      }, 1000);
      ```

- ###### WeakRefs

  - 如果我们默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用：

    - 如果我们希望是一个弱引用的话，可以使用WeakRef；

    ```javascript
    let obj = {name: "why"}
    let info = new WeakRef(obj)
    ```

- ###### 逻辑赋值运算符：logical assignment operators

  ```JavaScript
  // 1.逻辑或运算符
  let message = ""
  // message = message || "hello world"
  message ||= "hello world"
  
  let obj = {
    name: "why"
  }
  
  // 2.逻辑与运算符
  // obj = obj && obj.foo()
  obj &&= obj.name
  
  // 3.逻辑空运算符
  let foo = null
  foo ??= "默认值"
  console.log(foo)
  ```



## 9.18 ES13

- ###### method .at()

  - 前面我们有学过字符串、数组的at方法，它们是作为ES13中的新特性加入的：

    ```javascript
    // 1.数组
    var names = ['abc', 'cba', 'nba']
    console.log(names.at(1))
    console.log(names.at(-1))
    
    // 2.字符串
    var str = "hello world"
    console.log(str.at(1))
    console.log(str.at(-1))
    ```

- ###### Object.hasOwn(obj, propKey)

  - Object中新增了一个静态方法（类方法）： hasOwn(obj, propKey)

    - 该方法用于判断一个对象中是否有某个自己的属性；

  - 那么和之前学习的Object.prototype.hasOwnProperty有什么区别呢？

    - 区别一：防止对象内部有重写hasOwnProperty

    - 区别二：对于隐式原型指向null的对象， hasOwnProperty无法进行判断

      ```javascript
      var obj = {
          name: "czl",
          age: 18,
          hasOwnProperty: function() {
              return false
          }
      }
      
      var info = Object.create(null)
      info.name = 'why'
      console.log(info.hasOwnProperty("name")); // 报错
      console.log(Object.hasOwn(info, "name")); // 可以判断 返回true
      ```

- ###### New members of classes：定义类字段的其他方式

  - 在ES13中，新增了定义class类中成员字段（field）的其他方式：

    ```javascript
    class Person {
      address = "中国"
    	static totalCount = "70亿"
    
      // 只能类内部访问
    	#sex = "male"
    	static #maleCount = "10亿"
      
      constructor(name, age) {
        this.name = name
        this.age = age
      }
    
    	// 静态代码块
    	static {
        console.log("static block execution")
      }
    
    	printInfo() {
        console.log(this.address, this.#sex, Person.#maleCount)
      }
    }
    ```

    











