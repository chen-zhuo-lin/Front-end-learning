# 一、JavaScript基础语法

## 1.1 JavaScript的编写方式

- 位置一：HTML代码行内（不推荐）

- 位置二：script标签中

- 位置三：外部的script文件

  `<script src="js文件路径"></script>`



## 1.2 noscript 元素

```html
<body>
  <noscript>
      <!-- 浏览器不支持脚本 -->
      <!-- 浏览器对脚本的支持被关闭 -->
  	<p>您的浏览器不支持或者关闭运行JavaScript</p>
  </noscript>
</body>
```



## 1.3 JavaScript编写的注意事项

- 注意一: script元素不能写成单标签
- 注意二: 省略type属性
  - 在以前的代码中，<script> 标签中会使用 type="text/JavaScript";
  - 现在可不写这个代码了，因为JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言；
- 注意三: 加载顺序
  - JavaScript默认遵循HTML文档的加载顺序，即自上而下的加载顺序；
  - 推荐将JavaScript代码和编写位置放在body子元素的最后一行；
- 注意四: JavaScript代码严格区分大小写



# 二、JavaScript的数据类型

## 2.1 typeof操作符

- 对一个值使用 typeof 操作符会返回下列字符串之一:
  - "undefined"表示值未定义;
  - "boolean"表示值为布尔值;
  - "string"表示值为字符串;
  - "number"表示值为数值;
  - "object"表示值为对象(而不是函数)或 null;
  - "function"表示值为函数;
  - "symbol"表示值为符号；



## 2.2 Number类型

- number 类型代表整数和浮点数。

  ```javascript
  var age = 10
  var height = 1.88
  ```

- 常见的操作

  ```javascript
  var result1 = 10 * 2
  var result2 = 10 / 3
  ```

- Infinity：代表数学概念中的 无穷大 ∞，也可以表示-Infinity；

  ```javascript
  var result = 1 / 0
  ```

- NaN：NaN 代表一个计算错误，它是一个错误的操作所得到的结果；

  ```javascript
  var result = '111' * 10
  ```

- 十进制（掌握）、十六进制、二进制、八进制（了解）

  ```javascript
  // 1.十进制
  var num1 = 111
  // 2.十六进制
  var num2 = 0x111
  // 3.八进制
  var num3 = 0o111
  // 4.二进制
  var num4 = 0b111
  ```

- 数字表示的范围：

  - 最小正数值：`Number.MIN_VALUE`，这个值为： 5e-324，小于这个的数字会被转化为0
  - 最大正数值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308
  - `Number.MAX_SAFE_INTEGER`：JavaScript 中最大的安全整数 (2^53 - 1)；
  - `Number.MIN_SAFE_INTEGER`：JavaScript 中最小的安全整数 -(2^53 - 1)

- isNaN

  - 用于判断是否不是一个数字。不是数字返回true，是数字返回false。

- Number实例方法:

  - 方法一：`toString(base)`，将数字转成字符串，并且按照base进制进行转化
    - base 的范围可以从 2 到 36，默认情况下是 10；
  - 方法二：`toFixed(digits)`，格式化一个数字，保留digits位的小数；
    - digits的范围是0到20（包含）之间；

- Number类方法:

  - 方法一：`Number.parseInt(string[, radix])`，将字符串解析成整数，也有对应的全局方法parseInt；
  - 方法二：`Number. parseFloat(string)`，将字符串解析成浮点数，也有对应的全局方法parseFloat；



## 2.3 String类型

- 三种包含字符串的方式

  ```JavaScript
  var name = '陈卓林'
  var address = "广州市"
  // ES6语法
  var description = `${name}是${address}的人`
  ```

- 字符串拼接，通过+运算符

  ```JavaScript
  var str1 = 'hello'
  var str2 = 'world'
  var newStr = str1 + str2
  ```

- 获取字符串长度

  ```javascript
  console.log(newStr.length)
  ```

- 访问字符串的字符

  - 使用方法一：通过字符串的索引` str[0]`
  - 使用方法二：通过`str.charAt(pos)`方法
  - 它们的区别是索引的方式没有找到会返回`undefined`，而`charAt`没有找到会返回空字符串；

- 修改字符串

  - toLowerCase()：将所有的字符转成小写；

  - toUpperCase() ：将所有的字符转成大写；

    ```JavaScript
    var message = 'Hello'
    message.toLowerCase() // hello
    message.toUpperCase() // HELLO
    ```

- 查找字符串位置  `str.indexOf(search [, fromIndex])`

  - 从fromIndex开始，查找searchValue的索引；
  - 如果没有找到，那么返回-1；
  - 有一个相似的方法，叫lastIndexOf，从最后开始查找（用的较少）

