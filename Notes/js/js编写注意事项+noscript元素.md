# JavaScript基础语法

## 1. JavaScript的编写方式

- **位置一**：HTML代码行内（不推荐）

- **位置二**：script标签中

- **位置三**：外部的script文件

  `<script src="js文件路径"></script>`



## 2. noscript 元素

- **<noscript>元素**被用于给不支持 JavaScript 的浏览器提供替代内容；

- **下面的情况下, 浏览器将显示包含在<noscript>中的内容:**

  - 浏览器不支持脚本;

  - 浏览器对脚本的支持被关闭。

    ```html
    <body>
      <noscript>
          <!-- 浏览器不支持脚本 -->
          <!-- 浏览器对脚本的支持被关闭 -->
      	<p>您的浏览器不支持或者关闭运行JavaScript</p>
      </noscript>
    </body>
    ```



## 3. JavaScript编写的注意事项

- **注意一: script元素不能写成单标签**
- **注意二: 省略type属性**
  - 在以前的代码中，<script> 标签中会使用 type="text/JavaScript";
  - 现在可不写这个代码了，因为JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言；
- **注意三: 加载顺序**
  - JavaScript默认遵循 **HTML文档的加载顺序**，即 **自上而下的加载顺序**；
  - 推荐将JavaScript代码和 **编写位置放在body子元素的最后一行**；
- **注意四: JavaScript代码严格区分大小写**



