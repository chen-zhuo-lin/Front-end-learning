# 九、JavaScript的DOM操作

## 1. 深入理解DOM

- **浏览器会对我们`编写的HTML、CSS进行渲染`，同时它又要考虑我们可能会`通过JavaScript来对其进行操作`：**

  - 于是 **浏览器将我们编写在HTML中的每一个元素（Element）都抽象成了一个个对象**;
  - 所有这些对象都可以 **通过JavaScript来对其进行访问**，那么我们就可以 **通过JavaScript来操作页面**；
  - 所以，我们将 **这个抽象过程** 称之为 **文档对象模型（Document Object Model）**；

- **整个文档被抽象到 document 对象中：**

  - 比如`document.documentElement`对应的是`html元素`；

  - 比如`document.body`对应的是`body元素`；

  - 比如`document.head`对应的是`head元素`；

    ```javascript
    console.log(document.documentElement)       
    console.log(document.head)
    console.log(document.body)            
    ```

    

## 2. DOM Tree的理解

- **一个页面不只是有html、head、body元素，也包括很多的子元素：**

  - 在html结构中，最终会形成一个 **树结构**；

  - 在抽象成DOM对象的时候，它们也会形成一个 **树结构**，我们称之为 **DOM Tree**；

    ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112103440.png)



## 3. DOM的继承关系图

- **DOM相当于是JavaScript和HTML、CSS之间的桥梁**

  - 通过浏览器提供给我们的 **DOM API**，我们可以 **对元素以及其中的内容** 做任何事情；

- **类型之间有如下的继承关系：**

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112103657.png)



## 4. document对象

- **Document节点表示的整个载入的网页，它的实例是全局的`document对象`：**
  - 对DOM的所有操作都是 **从 document 对象开始** 的；
  - 它是 **DOM的 入口点**，可以从 **document** 开始去访问任何节点元素；
- **对于最顶层的html、head、body元素，我们可以直接在document对象中获取到：**
  - `html元素`： = document.documentElement
  - `body元素`： = document.body
  - `head元素`： = document.head
  - `文档声明`： = document.doctype



## 5. 节点（Node）之间的导航（navigator）

- 如果我们**获取到一个节点（Node）后**，可以**根据这个节点去获取其他的节点**，我们**称之为节点之间的导航。**
- **节点之间存在如下的关系：**
  - 父节点：`parentNode`
  - 前兄弟节点：`previousSibling`
  - 后兄弟节点：`nextSibling`
  - 子节点：`childNodes`
  - 第一个子节点：`firstChild`
  - 最后一个子节点：`lastChild`



## 6. 元素（Element）之间的导航（navigator）

- 如果我们**获取到一个元素（Element）后**，可以**根据这个元素去获取其他的元素**，我们**称之为元素之间的导航。**
- **元素之间存在如下的关系：**
  - 父元素：`parentElement`
  - 前兄弟元素：`previousElementSibling`
  - 后兄弟元素：`nextElementSibling`
  - 子元素：`children`
  - 第一个子元素：`firstElementChild`
  - 最后一个子元素:`lastElementChild`



## 7. 表格（table）元素的导航（navigator）

- **`<table>`元素支持 (除了上面给出的，之外) 以下这些属性：**
  - `table.rows` —  元素的集合；
  - `table.caption/tHead/tFoot` — 引用元素 <caption> ，<thead>，<tfoot>；
  - `table.tBodies` —  <tbody>元素的集合；
- **<thead>,<tfoot>,<tbody> 元素提供了rows属性;**
  - `tbody.rows`  ~ 表格内部 <tr> 元素的集合
- **<tr>:**
  - `tr.cells` ~ 在给定 <tr> 中的 <td> 和 <th> 单元格的集合
  - `tr.sectionRowIndex` — 给定的 <tr> 在封闭的 <thead> / <tbody> / <tfoot>  中的位置（索引）；
  - `tr.rowIndex` — 在整个表格中 <tr> 的编号（包括表格的所有行）；
- **<td> 和 <th>：**
  - `td.cellIndex` — 在封闭的 <tr> 中单元格的编号。



## 8. 获取元素的方法

- **当元素彼此靠近或者相邻时，DOM `导航属性（navigation property）`非常有用。**

  - 但是，在实际开发中，我们希望可以 **任意的获取到某一个元素** 应该如何操作呢？

- **DOM为我们提供了获取元素的方法：**

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112104135.png)

- **开发中如何选择呢？**

  - 目前最常用的是`querySelector` 和 `querySelectAll`；
  - `getElementById`偶尔也会使用或者在适配一些低版本浏览器时；



## 9. 节点的类型 - nodeType

- **目前，我们已经可以获取到节点了，接下来我们来看一下节点中有哪些常见的属性：**

  - 当然，不同的节点类型有可能有不同的属性；
  - 这里我们主要讨论 **节点共有的属性**;

- **nodeType属性：**

  - nodeType 属性提供了一种获取 **节点类型** 的方法；
  - 它有一个 **数值型值**（numeric value）；

- **常见的节点类型有如下：**

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112104438.png)



