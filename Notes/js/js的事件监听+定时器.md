# JavaScript的事件监听

## 1. 事件监听的方式

- 方式一：在script中直接监听（很少使用）；

- 方式二：DOM属性，通过元素的on来监听事件；

- 方式三：通过EventTarget中的addEventListener来监听；

  ```javascript
  <div class="box" onclick="alert('box点击')"></div>
  <script>
    box.onclick = function() {
      alert("box点击2")
    }
    box.addEventListener('click',function() {
      alert("box点击3")
    })
  </script>
  ```



## 2. 事件冒泡和事件捕获

- **从最内层的span向外依次传递的顺序**，这个顺序我们称之为 **事件冒泡（Event Bubble）**;

- **从外层到内层（body -> span）**，这种称之为 **事件捕获（Event Capture）**；

- **为什么会产生两种不同的处理流呢？**

  - 这是因为早期浏览器开发时，不管是 **IE还是Netscape公司都发现了这个问题**;
  - 但是他们采用了 **完全相反的事件流来对事件进行了传递**；
  - IE采用了 **事件冒泡的方式**，Netscape采用了 **事件捕获的方式**；

- **监听事件捕获的过程**

  ```javascript
  spanEl.addEventListener('click', function(){
    
  },true)
  ```

### 2.1 事件捕获和冒泡的过程

- **捕获阶段（Capturing phase）**：
  - 事件（从 Window）向下走近元素。
- **目标阶段（Target phase）**：
  - 事件到达目标元素。
- **冒泡阶段（Bubbling phase）**：
  - 事件从元素上开始冒泡。
- 开发中通常会使用 **事件冒泡**，所以事件捕获了解即可。



## 3. 事件对象event

- 当一个事件发生时，就会有和这个事件相关的很多信息：

  - 比如 **事件的类型是什么**，你点击的是 **哪一个元素**，**点击的位置** 是哪里等等相关的信息；
  - 那么这些信息会被封装到一个 **Event** 对象中，这个对象由 **浏览器** 创建，称之为 **event对象**；
  - 该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作；

- **获取event对象**

  - **event对象** 会在 **传入的事件处理（event handler）函数回调** 时，被系统传入；

  - 我们可以在回调函数中拿到这个 **event对象**；

    ```javascript
    spanEl.onclick = function(event){
      console.log("事件对象：",event)
    }
    spanEl.addEventListener("click", function(event){
      console.log("事件对象：", event)
    })
    ```

### 3.1 event常见的属性和方法

- `type`：事件的类型；
- `target`：当前事件发生的元素；
- `currentTarget`：当前处理事件的元素；
- `eventPhase`：事件所处的阶段；
- `offsetX、offsetY`：事件发生在元素内的位置；
- `clientX、clientY`：事件发生在客户端内的位置；
- `pageX、pageY`：事件发生在客户端相对于document的位置；
- `screenX、screenY`：事件发生相对于屏幕的位置；

### 3.2 事件处理中的this

- **在函数中，我们也可以通过this来获取当前的发生元素：**

  ```javascript
  boxEl.addEventListener("click", function(event){
    console.log(this === event.target) // true
  })
  ```



## 4. EventTarget类

- 所有的节点、元素都继承自EventTarget，事实上Window也继承自 **EventTarget**；

- **EventTarget是什么:**

  - EventTarget是一个 **DOM接口**，主要用于 **添加、删除、派发Event事件**；

- **EventTarget常见的方法:**

  - `addEventListener`：注册某个事件类型以及事件处理函数；

  - `removeEventListener`：移除某个事件类型以及事件处理函数；

  - `dispatchEvent`：派发某个事件类型到EventTarget上；

    ```javascript
    var boxEl = document.querySelector(".box")
    boxEl.addEventListener("click", function(){
      console.log("点击了box")
    })
    boxEl.addEventListener("click",function(){
      window.dispatchEvent(new Event("czl"))
    })
    window.addEventListener("czl",function(event){
      console.log("监听到czl事件：",event)
    })
    ```



## 5. 事件委托（event delegation）

- 事件冒泡在某种情况下可以帮助我们实现强大的事件处理模式 – **事件委托模式**（也是一种设计模式）

- 因为 **当子元素被点击** 时，父元素可以 **通过冒泡可以监听到子元素的点击**；

- 并且 **可以通过event.target获取到当前监听的元素**；

