# 一、邂逅jQuery、属性和DOM操作

## 1. 库(library)和框架(framework)的概念

- **随着JavaScript的普及，以及越来越多人使用JavaScript来构建网站和应用程序**
  - JavaScript社区认识到代码中存在**非常多相同的逻辑**是可复用的。
  - 因此社区就开始对这些**相同的逻辑的代码封装**到一个JavaScript文件中。
  - 这个封装好的JavaScript文件就可称为**JavaScript库或JavaScript框架**。
- **库(library)**
  - JavaScript库是一个**预先编写好并实现了一些特定功能的代码片段的集合**。
  -  一个库中会包含许多的**函数、变量等**，**可根据需求引入到项目中使用**。
  - 一些常见的库有jQuery、Day.js、Lodash和React等
- **框架（framework）**
  - JavaScript框架是一个**完整的工具集**，可帮助塑造和组织您的网站或应用程序。
  - **提供一个结构来构建整个应用程序**，开发人员可以在结构的规则内**更安全、更高效**地工作。
  - 一些更常见的框架有：Bootstrap、Angular、Vue、Next.js等。



## 2. jQuery优点与缺点

- **jQuery的优点**
  - 易于学习：相对于其它的前端框架，jQuery 更易于学习，它支持 JavaScript 的编码风格。
  - 少写多做（**Write less, do more**）
    - jQuery提供了**丰富的功能(DOM操作、过滤器、事件、动画、Ajax等)。**
    - 可以编写更少可读的代码来提高开发人员的工作效率。
  - **优秀的 API 文档**：jQuery 提供了优秀的在线 API 文档。
  - 跨浏览器支持：提供出色的**跨浏览器支持 (IE9+)**，无需编写额外代码。
- **jQuery的缺点：**
  - jQuery代码库一直在增长（自 jQuery 1.5 起超过 200KB）
  - 不支持**组件化**开发
  - jQuery 更适合DOM操作，当涉及到**开发复杂的项目时，jQuery能力有限**。



## 3. jQuery的安装

- **jQuery 本质是一个`JavaScript库`。**
  - 该库包含了：DOM操作、选择器、事件处理、动画和 Ajax 等核心功能。
  - 现在我们可以简单的理解它就**是一个JavaScript文件**。
  - 执行该文件中会给window对象添加一个jQuery函数（例如：**window.jQuery**）。
  - 接着我们就可以**调用jQuery函数**，或者**使用该函数上的类方法**。
- 下面我们来看看jQuery安装方式有哪些？
  - 方式一：在页面中，直接通过CDN的方式引入。
  - 方式二：下载jQuery的源文件，并在页面中手动引入。
  - 方式三：使用npm包管理工具安装到项目中



## 4. jQuery监听文档加载

- **jQuery监听document的DOMContentLoaded事件的四种方案**
  - **\$( document ).ready( handler )** ： deprecated
  - **\$( "document" ).ready( handler )** ： deprecated
  - **\$().ready( handler )** ：deprecated
  - `\$( handler ) `：推荐用这种写法，其它可以使用但是不推荐

- **监听window的load事件，即网页所有资源（外部连接，图片等）加载完**

  - .load( handler ) ： This API has been **removed in jQuery 3.0**

  - \$(window).on('load', handler) : 推荐写法

    ```javascript
    $(window).on("load", function() {
      console.log("资源加载完毕")
    })
    ```

  

  ## 5. 认识jQuery函数

- **jQuery是一个工厂函数( 别名$ )，调用该函数，会根据传入参数类型来返回匹配到元素的集合，一般把该集合称为jQuery对象。**
  - 如果传入假值：返回一个**空的集合**。
  - 如果传入选择器：返回**在在documnet中所匹配到元素的集合**。
  - 如果传入元素：返回包含**该元素的集合**。
    如果传入HTML字符串，返回包含新**创建元素的集合**。
  - 如果传入回调函数：返回的是**包含document元素集合, 并且当文档加载完成会回调该函数**。
  - 因为函数也是对象，所以该函数还包含了很多已封装好的方法。如：**jQuery.noConflict、jQuery.ready**等
- **jQuery函数的参数：**
  - jQuery( selector [, context ] ) ：selector 是字符串选择器；context 是匹配元素时的上下文，默认值为 document
    - **jQuery( selector [, context ] )**
    - **jQuery( element )**
    - **jQuery( elementArray )**
    - jQuery()
  - jQuery( html [, ownerDocument ] )
    - jQuery( html [, ownerDocument ] )
    - **jQuery( html )**
- **jQuery( callback )**



## 5. 认识jQuery对象

- **jQuery对象是一个包含所`匹配到元素的集合`，该集合是`类数组(array-like)对象`。**
  - jQuery对象是通过**调用jQuery函数来创建的**。
  - jQuery对象中**会包含N（>=0）个匹配到的元素**。
  - jQuery 对象**原型中包含了很多已封装好的方法**。例如：DOM操作、事件处理、动画等方法。