## 10. 节点的属性

- **nodeName：获取node节点的名字；**

- **tagName：获取元素的标签名词；**

  ```javascript
  var textNode = document.body.firstChild
  var itemNode = document.body.childNodes[3]
  console.log(textNode.nodeName)
  ```

- **tagName 和 nodeName 之间有什么不同呢？**

  - `tagName `属性仅适用于 Element 节点；
  - `nodeName `是为任意 Node 定义的：
    - 对于元素，它的意义与 tagName 相同，所以使用哪一个都是可以的；
    - 对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串；

- **innerHTML属性**

  - 将元素中的 HTML 获取为字符串形式；
  - 设置元素中的内容；

- **outerHTML属性**

  - 包含了元素的完整 HTML
  - innerHTML 加上元素本身一样；

- **textContent 属性**

  - 仅仅获取元素中的文本内容;

- **innerHTML和textContent的区别:**

  - 使用 innerHTML，我们将其`“作为 HTML”插入`，带有所有 HTML 标签。
  - 使用 textContent，我们将其`“作为文本”插入`，所有符号（symbol）均按字面意义处理。

- **nodeValue/data**

  - 用于 **获取非元素节点的文本内容**

  ```html
  <!-- 注释内容 -->
  <script>
    var text = document.body.firstChild
    var comment = text.nodeValue	
    console.log(comment.nodeValue)
  </script>
  ```

- **hidden属性：也是一个全局属性，可以用于设置元素隐藏。**

  ```html
  <body>
    <div class="box">哈哈哈哈 </div>
    
    <script>
    	var boxEl = document.querySelector('.box')
      boxEl.hidden = true
    </script>
  </body>
  
  ```



## 11. 元素的属性和特性

### 11.1 属性attribute的分类

- **标准的attribute**：某些attribute属性是标准的，比如id、class、href、type、value等；

- **非标准的attribute**：某些attribute属性是自定义的，比如abc、age、height等；

  ```html
  <div class="box" id="main" name="why" abc="anc" age="18" height="1.88">
    哈哈哈哈
  </div>
  ```

### 11.2 attribute的操作

- **对于所有的attribute访问都支持如下的方法：**

  - `elem.hasAttribute(name)` — 检查特性是否存在。
  - `elem.getAttribute(name)` — 获取这个特性值。
  - `elem.setAttribute(name, value)` — 设置这个特性值。
  - `elem.removeAttribute(name)` — 移除这个特性。
  - `attributes`：attr对象的集合，具有name、value属性；

  ```JavaScript
  for(var attr of boxEl.attributes){
    console.log(attr.name, attr.value)
  }
  boxEl.hasAttribute("age") // true
  boxEl.getAttribute("name") // why
  boxEl.setAttribute("name", "kobe")
  boxEl.removeAttribute("abc")
  
  ```

- **attribute具备以下特征:**

  - 它们的 **名字是大小写不敏感的**（id 与 ID 相同）。
  - 它们的 **值总是字符串类型** 的。

### 11.3 元素的属性property

- **对于`标准的attribute`，会在DOM对象上创建`与其对应的property属性`：**

- **在大多数情况下，它们是相互作用的**;

  - 改变 **property**，通过 **attribute** 获取的值，会随着改变；
  - 通过 **attribute** 操作修改，**property** 的值会随着改变；
    - 但是input的value修改只能通过attribute的方法；

- **除非特别情况，大多数情况下，设置、获取attribute，推荐使用property的方式：**

  - 这是因为它 **默认情况下是有类型** 的；

    ```javascript
    toggleBtn.onclick = function(){
      checkBoxInput.checked = !checkBoxInput.checked
    }
    ```



## 12. HTML5的data-*自定义属性

- 前面我们有学习HTML5的data-*自定义属性，那么它们也是可以在dataset属性中获取到的：	

  ```html
  <div class="box" data-name="why" data-age="18">
  	我是box元素
  </div>
  
  <script>
  	var boxEl = document.querySelector(".box")
    console.log(boxEl.dataset.name)
    console.log(boxEl.dataset.age)
  </script>
  ```



## 13. 元素的className和classList

- **元素的class attribute，对应的property并非叫class，而是`className`：**

  - 这是因为JavaScript早期是不允许使用class这种关键字来作为对象的属性，所以DOM规范使用了`className`；
  - 虽然现在JavaScript已经没有这样的限制，但是并不推荐，并且依然在使用`className`这个名称；

- **我们可以对className进行赋值，它会替换整个类中的字符串。**

  ```javascript
  var boxEl = document.querySelector(".box")
  boxEl.className = "why abc"
  ```

- **如果我们需要添加或者移除单个的class，那么可以使用classList属性。**

- **elem.classList 是一个特殊的对象：**

  - `elem.classList.add (class)` ：添加一个类。
  - `elem.classList.remove(class)`：添加/移除类。
  - `elem.classList.toggle(class)` ：如果类不存在就添加类，存在就移除它。
  - `elem.classList.contains(class)`：检查给定类，返回 true/false。