- 是否包含字符串  `str.includes(searchString[, position])`

  - 从position位置开始查找searchString， 根据情况返回 true 或 false
  - 这是ES6新增的方法

- 以xxx开头  `str.startsWith(searchString[, position])`

  - 从position位置开始，判断字符串是否以searchString开头；

  - 这是ES6新增的方法，下面的方法也一样；

    ```javascript
    message.startsWith("czl")
    ```

- 以xxx结尾  `str.endsWith(searchString[, length])`

  - 在length长度内，判断字符串是否以searchString结尾；

    ```javascript
    message.endsWith("czl")
    ```

- 替换字符串  `str.replace(regexp|substr, newstr, newSubStr|function)`
  - 查找到对应的字符串，并且使用新的字符串进行替代；

  - 这里也可以传入一个正则表达式来查找，也可以传入一个函数来替换；

    ```javascript
    message.replace("czl", "kobe")
    ```

- 获取子字符串

  - 开发中推荐使用slice方法

  |         方法          |              选择方式……               |     负值参数      |
  | :-------------------: | :-----------------------------------: | :---------------: |
  |   slice(start, end)   |      从 start 到 end（不含 end）      |       允许        |
  | substring(start, end) |      从 start 到 end（不含 end）      |    负值代表 0     |
  | substr(start, length) | 从 start 开始获取长为 length 的字符串 | 允许 start 为负数 |

- 拼接字符串  `str.concat(str2,[, ...strN])`

  ```javascript
  'hello'.concat('world',['你好'])
  ```

- 删除首尾空格  `str.trim()`

- 字符串分割  `str.split({separator,[, limit]})`

  - separator：以什么字符串进行分割，也可以是一个正则表达式；

  - limit：限制返回片段的数量；

    ```javascript
    var message = "my name is czl"
    console.log(message.split(" ",4)) // ["my","name","is","czl"]
    ```

    

## 2.4字符串中的转义字符

| 转义字符 | 表示符号 |
| -------- | -------- |
| \\'      | 单引号   |
| \\"      | 双引号   |
| \\       | 反斜杠   |
| \\n      | 换行符   |
| \\r      | 回车符   |
| \\t      | 制表符   |
| \\b      | 退格符   |



## 2.5 Boolean类型

- Boolean 类型仅包含两个值：true 和 false。

  ```javascript
  var isLogin = true
  var flag = true
  var result = 1 === 1
  ```



## 2.6 Undefined类型

- 如果我们声明一个变量，但是没有对其进行初始化时，它默认就是undefined；

  ```javascript
  var message 
  console.log(message) / undefined
  console.log(message === undefined) // true
  ```

- 两个注意事项：

  - 注意一：最好在变量定义的时候进行初始化，而不只是声明一个变量；
  - 注意二：不要显示的将一个变量赋值为undefined
    - 如果变量刚开始什么都没有，我们可以初始化为0、空字符串、null等值；



## 2.7 Object类型

- Object 类型是一个特殊的类型，我们通常把它称为引用类型或者复杂类型；

  - 其他的数据类型我们通常称之为 “原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）；

  - Object往往可以表示一组数据，是其他数据的一个集合；

  - 在JavaScript中我们可以使用 花括号{} 的方式来表示一个对象；

    ```JavaScript
    var info = {
      name:'why',
      age: 18,
      height: 1.88
    }
    ```



## 2.8 Null类型

- null类型通常用来表示一个对象为空，所以通常我们在给一个对象进行初始化时，会赋值为null；

  ```javascript
  var obj = null
  console.log(typeof null) // object
  obj = {
    name: '陈卓林',
    age: 18
  }
  ```

- null和undefined的关系：

  - undefined通常只有在一个变量声明但是未初始化时，它的默认值是undefined才会用到；
  - 不推荐直接给一个变量赋值为undefined
  - null值非常常用，当一个变量准备保存一个对象，但是这个对象不确定时，我们可以先赋值为null；



## 2.9 字符串String的转换

- 转换方式一：隐式转换
  - 一个字符串和另一个字符串进行+操作；
  - 如果+运算符左右两边有一个是字符串，那么另一边会自动转换成字符串类型进行拼接；
  - 某些函数的执行也会自动将参数转为字符串类型，比如`console.log`函数；
- 转换方式二：显式转换
  - 调用String()函数；
  - 调用toString()方法



## 2.10 数字类型Number的转换

- 转换方式一：隐式转换

  - 在算数运算中，通常会将其他类型转换成数字类型来进行运算；
  - 但是如果是+运算，并且其中一边有字符串，那么还是按照字符串来连接的；