- 下面我们通过调用jQuery函数来新建一个jQuery对象，例如：
  - \$() 新建一个空的jQuery对象
  - \$(document) 新建一个包含document元素的jQuery对象
  - \$('选择器') 新建一个包含所选中DOM元素的jQuery对象



## 6. jQuery对象 与 DOM Element的区别

- **jQuery对象与DOM Element的区别**

  - 获取的方式不同

    - DOM Element 是通过原生方式获取，例如：document.querySelector()
    - jQuery对象是通过调用jQuery函数获取，例如：jQuery(' ')

  - jQuery对象是一个**类数组对象**，该对象**中会包含所选中的DOM Element的集合**。

  - jQuery对象的原型上扩展非常多实用的方法，DOM Element 则是W3C规范中定义的属性和方法。

    ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112232417.png)



## 7. jQuery对象 与 DOM Element 的转换

- **jQuery对象转成DOM Element**
  - .get(index)： 获取 jQuery 对象中某个索引中的 DOM 元素。
    - index一个从零开始的整数，指示要检索的元素。
    - 如果index超出范围（小于负数元素或等于或大于元素数），则返回undefined。
  - .get() : 没有参数，将返回jQuery对象中所有DOM元素的数组。
- **DOM Element转成jQuery对象**
  - 调用jQuery函数或者\$函数
  - 例如：​\$(元素)



## 8. jQuery的选择器(Selectors)

- **jQuery函数支持大部分的CSS选择器，语法：jQuery（'字符串格式的选择器'）**

  1. 通用选择器（*）

  2. **基本选择器**（id, class, 元素）

  3. **属性选择器**（ [attr] , [atrr=”value ”] ）

  4. 后代选择器（div > span, div span）

  5. 兄弟选择器（div + span , div ~ span）

  6. 交集选择器（div.container）

  7. **伪类选择器**（:nth-child()，:nth-of-type()，:not()， 但不支持状态伪类 :hover, :focus...）

  8. **内容选择器**（:empty，:has(selector)）,

     - **empty**指选中的元素没有子元素或文本； 

     - **has**指选中的元素是否存在某个子元素

  9. **可见选择器**（:visible, :hidden）

  10. **jQuery扩展选择器**：（:eq(), :odd, :even, :first, :last ）



## 9. jQuery过滤器(Filtering) API

- **jQuery过滤器API ( 即jQuery原型上的方法 )**
  1. **eq(index)**: 从匹配元素的集合中，取索引处的元素， eq全称(equal 等于)，返回jQuery对象。
  2. **first()** : 从匹配元素的集合中，取第一个元素，返回jQuery对象。
  3. **last()**: 从匹配元素的集合中，取最后一个元素，返回jQuery对象。
  4. **not(selector)**: 从匹配元素的集合中，删除匹配的元素，返回jQuery对象。
  5. **filter(selector)**: 从匹配元素的集合中，过滤出匹配的元素，返回jQuery对象。
  6. **find(selector)**: 从匹配元素集合中，**找到匹配的后代元素**，返回jQuery对象。
  7. is(selector|element| . ): 根据选择器、元素等检查当前匹配到元素的集合。集合中至少有一个与给定参数匹配则返回true。
  8. odd() :将匹配到元素的集合减少为集合中的奇数，从零开始编号，返回jQuery对象。
  9. even()：将匹配到元素的集合减少到集合中的偶数，从零开始编号，返回jQuery对象。
  10. 支持链式调用



## 10. jQuery对文本的操作

- **.text()、.text(text)**
  - 获取**匹配到元素集合中每个元素**组合的**文本内容**，包括它们的后代，或设置匹配到元素的文本内容。
  - 相当与原生元素的textContent属性。
- **.html()、html(htmlString)**
  - 获取**匹配到元素集合中第一个元素**的**HTML内容**，包括它们的后代，或设置每个匹配元素的 HTML 内容。
  - 相当与原生元素的**innerHTML**属性。
- **.val()、.val(value)**
  - 获取匹配到元素集合中**第一个元素**的当前值 或 设置每个匹配到元素的值。
  - 该.val()方法主要用于获取input,select和等**表单元素的值**。
  - 相当与获取原生元素的**value**属性。



## 11. jQuery对CSS的操作

- **.width()、.width(value)**
  - 获取匹配到元素集合中**第一个元素的宽度**或设置每个匹配到元素的宽度。
- **.height()、height(value)**
  - 获取匹配到元素集合中**第一个元素的高度**或设置每个匹配到元素的高度。
- **.css(propertyName)、.css(propertyNames)**
  - 获取匹配到元素集中**第一个元素样式属性的值**，底层是调用**getComputedStyle**函数获取。
  - .css( "width" )和.width()之间的区别:
    - width()返回一个无单位的像素值（例如，400），而css()返回一个具有完整单位的值（例如，400px）
