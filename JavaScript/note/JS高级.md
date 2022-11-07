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

  

  





