- 转换方式二：显式转换

  - 调用Number()函数；

- 其他类型转换数字的规则：

  |      值       | 转换后的值                                                   |
  | :-----------: | :----------------------------------------------------------- |
  |   undefined   | NaN                                                          |
  |     null      | 0                                                            |
  | true 和 false | 1 and 0                                                      |
  |    string     | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果<br>为 0。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 NaN |



## 2.11 布尔类型Boolean的转换

- 布尔（boolean）类型转换是最简单的

- 它发生在逻辑运算中，但是也可以通过调用 Boolean(value) 显式地进行转换。

- 转换规则如下：

  - 直观上为“空”的值（如 0、空字符串、null、undefined 和 NaN）将变为 false

  - 其他值变成 true。

    | 值                          | 转化后 |
    | :-------------------------- | ------ |
    | 0, null, undefined, NaN, "" | false  |
    | 其他值                      | true   |

- 注意：包含 0 的字符串 "0" 是 true



# 三、JavaScript常用运算符

## 3.1 算术运算符

| 运算符 |  运算规则  |    范例    |  结果  |
| :----: | :--------: | :--------: | :----: |
|   +    |    加法    |   2 + 3    |   5    |
|   +    | 连接字符串 | ‘中’+ ‘国’ | ‘中国’ |
|   -    |    减法    |   2 - 3    |   -1   |
|   *    |    乘法    |   2 * 3    |   6    |
|   /    |    除法    |   5 / 2    |  2.5   |
|   %    |   取余数   |   5 % 2    |   1    |
|   **   |  幂 (ES7)  |   2 ** 3   |   8    |



## 3.2 赋值运算符

- = 是一个运算符，而不是一个有着“魔法”作用的语言结构。

  - 语句 x = value 将值 value 写入 x 然后返回 x。

- 链式赋值（Chaining assignments）

  - 链式赋值从右到左进行计算；
  - 首先，对最右边的表达式 2 + 2 求值，然后将其赋给左边的变量：c、b 和 a。
  - 最后，所有的变量共享一个值。

  ```javascript
  let a, b, c;
  a = b = c = 2 + 2;
  console.log(a, b, c); // 4
  ```



## 3.3 ++和- -的位置

- 运算符 ++ 和 -- 可以置于变量前，也可以置于变量后
  - 当运算符置于变量后，被称为“后置形式”（postfix form）。
  - 运算符置于变量前，被称为“前置形式”（prefix form）。
  - 前置形式返回一个新的值，但后置返回原来的值；



## 3.4 比较运算符

| 运算符 | 运算规则 |  范例  | 结果  |
| :----: | :------: | :----: | :---: |
|   ==   |   相等   | 4 == 3 | false |
|   !=   |  不等于  | 4 != 3 | true  |
|   >    |   大于   | 4 > 3  | true  |
|   <    |   小于   | 4 < 3  | false |
|   >=   | 小于等于 | 4 <= 3 | false |
|   <=   | 大于等于 | 4 >= 3 | true  |



## 3.5 === 和 == 的区别

- 普通的相等性检查 == 存在一个问题，它不能区分出 0 和 false，或者空字符串和 false这类运算：
  - 这是因为在比较不同类型的值时，处于判断符号 == 两侧的值会先被转化为数字；
  - 空字符串和 false 也是如此，转化后它们都为数字 0；
- 如果我们需要区分 0 和 false，该怎么办？
  - 严格相等运算符 === 在进行比较时不会做任何的类型转换；
  - 换句话说，如果 a 和 b 属于不同的数据类型，那么 a === b 不会做任何的类型转换而立刻返回 false；



## 3.6 逻辑运算符

| 运算符 |   运算规则   |     范例      | 结果  |
| :----: | :----------: | :-----------: | :---: |
|   &&   | 与: 同时为真 | false && True | false |
|  \|\|  | 或: 一个为真 | false or frue | true  |
|   !    |   非: 取反   |    !false     | true  |



## 3.7 逻辑或的本质

- ||（或）两个竖线符号表示“或”运算符（也称为短路或）：
  - 从左到右依次计算操作数。
  - 处理每一个操作数时，都将其转化为布尔值（Boolean）；
  - 如果结果是 true，就停止计算，返回这个操作数的初始值。
  - 如果所有的操作数都被计算过（也就是，转换结果都是 false），则返回最后一个操作数。
- 注意：返回的值是操作数的初始形式，不会转换为Boolean类型。



## 3.8 逻辑与的本质

- &&（或）两个竖线符号表示“与”运算符（也称为短路与）：
  - 从左到右依次计算操作数。
  - 在处理每一个操作数时，都将其转化为布尔值（Boolean）；
  - 如果结果是 false，就停止计算，并返回这个操作数的初始值（一般不需要获取到初始值）；
  - 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。