- **.css(propertyName, value)、.css(properties)**
  - 为每个匹配到元素**设置一个 或 多个 CSS 属性**。
  - 调用css方法添加样式会直接把样式添加到元素的**style属性**上。



## 12. Class属性的操作

- **.addClass(className)、.addClass(classNames)、.addClass(funcntion)**
  - 将指定的类添加到**匹配元素集合中的每个元素**，每次都是追加class。
  - 底层调用的是setAttribute( "class", finalValue )方法添加class。
- **.hasClass(className)**
  - 是否给**任意匹配到的元素**分配了该类。
  - 底层是通过getAttribute( "class" ).indexOf()来判断是否存在。
- .removeClass()、.removeClass(className)、.removeClass(classNames)、.removeClass(function)
  - 给匹配元素集中的**每个元素删除单个类、多个类或所有类**。
  - 底层调用的是setAttribute( "class", finalValue )方法。
- .toggleClass()、.toggleClass(className[,state])、.toggleClass(classNames[,state])
  - 根据类的存在或状态参数的值，在匹配到元素的集合中，给**每个元素添加或删除一个或多个类**。



## 13. attributes和property属性的操作

- **.attr(attributeName)**
  - 获取匹配元素集和中**第一个元素**的属性值，底层调用了原生的 getAttribute() API
- **.attr(attributeName, value)、.attr(attributes)**
  - 为每个匹配元素**设置一个或多个属性**，底层调用了原生的 setAttribute() API
- **.removeAttr(attributeName)**
  - 在匹配到元素的集中，给**每个元素删除一个属性**。
  - 底层调用了原生的 removeAttribute() API
- **.prop(propertyName)**
  - 获取匹配到元素集合中**第一个元素**的属性值
- **.prop(propertyName，value)、.prop(propertys)**
  - 为每个匹配元素设置一个或多个属性。
- **removeProp(propertyName)**
  - 删除匹配元素集的属性,( 只能删除**用户自定义添加的prop**，不能删除元素本身的属性 )。



## 14. 自定义data-xx属性的操作

- **data()、.data(key)**
  - 获取匹配元素集中**第一个元素**的自定义属性的值
- **.data(key, value) 、.data(obj)**
  - 为每个匹配元素**设置一个或多个自定义属性**
- **.removeData([name])**
  - 会删除data()函数给匹配元素属性添加的数据 和 data()函数绑定的自定义属性。
  - data函数添加的属性会被移除，但是如果属性同时在签上定义了就不会被移除。



## 15. jQuery的DOM操作

### 15.1 插入内容

- **.append(content [, content] ) 、append( function )**
  - 将参数的内容插入到匹配元素集中每个元素的**末尾**。
    - content 的类型: DOM element, text node, array of elements and text nodes, HTML string, or jQuery object
- **.prepend(content [, content] ) 、prepend( function )**
  - 将参数的内容插入到匹配元素集中每个元素的**开头**。
- **.after(content [, content] ) 、after( function )**
  - 在匹配元素集中的每个元素**之后**，插入由参数指定的内容。
- **.before(content [, content])、before( function )**
  - 在匹配元素集中的每个元素**之前**，插入由参数指定的内容。

### 15.2 插入内容

- **.appendTo(target)**
  - 将匹配元素集中的每个元素插入到**目标元素的末尾**。
    - target的类型：A selector, element, HTML string, array of elements, or jQuery object。
- **.prependTo(target)**
  - 将匹配元素集中的每个元素插入到**目标元素的开头**。
- **.insertAfter(target)**
  - 在**目标元素之后**，插入匹配元素集中的每个元素。
- **.insertBefore(target)**
  - 在**目标元素之前**，插入匹配元素集中的每个元素。



## 16. jQuery的DOM操作-移除/替换/克隆

- **.empty(): 删除匹配元素集的`所有子节点，自身不会删除`。**
- **.remove( ) 、.remove( [selector] )**
  - 删除匹配的**元素集，自身也会删除**。
    - selector参数：字符串类型选择器。**筛选匹配元素集的元素来删除**
- **.replaceAll(target)**: 用匹配到的元素集替换每个目标元素。
- **.replaceWidth(newContent)、.replaceWidth( function )**
  - 用新内容替换匹配元素集中的每个元素，并返回被移除的元素集。
    - newConten参数的类型： HTML string, DOM element, array of DOM elements, or jQuery object
- **.clone()、.clone( withDataAndEvents )**
  - 对匹配的元素集执行**深度复制**，底层是调用了**elem.cloneNode( true )**来复制元素。
    - withDataAndEvents参数 : 布尔值，是否**复制该元素**的事件处理程序和数据，默认值为false。