- **classList是`可迭代对象`，可以通过`for of`进行遍历。**



## 14. 元素的style属性

- **如果需要单独修改某一个CSS属性，那么可以通过style来操作：**

  - 对于 **多词（multi-word）属性**，使用 **驼峰式 camelCase**

    ```javascript
    boxEl.style.width = "100px"
    boxEl.style.height = "100px"
    boxEl.style.backgroundColor = "red"
    
    ```

- **如果我们将值设置为`空字符串`，那么会使用`CSS的默认样式`：**

  ```javascript
  boxEl.style.display = ""
  ```

- **多个样式的写法，我们需要使用`cssText属性`：**

  - 不推荐这种用法，因为它会替换整个字符串；

    ```javascript
    boxEl.style.cssText = `
            width: 100px;
            height: 100px;
            background-color: red'`
    ```



## 15. 元素style的读取 - getComputedStyle

- **如果我们需要读取样式：**

  - 对于 **内联样式**，是可以 **通过style.*的方式** 读取到的;
  - 对于 **style、css文件中的样式** ，是 **读取不到** 的；

- **这个时候，我们可以通过`getComputedStyle`的全局函数来实现：**

  ```javascript
  console.log(getComputedStyle(boxEl).width)
  console.log(getComputedStyle(boxEl).height)
  console.log(getComputedStyle(boxEl).backgroundColor)
  ```



## 16. 元素的增删改查

### 16.1 创建元素

- **前面我们使用过 document.write 方法写入一个元素：**

  - 这种方式写起来非常便捷，但是对于 **复杂的内容、元素关系拼接并不方便**；
  - 它是在早期没有DOM的时候使用的方案，目前依然被保留了下来;

- **那么目前我们想要插入一个元素，通常会按照如下步骤：**

  - **步骤一**：创建一个元素;
  - **步骤二**：插入元素到DOM的某一个位置；

- **创建元素：`document.createElement(tag)`**

  ```javascript
  var boxEl = document.querySelector(".box")
  var h2El = document.createElement("h2")
  h2El.innerHTML = "我是标题"
  h2El.classList.add("title")
  boxEl.append(h2El)
  ```

### 16.2 插入元素

- 插入元素的方式如下：
  - `node.append(...nodes or strings)` —— 在 node 末尾 插入节点或字符串，
  - `node.prepend(...nodes or strings)` —— 在 node 开头 插入节点或字符串，
  - `node.before(...nodes or strings)` —— 在 node 前面 插入节点或字符串，
  - `node.after(...nodes or strings)` —— 在 node 后面 插入节点或字符串，
  - `node.replaceWith(...nodes or strings)` —— 将 node 替换为给定的节点或字符串。

### 16.3 移除和克隆元素

- **移除元素我们可以调用元素本身的remove方法：**

  ```javascript
  setTimeout(() => {
  	h2El.remove()
  },2000)
  ```

- **如果我们想要复制一个现有的元素，可以通过cloneNode方法：**

  - 可以传入一个 **`Boolean`类型的值**，来决定 **是否是深度克隆**；

  - 深度克隆会克隆对应元素的子元素，否则不会；

    ```JavaScript
    var cloneBoxEl = boxEl.cloneNode(true)
    document.body.append(cloneBoxEl)
    ```

### 16.4 旧的元素操作方法

- `parentElem.appendChild(node)`：
  - 在parentElem的父元素最后位置添加一个子元素
- `parentElem.insertBefore(node, nextSibling)`：
  - 在parentElem的nextSibling前面插入一个子元素；
- `parentElem.replaceChild(node, oldChild)`：
  - 在parentElem中，新元素替换之前的oldChild元素；
- `parentElem.removeChild(node)`：
  - 在parentElem中，移除某一个元素；



## 17. 元素的大小、滚动

- `clientWidth`：contentWith+padding（不包含滚动条）
- `clientHeight`：contentHeight+padding
- `clientTop`：border-top的宽度
- `clientLeft`：border-left的宽度



- `offsetWidth`：元素完整的宽度
- `offsetHeight`：元素完整的高度
- `offsetLeft`：距离父元素的x
- `offsetHeight`：距离父元素的y



- `scrollHeight`：整个可滚动的区域高度
- `scrollTop`：滚动部分的高度



## 18. window的大小、滚动

- **window的width和height**	
  - `innerWidth`、`innerHeight`：获取window窗口的宽度和高度（包含滚动条）
  - `outerWidth`、`outerHeight`：获取window窗口的整个宽度和高度（包括调试工具、工具栏）
  - `documentElement.clientHeight`、`documentElement.clientWidth`：获取html的宽度和高度（不包含滚动条）
- **window的滚动位置：**
  - `scrollX`：X轴滚动的位置（别名pageXOffset）
  - `scrollY`：Y轴滚动的位置（别名pageYOffset）
- **也有提供对应的滚动方法：**
  - 方法 scrollBy(x,y)：将页面滚动至 相对于当前位置的 (x, y) 位置；
  - 方法 scrollTo(pageX,pageY)： 将页面滚动至 绝对坐标；