## 3.9 !（非）

- 逻辑非运算符接受一个参数，并按如下运算：

  - 步骤一：将操作数转化为布尔类型：true/false；
  - 步骤二：返回相反的值；

- 两个非运算 !! 有时候用来将某个值转化为布尔类型：

  ```javascript
  var num = 100
  var result = !!num
  ```



# 四、JavaScript分支语句

## 4.1 程序的执行顺序

- 在程序开发中，程序有三种不同的执行方式：
  - 顺序 —— 从上向下，顺序执行代码
  - 分支 —— 根据条件判断，决定执行代码的 分支
  - 循环 —— 让 特定代码 重复 执行



## 4.2 代码块的理解

- 代码块是多行执行代码的集合，通过一个花括号{}放到了一起。

- 代码块有自己的作用域

  ```javascript
  {
    var name = '陈卓林'
    var message = 'my name is ' + name
  }
  ```



## 4.3 什么是分支结构？

- 分支结构
  - 分支结构的代码就是让我们根据条件来决定代码的执行。
  - 分支结构的语句被称为判断结构或者选择结构。
- JavaScript中常见的分支结构有：
  - if分支结构
  - switch分支结构



## 4.4 if语句的细节补充

- 补充一：如果代码块中只有一行代码，那么{}可以省略：
- 补充二：if (…) 语句会计算圆括号内的表达式，并将计算结果转换为布尔型（Boolean）。
  - 转换规则和Boolean函数的规则一致；
  - 数字 0、空字符串 “”、null、undefined 和 NaN 都会被转换成 false。
    - 因为它们被称为“假值（falsy）”；
  - 其他值被转换为 true，所以它们被称为“真值（truthy）”；



## 4.5 三元运算符

- 条件运算符：’?’

  - 这个运算符通过问号 ? 表示；
  - 有时它被称为三元运算符，被称为“三元”是因为该运算符中有三个操作数（运算元）；
  - 实际上它是 JavaScript 中唯一一个有这么多操作数的运算符；

- 使用格式如下:

  `var result = condition ? value1 : value2`

- 案例一： m=20，n=30，比较两个数字的大小，获取较大的那个数字

  ```javascript
  var m = 20;
  var n = 30;
  var result = m > n ? m : n
  ```



## 4.6 switch语句的细节补充

- case穿透问题：
  - 一条case语句结束后，会自动执行下一个case的语句；
  - 这种现象被称之为case穿透；
- break关键字
  - 通过在每个case的代码块后添加break关键字来解决这个问题；
- 注意事项：这里的相等是严格相等。
  - 被比较的值必须是相同的类型才能进行匹配。



# 五、JavaScript函数

## 5.1 函数的返回值

- 使用return关键字来返回结果；
- 一旦在函数中执行return操作，那么当前函数会终止；
- 如果函数中没有使用 return语句 ，那么函数有默认的返回值：undefined；
- 如果函数使用 return语句，但是return后面没有任何值，那么函数的返回值也是：undefined；



## 5.2 arguments参数

- 默认情况下，arguments对象是所有（非箭头）函数中都可用的局部变量；
- 该对象中存放着所有的调用者传入的参数，从0位置开始，依次存放；
- arguments变量的类型是一个object类型（ array-like ），不是一个数组，但是和数组的用法看起来很相似；
- 如果调用者传入的参数多余函数接收的参数，可以通过arguments去获取所有的参数；



## 5.3 递归函数

- 封装函数，求n的m次方

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

- 在JavaScript（ES5之前）中没有块级作用域的概念，但是函数可以定义自己的作用域。
  - 作用域（Scope）表示一些标识符的作用有效范围（所以也有被翻译为有效范围的）；
  - 函数的作用域表示在函数内部定义的变量，只有在函数内部可以被访问到；
- 外部变量和局部变量的概念：
  - 定义在函数内部的变量，被称之为局部变量（Local Variables）。
  - 定义在函数外部的变量，被称之为外部变量（Outer Variables）。
- 什么是全局变量？
  - 在函数之外声明的变量（在script中声明的），称之为全局变量。
  - 全局变量在任何函数中都是可见的。
  - 通过var声明的全局变量会在window对象上添加一个属性（了解）；
- 在函数中，访问变量的顺序是什么呢？
  - 优先访问自己函数中的变量，没有找到时，在外部中访问。



## 5.5 函数声明 vs 函数表达式

- 首先，语法不同：
  - 函数声明：在主代码流中声明为单独的语句的函数。
  - 函数表达式：在一个表达式中或另一个语法结构中创建的函数。