- **案例**：一个ul中存放多个li，点击某一个li会变成红色

  - 方案一：监听 **每一个li的点击**，并且 **做出响应**；

  - 方案二：在 **ul中监听点击**，并且 **通过event.target拿到对应的li进行处理**；

    - 因为这种方案并不需要遍历后给每一个li上添加事件监听，所以它更加高效；

      ```javascript
      var listEl = document.querySelector(".list")
      var currentActive = null
      listEl.addEventListener("click", function(event){
        if (currentActive) currentActive.classList.remove("active")
        event.target.classList.add("active")
        currentActive = event.target
      })
      
      ```

### 5.1 事件委托的标记

- 某些事件委托可能需要对具体的子组件进行区分，这个时候我们可以使用 **data-*** 对其进行标记：

- 比如多个按钮的点击，区分点击了哪一个按钮：

  ```html
  <div class="btn-list">
   	<button data-action="new">新建</button>
   	<button data-action="search">搜索</button>
   	<button data-action="delete">删除</button>
  </div>
  
  <script>
  	var bthListEl = document.querySelector(".btn-list")
    bthListEl.addEventListener("click", function(event){
      var action = event.target.dataset.action
      switch(action){
        case "new":
          console.log("点击了新建")
          break
        case "search":
          console.log("点击了搜索")
          break
        case "delete":
          console.log("点击了删除")
          break
        default:
          console.log("位置action")
      }
    })
  </script>
  
  ```



## 6. 常见的鼠标事件

![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112112257.png)



## 7. 常见的键盘事件

![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112112348.png)

- 事件的执行顺序
  - **down** 事件先发生；
  - **press** 发生在文本被输入；
  - **up** 发生在文本输入完成；
- 我们可以通过key和code来区分按下的键：
  - **code** ：“按键代码”（"KeyA"，"ArrowLeft" 等），特定于键盘上按键的物理位置。
  - **key** ：字符（"A"，"a" 等），对于非字符的按键，通常具有与 code 相同的值。）



## 8. 常见的表单事件

![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112112643.png)



## 9. 文档加载事件

- **DOMContentLoaded**：浏览器已完全加载 HTML，并构建了 DOM 树，但像 <img> 和样式表之类的外部资源可能尚未加载完成。

- **load**：浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。

  ```html
  <div>哈哈哈</div>
  <img src="https://ossweb-img.qq.com.jpg" alt="">
  
  <script>
  	window.addEventListener("DOMContentLoaded", function(){
      var imgEl =  document.querySelector("img")
      console.log("页面内容加载完毕",imgEl.offsetWidth, imgEl.offsetHeight)
    })
  	window.addEventListener("load", function(){
      var imgEl =  document.querySelector("img")
      console.log("页面所有内容加载完毕",imgEl.offsetWidth, imgEl.offsetHeight)
    })  
  </script>
  ```



## 10. CSS事件

- **transitionend** —— 当一个 CSS 动画完成时。

  ```html
  <div class="box">box盒子</div>
  
  <script>
  	var boxEl = document.querySelector(".box")
    boxEl.addEventListener("transitionend", function(){
      console.log("div盒子动画加载完毕")
    })
  </script>
  ```



## 11. window定时器方法

- 有时我们并不想立即执行一个函数，而是等待特定一段时间之后再执行，我们称之为 **“计划调用（scheduling a call）”**。
- 目前有**两种方式**可以实现：
  - **setTimeout** 允许我们将函数 **推迟到一段时间间隔之后** 再执行。
  - **setInterval** 允许我们 **重复运行一个函数**，从一段 **时间间隔之后开始运行**，之后以该时间间隔 **连续重复运行该函数**。
- 对应的**取消方法**：
  - **clearTimeout**：取消setTimeout的定时器；
  - **clearInterval**：取消setInterval的定时器；

### 11.1 setTimeout的使用

- **语法**：`let timeId = setTimeout(func|code,[delay],[arg1],[aeg2],...)`

  - **func|code**：想要执行的函数或代码字符串。
  - **delay**：执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），默认值是 0；
  - **arg1,arg2…**：要传入被执行函数（或代码字符串）的参数列表；

- **setTimeout** 在调用时会返回一个 **“定时器标识符”**，我们可以使用它来取消执行。

  ```javascript
  var timeID = setTimeout(function(name,age){
    console.log("定时器：",name,age)
  },2000,"why",18)
  clearTimeout(timeID)
  ```

### 11.2 setInterval的使用

- **语法**：`let timeId = setInterval(func|code,[delay],[arg1],[aeg2],...)`

  - 所有参数的意义也是相同的；

- **setInterval** 也会返回一个 **“定时器标识符”**，我们可以通过clearInterval来取消这个定时器。

  ```javascript
  var timeID = setInterval(function(name,age){
    console.log("定时器：",name,age)
  },2000,"why",18)
  setInterval(timeID)
  ```



