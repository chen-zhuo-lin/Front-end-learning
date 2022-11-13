# 深入浏览器的渲染原理

## 1. 浏览器的内核

- 常见的浏览器内核有：
  - **Trident**（ 三叉戟）：IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器；
  - **Gecko**（ 壁虎） ：Mozilla Firefox；
  - **Presto**（急板乐曲）-> `Blink `（眨眼）：Opera
  - **Webkit **：Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器（Android、iOS）
  - **Webkit**-> **Blink**：Google Chrome，Edge
- 我们经常说的浏**览器内核指的是浏览器的排版引擎**：
  - **排版引擎**，也称为**浏览器引擎**、**页面渲染引擎**或**样版引擎**。
- 也就是一个网页下载下来后，就是由我们的**渲染引擎来帮助我们解析**的。



## 2. 渲染引擎解析页面的详细流程

### 2.1 解析一：HTML解析过程

- 默认情况下**服务器会给浏览器返回index.html文件**，所以解析HTML是所有步骤的开始:
- 解析HTML，会**构建DOM Tree**：

### 2.2 解析二 – 生成CSS规则

- 在解析的过程中，如果**遇到CSS的link元素**，那么**会由浏览器负责下载对应的CSS文件**：
  - 注意：下载CSS文件是不会影响DOM的解析的；
- 浏览器下载完CSS文件后，就会对CSS文件进行解析，**解析出对应的规则树**：
  - 我们可以称之为 **CSSOM**（CSS Object Model，CSS对象模型）；

### 2.3 解析三 – 构建Render Tree

- 当有了DOM Tree和 CSSOM Tree后，就可以两个结合来构建 **Render Tree** 了
- 注意一：**link元素不会阻塞DOM Tree的构建过程**，但是 **会阻塞Render Tree的构建过程**
  - 这是因为Render Tree在构建时，需要对应的CSSOM Tree；
- 注意二：**Render Tree和DOM Tree并不是一一对应的关系**，比如对于display为none的元素，压根不会出现在**render tree**中；

### 2.4 解析四 – 布局（layout）和绘制（Paint）

- 第四步是在渲染树（Render Tree）上运行 **布局（Layout）** 以计算每个节点的几何体。
  - 渲染树会表示显示哪些节点以及其他样式，但是 **不表示每个节点的尺寸、位置** 等信息；
  - 布局是确定呈现树中 **所有节点的宽度、高度和位置信息**；
- 第五步是**将每个节点绘制（Paint）到屏幕上**
  - 在绘制阶段，浏览器将布局阶段计算的 **每个frame转为屏幕上实际的像素点**；
  - 包括 **将元素的可见部分进行绘制**，比如 **文本、颜色、边框、阴影、替换元素（比如img）**



## 3. 回流和重绘

### 3.1 理解回流(重排)reflow

- 第一次确定节点的大小和位置，称之为**布局（layout）**。
- 之后对节点的大小、位置修改重新计算称之为**回流**。

### 3.2 什么情况下引起回流呢？

- 比如DOM结构发生改变（添加新的节点或者移除节点）；
- 比如改变了布局（修改了width、height、padding、font-size等值）;
- 比如窗口resize（修改了窗口的尺寸等）;
- 比如调用 **getComputedStyle方法** 获取尺寸、位置信息；

### 3.3 理解重绘repaint

- 第一次渲染内容称之为**绘制（paint）**;
- 之后重新渲染称之为**重绘**。

### 3.4 什么情况下会引起重绘呢？

- 比如**修改背景色、文字颜色、边框颜色、样式**等；
- 回流一定会引起重绘，所以回流是一件很消耗性能的事情。

### 3.5 避免回流的方式

1. 修改样式时 **尽量一次性修改**;
   - 比如通过cssText修改，比如通过添加class修改
2. 尽量 **避免频繁的操作DOM**;
   - 我们可以在一个DocumentFragment或者父元素中将要操作的DOM操作完成，再一次性的操作；
3. 尽量 **避免通过 getComputedStyle 获取尺寸、位置** 等信息；
4. 对 **某些元素使用`position`的`absolute`或者`fixed`**
   - 并不是不会引起回流，而是开销相对较小，不会对其他元素造成影响。



## 4. 特殊解析 – composite合成

- 绘制的过程，可以将布局后的元素绘制到多个合成图层中。
  - 这是浏览器的一种优化手段；
- 默认情况下，标准流中的内容都是被绘制在同一个图层（Layer）中的；
- 而一些特殊的属性，会**创建一个新的合成层（ CompositingLayer ）**，并且新的图层可以利用GPU来加速绘制；
  - 因为每个合成层都是单独渲染的；
- 那么哪些属性可以形成新的合成层呢？**常见的一些属性**：
  - `3D transforms`
  - `video、canvas、iframe`
  - `opacity 动画转换时；`
  - `position: fixed`
  - `will-change`：一个实验性的属性，提前告诉浏览器元素可能发生哪些变化；
  - `animation 或 transition 设置了opacity、transform`；
- 分层确实可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分过度使用。



## 5. script元素和页面解析的关系

- 浏览器在解析HTML的过程中，遇到了 **script元素是不能继续构建DOM树** 的；
- 它会 **停止继续构建，首先下载JavaScript代码，并且执行JavaScript的脚本**；
- 只有 **等到JavaScript脚本执行结束后，才会继续解析HTML，构建DOM树**；

- 这样做的**意义**：
  - 这是 **因为JavaScript的作用之一就是操作DOM，并且可以修改DOM**；
  - 如果我们 **等到DOM树构建完成并且渲染再执行JavaScript，会造成严重的回流和重绘，影响页面的性能**；
  - 所以会在 **遇到script元素时，优先下载和执行JavaScript代码，再继续构建DOM树**；
- 带来的**问题**：
  - 在目前的开发模式中（比如Vue、React），**脚本往往比HTML页面更“重”，处理时间需要更长**；
  - 所以会 **造成页面的解析阻塞，在脚本下载、执行完成之前，用户在界面上什么都看不到**；



## 6. defer属性

- defer 属性告诉浏览器 **不要等待脚本下载**，而 **继续解析HTML，构建DOM Tree**。

  - 脚本 **会由浏览器来进行下载，但是不会阻塞DOM Tree** 的构建过程；
  - 如果脚本提前下载好了，它会 **等待DOM Tree构建完成，在`DOMContentLoaded`事件之前先执行defer中的代码**；

- 所以 `DOMContentLoaded` 总是**会等待defer中的代码先执行完成**。

  ```html
  <script defer src="demo.js"></script>
  <script>
  	window.addEventListener("DOMContentLoaded", () => {
      console.log('DOM 加载完成')
    })
  </script>
  ```

- 另外多个带defer的脚本是可以保持**正确的顺序执行**的。

- 从某种角度来说，**defer可以提高页面的性能**，并且**推荐放到head元素**中；

- 注意：**defer仅适用于外部脚本**，对于script默认内容会被忽略。



## 7. async属性

- async 特性与 defer 有些类似，它也能够让脚本不阻塞页面。

- async是让一个**脚本完全独立**的：

  - 浏览器 **不会因 async 脚本而阻塞**（与 defer 类似）；

  - **async脚本不能保证顺序，它是独立下载、独立运行，不会等待其他脚本**；

  - **async不会能保证在`DOMContentLoaded`之前或者之后执行**；

    ```html
    <script>
      window.addEventListener("DOMContentLoaded", () => {
        console.log('DOM 加载完成')
      })
    </script>
    <script async src="demo.js"></script>
    ```

- async通常用于独立的脚本，对其他脚本，甚至DOM没有依赖的；

  