- 其次，JavaScript创建函数的时机是不同的：
  - 函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。
  - 在函数声明被定义之前，它就可以被调用



## 5.6 回调函数（Callback Function）

- 既然函数可以作为一个值相互赋值，那么也可以传递给另外一个函数。

- 高阶函数必须至少满足两个条件之一：

  - 接受一个或多个函数作为输入；
  - 输出一个函数；

- 匿名（anonymous）函数的理解：

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

- 一个函数定义完后被立即执行；

  - 第一部分是定义了一个匿名函数，这个函数有自己独立的作用域。

  - 第二部分是后面的（），表示这个函数被执行了

    ```JavaScript
    (function(){
      console.log("立即执行函数")
    })()
    ```

- 这个东西有什么用？ES5

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



# 六、JavaScript的面向对象

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

- 对象的遍历（迭代）：表示获取对象中所有的属性和方法。

  - Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组；

- 遍历方式一：普通for循环

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

- 遍历方式二：for in 遍历方法

  ```javascript
  for(var key in info){
    var value = info[key]
  }
  ```



## 6.3 栈内存和堆内存

- 原始类型占据的空间是在栈内存中分配的；
  - 原始类型的保存方式：在变量中保存的是值本身，所以原始类型也被称之为值类型
- 对象类型占据的空间是在堆内存中分配的；
  - 对象类型的保存方式：在变量中保存的是对象的“引用”，所以对象类型也被称之为引用类型；



## 6.4 this指向什么？

- 在全局环境下面，this指向window；

- 通过对象调用，this指向调用的对象；

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

- 工厂模式其实是一种常见的设计模式；

- 工厂函数的缺陷：

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

- JavaScript中的构造函数是怎么样的？
  - 构造函数也是一个普通的函数，从表现形式来说，和千千万万个普通的函数没有任何区别；
  - 那么如果这么一个普通的函数被使用new操作符来调用了，那么这个函数就称之为是一个构造函数；
- 如果一个函数被使用new操作符调用了，那么它会执行如下操作：
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



# 七、JavaScript的内置类

## 7.1 包装类型的使用过程

- 默认情况，当我们调用一个原始类型的属性或者方法时，会进行如下操作：
  1. 根据原始值，创建一个原始类型对应的包装类型对象；
  2. 调用对应的属性或者方法，返回一个新的值；
  3. 创建的包装类对象被销毁；
  4. 通常JavaScript引擎会进行很多的优化，它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用。
- 注意事项：null、undefined没有任何的方法，也没有对应的“对象包装类”；



## 7.2 Math对象

- Math常见的属性：
  - Math.PI：圆周率，约等于 3.14159；
- Math常见的方法：
  - `Math.floor`：向下舍入取整
  - `Math.ceil`：向上舍入取整
  - `Math.round`: 四舍五入取整
  - `Math.random`：生成0~1的随机数（包含0，不包含1）
  - `Math.pow(x, y)`：返回x的y次幂



## 7.3 Array数组

- 访问数组中的元素：

  - 通过中括号[]访问
  - arr.at(i)：
    - 如果 i >= 0，则与 arr[i] 完全相同。
    - 对于 i 为负数的情况，它则从数组的尾部向前数。

  ```javascript
  const a = arr[0]
  const b = arr.at(-1)
  ```

- 修改数组中的元素

  ```javascript
  arr[0] = "czl"
  ```

- 在数组的尾端添加或删除元素：

  - `push `在末端添加元素

  - `pop `从末端取出一个元素.

    ```javascript
    arr.push("abc","dhs")
    arr.pop()
    ```

- 在数组的首端添加或删除元素

  - `shift `取出队列首端的一个元素，整个数组元素向前前移动；

  - `unshift `在首端添加元素，整个其他数组元素向后移动；

    ```javascript
    arr.unshift("curry")
    arr.shift()
    ```

  -  `push/pop` 方法运行的比较快，而 shift/unshift 比较慢。

- `arr.splice 方法`

  - 它可以做所有事情：添加，删除和替换元素。

  - 语法：`array.splice(start[, delectCount[, item1[, item2[, ...]]]])`

    - 从start位置开始，处理数组中的元素；
    - deleteCount：要删除元素的个数，如果为0或者负数表示不删除；
    - item1, item2, ...：在添加元素时，需要添加的元素

    ```javascript
    // 删除一个元素
    arr.aplice(1,1)
    // 新增两个元素
    arr.splice(1,0,'a','b')
    // 替换两个元素
    arr.splice(1,2,'c','d')
    ```

  - 注意：这个方法会修改原数组

- `length属性`：

  - 用于获取数组的长度
  - 当我们修改数组的时候，length 属性会自动更新。
  - `length` 属性是可写的
  - 所以，清空数组最简单的方法就是：arr.length = 0。

- 数组的遍历

  - 普通for循环遍历：

    ```JavaScript
    for(var i =0 ;i < arr.length;i++){}
    ```

  - for..in 遍历，获取到索引值：

    ```javascript
    for(var index in arr){}
    ```

  - for..of 遍历，获取到每一个元素

    ```javascript
    for(var item of arr){}
    ```

- `arr.slice` 方法：用于对数组进行截取  `arr.slice(begin, end)`

  - 包含bigin元素，但是不包含end元素；

- `arr.concat`方法：创建一个新数组，其中包含来自于其他数组和其他项的值

  ```javascript
  var newArr = arr.concat(['abc'],"nba")
  ```

- `arr.join`方法： 将一个数组的所有元素连接成一个字符串并返回这个字符串。

  ```javascript
  var arr = [1,2,3,4,5]
  var str = arr.join('0') // 1020304050
  ```

- `arr.indexOf`方法： 查找某个元素的索引  `arr.indexOf(searchElement,fromIndex)`

  - 从fromIndex开始查找，如果找到返回对应的索引，没有找到返回-1；
  - 也有对应的从最后位置开始查找的 lastIndexOf 方法

- `arr.includes`方法：判断数组是否包含某个元素  `arr.includes(valueToFind, fromIndex)`

  - 从索引 from 开始搜索 item，如果找到则返回 true（如果没找到，则返回 false）

- `find `和 `findIndex `直接查找元素或者元素的索引（ES6之后新增的语法）

  ```javascript
  var student = [{
    id:100,
    name:'a'
  },{
    id:100,
    name:'b'
  }]
  
  var stu = student.find((item,index,arr) => {
    return item.id === 100
  })
  ```

- `arr.sort(compareFunction(a,b))`方法也是一个高阶函数，用于对数组进行排序，并且生成一个排序后的新数组

  - 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 前面；

  - 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变；

  - 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 前面；

  - 也就是说，谁小谁排在前面；

    ```javascript
    var arr = [1,2,43,24,53,53]
    var newArr = arr.sort((item1,item2)=>{
      return item1 - item2
    })
    ```

- `reverse()` 方法将数组中元素的位置颠倒，并返回该数组。

- `arr.forEach` 

  - 遍历数组，并且让数组中每一个元素都执行一次对应的方法；

  ```javascript
  arr.forEach((item,index,arr)=>{})
  ```

- `arr.map`

  - map() 方法创建一个新数组；
  - 这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成；

  ```javascript
  const newArr = arr.map((item,index,arr)=>{
    return item * 10
  })
  ```

- `arr.filter`

  - filter() 方法创建一个新数组；
  - 新数组中只包含每个元素调用函数返回为true的元素；

  ```javascript
  const newArr = arr.filter((item,index,arr)=>{
    return item > 10
  })
  ```

- `arr.reduce`

  - 用于计算数组中所有元素的总和；
  - 对数组中的每个元素按序执行一个由您提供的 reducer 函数；
  - 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值；

  ```javascript
  const newArr = arr.reduce((previousValue,currentValue)=>{
    return previousValue += currentValue
  },0)
  ```



## 7.4 Date对象

- 创建Date对象

  ```JavaScript
  // 创建Date对象
  var date = new Date(); // 当前时间（伊尔库茨克标准时间）
  var date2 = new Date(1000); // 传入的毫秒数，表示从1970-01-01 00：00：00 UTC 经过的毫秒数
  var date3 = new Date("2022-08-08"); // 传入的是datestring，日期的字符串值
  // new Date(year,monthIndex [, day [, hours [, minutes [,seconds [, milliseconds]]]]])
  var date4 = new Date(2022, 08, 08, 08, 08, 08, 08);
  ```

- dateString时间的表示方式

  - 默认打印的时间格式是RFC 2822标准的：

  - ISO 8601 标准。

    ```JavaScript
    // RFC 2822标准
    new Date() // Thu Nov 03 2022 18:25:49 GMT+0800 (中国标准时间)
    
    // ISO 8601标准
    new Date().toISOString()  // 2022-11-03T10:26:01.251Z
    ```

- Date获取信息的方法

  ```javascript
  var dete = new Date()
  // 1.获取想要的时间信息
  var year = date.getFullYear(); //获取年份（4 位数）；
  var month = date.getMonth() + 1; // 获取月份，从 0 到 11；
  var day = date.getDate(); // 获取当月的具体日期，从 1 到 31
  var hour = date.getHours(); // 获取小时；
  var minute = date.getMinutes(); // 获取分钟；
  var second = date.getSeconds(); // 获取秒钟；
  var millsecond = date.getMilliseconds(); // 获取毫秒
  
  var weekday = date.getDay(); // 一周中的第几天
  ```

- Date设置信息的方法

  ```JavaScript
  var dete = new Date()
  // 2.也可以给date设置时间(了解)
  date.setFullYear(2033);
  // 自动校验
  date.setDate(32);
  ```

- Date获取Unix时间戳

  ```JavaScript
  /* 
  Unix 时间戳：它是一个整数值，表示自1970年1月1日00:00:00 UTC以来的毫秒数。
      方式一：new Date().getTime()
      方式二：new Date().valueOf()
      方式三：+new Date()
      方式四：Date.now()
  */
  var startTime = Date.now();
  // 测试代码的性能
  for (let i = 0; i < 10000; i++) {
    console.log('打印i'，i)
  }
  var endTime = Date.now();
  var result = endTime - startTime
  console.log('代码执行完成的时间，'result)
  ```

- Date.parse方法

  ```javascript
  /* 
  Date.parse(str) 方法可以从一个字符串中读取日期，并且输出对应的Unix时间戳。
  Date.parse(str) ：
      作用等同于 new Date(dateString).getTime() 操作；
      需要符合 RFC2822 或 ISO 8601 日期格式的字符串；
          比如YYYY-MM-DDTHH:mm:ss.sssZ
      如果输入的格式不能被解析，那么会返回NaN；
  */
  var time1 = Date.parse("2022-08-08T08:08:08.666Z")
  ```



# 八、JavaScript的DOM操作

## 8.1 深入理解DOM

- 浏览器会对我们编写的HTML、CSS进行渲染，同时它又要考虑我们可能会通过JavaScript来对其进行操作：

  - 于是浏览器将我们编写在HTML中的每一个元素（Element）都抽象成了一个个对象
  - 所有这些对象都可以通过JavaScript来对其进行访问，那么我们就可以通过JavaScript来操作页面；
  - 所以，我们将这个抽象过程称之为 文档对象模型（Document Object Model）；

- 整个文档被抽象到 document 对象中：

  - 比如`document.documentElement`对应的是`html元素`；

  - 比如`document.body`对应的是`body元素`；

  - 比如`document.head`对应的是`head元素`；

  - 比如`document.doctype`对应的是`文档声明 <!DOCTYPE html>`

    ```javascript
    console.log(document.doctype)
    console.log(document.documentElement)       
    console.log(document.head)
    console.log(document.body)            
    ```

    

## 8.2 DOM Tree的理解

- 一个页面不只是有html、head、body元素，也包括很多的子元素：

  - 在html结构中，最终会形成一个`树结构`；

  - 在抽象成DOM对象的时候，它们也会形成一个`树结构`，我们称之为`DOM Tree`；

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>A Heading</h1>
        <a href="#">Link Text</a>
    </body>
    </html>
    ```



## 8.3 节点（Node）之间的导航（navigator）

- 如果我们获取到一个节点（Node）后，可以根据这个节点去获取其他的节点，我们称之为节点之间的导航。

- 节点之间存在如下的关系：

  - 父节点：`parentNode`
  - 前兄弟节点：`previousSibling`
  - 后兄弟节点：`nextSibling`
  - 子节点：`childNodes`
  - 第一个子节点：`firstChild`
  - 最后一个子节点：`lastChild`

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div class="box">
          第一个节点
          <!-- 我是注释 -->
          <h1 class="title">我是标题</h1>
          <div class="container">我是div元素</div>
          <div class="desc">我是一个段落</div>
          最后一个节点
      </div>
      <script>
          const bodyEl = document.body
          const boxEl = bodyEl.firstChild.nextSibling
          // 获取第一个节点
          const firstNode = boxEl.firstChild
          // 获取注释
          const memo = firstNode.nextSibling
          // 获取标题
          const title = memo.nextSibling.nextSibling
          // 获取最后一个节点
          // 获取div元素
          const containerEl = title.nextSibling.nextSibling
          const lastNode = boxEl.lastChild
      </script>
  </body>
  </html>
  ```



## 8.4 元素（Element）之间的导航（navigator）

- 如果我们获取到一个元素（Element）后，可以根据这个元素去获取其他的元素，我们称之为元素之间的导航。

- 元素之间存在如下的关系：

  - 父元素：`parentElement`
  - 前兄弟元素：`previousElementSibling`
  - 后兄弟元素：`nextElementSibling`
  - 子元素：`children`
  - 第一个子元素：`firstElementChild`
  - 最后一个子元素:`lastElementChild`

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div class="box">
          第一个节点
          <!-- 我是注释 -->
          <h1 class="title">我是标题</h1>
          <div class="container">我是div元素</div>
          <div class="desc">我是一个段落</div>
          最后一个节点
      </div>
      <script>
          const bodyEl = document.body
          // 获取div.box元素
          const boxEl = bodyEl.firstElementChild
  			 // 获取h1.title元素
          const titleEl = boxEl.firstElementChild
          // 获取div.container元素
          const containerEl = titleEl.nextElementSibling
          // 获取div.desc元素
          const descEl = boxEl.lastElementChild
      </script>
  </body>
  </html>
  ```



## 8.5 表格（table）元素的导航（navigator）

- `<table>`元素支持 (除了上面给出的，之外) 以下这些属性：
  - `table.rows` —  元素的集合；
  - `table.caption/tHead/tFoot` — 引用元素 <caption> ，<thead>，<tfoot>；
  - `table.tBodies` —  <tbody>元素的集合；
- <thead>,<tfoot>,<tbody> 元素提供了rows属性;
  - `tbody.rows`  ~ 表格内部 <tr> 元素的集合
- <tr>:
  - `tr.cells` ~ 在给定 <tr> 中的 <td> 和 <th> 单元格的集合
  - `tr.sectionRowIndex` — 给定的 <tr> 在封闭的 <thead> / <tbody> / <tfoot>  中的位置（索引）；
  - `tr.rowIndex` — 在整个表格中 <tr> 的编号（包括表格的所有行）；
- <td> 和 <th>：
  - `td.cellIndex` — 在封闭的 <tr> 中单元格的编号。



## 8.6 获取元素的方法

-  DOM为我们提供了获取元素的方法：

  |         方法名         |   搜索方式   | 可以在元素上调用? | 实时的? |
  | :--------------------: | :----------: | :---------------: | :-----: |
  |     querySelector      | CSS-selector |         ✔         |    -    |
  |    querySelectorAll    | CSS-selector |         ✔         |    -    |
  |     getElementById     |      id      |         -         |    -    |
  |   getElementsByName    |     name     |         -         |    ✔    |
  |  getElementsByTagName  | tag or ' * ' |         ✔         |    ✔    |
  | getElementsByClassName |    class     |         ✔         |    ✔    |

- 目前最常用的是querySelector和querySelectAll；

- `getElementById`偶尔也会使用或者在适配一些低版本浏览器时；



## 8.7 节点的类型 - nodeType

- 常见的节点类型有如下：

  |          常量           |  值  | 描述                                                         |
  | :---------------------: | :--: | :----------------------------------------------------------- |
  |    Node.ELEMENT_NODE    |  1   | 一个 元素 节点，例如 <p> 和 <div>                            |
  |     Node.TEXT_NODE      |  3   | Element 或者 Attr 中实际的 文字                              |
  |    Node.COMMENT_NODE    |  8   | 一个 Comment 节点。                                          |
  |   Node.DOCUMENT_NODE    |  9   | 一个 Document 节点。                                         |
  | Node.DOCUMENT_TYPE_NODE |  10  | 描述文档类型的 DocumentType 节点。例如 <!DOCTYPE html> 就是用于 HTML5 的。 |



## 8.8 节点的属性

- `nodeName`：获取node节点的名字；

- `tagName`：获取元素的标签名词；

- tagName 和 nodeName 之间有什么不同呢？

  - `tagName `属性仅适用于 Element 节点；
  - `nodeName `是为任意 Node 定义的：
    - 对于元素，它的意义与 tagName 相同，所以使用哪一个都是可以的；
    - 对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串；

- `innerHTML` 属性

  - 将元素中的 HTML 获取为字符串形式；
  - 设置元素中的内容；

- `outerHTML` 属性

  - 包含了元素的完整 HTML
  - innerHTML 加上元素本身一样；

- `textContent` 属性

  - 仅仅获取元素中的文本内容;

- `innerHTML`和`textContent`的区别：

  - 使用 `innerHTML`，我们将其“作为 HTML”插入，带有所有 HTML 标签。
  - 使用 `textContent`，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理。

- `nodeValue/data` 

  - 用于获取非元素节点的文本内容

  ```javascript
  var text = document.body.firstChild
  var comment = text.nodeValue	
  console.log(comment.nodeValue)
  ```

- `hidden`属性：也是一个全局属性，可以用于设置元素隐藏。

  ```html
  <body>
    <div class="box">哈哈哈哈 </div>
    
    <script>
    	var boxEl = document.querySelector('.box')
      boxEl.hidden = true
    </script>
  </body>
  ```
