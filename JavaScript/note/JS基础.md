# 一、JavaScript基础语法

## 1.1 JavaScript的编写方式

- **位置一**：HTML代码行内（不推荐）

- **位置二**：script标签中

- **位置三**：外部的script文件

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

- **注意一**: script元素不能写成单标签
- **注意二**: 省略type属性
  - 在以前的代码中，<script> 标签中会使用 type="text/JavaScript";
  - 现在可不写这个代码了，因为JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言；
- **注意三**: 加载顺序
  - JavaScript默认遵循HTML文档的加载顺序，即自上而下的加载顺序；
  - 推荐将JavaScript代码和编写位置放在body子元素的最后一行；
- **注意四**: JavaScript代码严格区分大小写



# 二、JavaScript的数据类型

## 2.1 typeof操作符

- 对一个值使用 **typeof 操作符**会返回下列字符串之一:
  - "undefined"表示值未定义;
  - "boolean"表示值为布尔值;
  - "string"表示值为字符串;
  - "number"表示值为数值;
  - "object"表示值为对象(而不是函数)或 null;
  - "function"表示值为函数;
  - "symbol"表示值为符号；



## 2.2 Number类型

- **number 类型代表整数和浮点数。**

  ```javascript
  var age = 10
  var height = 1.88
  ```

- **常见的操作：**

  ```javascript
  var result1 = 10 * 2
  var result2 = 10 / 3
  ```

- **Infinity：**代表数学概念中的 无穷大 ∞，也可以表示-Infinity；

  ```javascript
  var result = 1 / 0
  ```

- **NaN：**NaN 代表一个计算错误，它是一个错误的操作所得到的结果；

  ```javascript
  var result = '111' * 10
  ```

- **十进制（掌握）、十六进制、二进制、八进制（了解）**

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

- **数字表示的范围：**

  - 最小正数值：`Number.MIN_VALUE`，这个值为： 5e-324，小于这个的数字会被转化为0
  - 最大正数值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308
  - `Number.MAX_SAFE_INTEGER`：JavaScript 中最大的安全整数 (2^53 - 1)；
  - `Number.MIN_SAFE_INTEGER`：JavaScript 中最小的安全整数 -(2^53 - 1)

- **isNaN**

  - 用于判断是否不是一个数字。不是数字返回 true，是数字返回 false。

- **Number实例方法:**

  - 方法一：`toString(base)`，将数字转成字符串，并且按照base进制进行转化
    - base 的范围可以从 2 到 36，默认情况下是 10；
  - 方法二：`toFixed(digits)`，格式化一个数字，保留digits位的小数；
    - digits的范围是0到20（包含）之间；

- **Number类方法:**

  - 方法一：`Number.parseInt(string[, radix])`，将字符串解析成整数，也有对应的全局方法parseInt；
  - 方法二：`Number. parseFloat(string)`，将字符串解析成浮点数，也有对应的全局方法parseFloat；



## 2.3 String类型

- **三种包含字符串的方式**

  ```JavaScript
  var name = '陈卓林'
  var address = "广州市"
  // ES6语法
  var description = `${name}是${address}的人`
  ```

- **字符串拼接，通过+运算符**

  ```JavaScript
  var str1 = 'hello'
  var str2 = 'world'
  var newStr = str1 + str2
  ```

- **获取字符串长度**

  ```javascript
  console.log(newStr.length)
  ```

- **访问字符串的字符**

  - 使用方法一：通过字符串的索引` str[0]`
  - 使用方法二：通过`str.charAt(pos)`方法
  - 它们的区别是索引的方式没有找到会返回`undefined`，而`charAt`没有找到会返回空字符串；

- **修改字符串**

  - toLowerCase()：将所有的字符转成小写；

  - toUpperCase() ：将所有的字符转成大写；

    ```JavaScript
    var message = 'Hello'
    message.toLowerCase() // hello
    message.toUpperCase() // HELLO
    ```

- **查找字符串位置  `str.indexOf(search [, fromIndex])`**

  - 从fromIndex开始，查找searchValue的索引；
  - 如果没有找到，那么返回-1；
  - 有一个相似的方法，叫lastIndexOf，从最后开始查找（用的较少）

- **是否包含字符串  `str.includes(searchString[, position])**`

  - 从position位置开始查找searchString， 根据情况返回 true 或 false
  - 这是ES6新增的方法

- **以xxx开头  `str.startsWith(searchString[, position])`**

  - 从position位置开始，判断字符串是否以searchString开头；

  - 这是ES6新增的方法，下面的方法也一样；

    ```javascript
    message.startsWith("czl")
    ```

- **以xxx结尾  `str.endsWith(searchString[, length])`**

  - 在length长度内，判断字符串是否以searchString结尾；

    ```javascript
    message.endsWith("czl")
    ```

- **替换字符串  `str.replace(regexp|substr, newstr, newSubStr|function)`**
  
- 查找到对应的字符串，并且使用新的字符串进行替代；
  
- 这里也可以传入一个正则表达式来查找，也可以传入一个函数来替换；
  
    ```javascript
    message.replace("czl", "kobe")
  ```
  
- **获取子字符串**

  - 开发中推荐使用slice方法

  |         方法          |              选择方式……               |     负值参数      |
  | :-------------------: | :-----------------------------------: | :---------------: |
  |   slice(start, end)   |      从 start 到 end（不含 end）      |       允许        |
  | substring(start, end) |      从 start 到 end（不含 end）      |    负值代表 0     |
  | substr(start, length) | 从 start 开始获取长为 length 的字符串 | 允许 start 为负数 |

- **拼接字符串  `str.concat(str2,[, ...strN])`**

  ```javascript
  'hello'.concat('world',['你好'])
  ```

- **删除首尾空格  `str.trim()`**

- **字符串分割  `str.split({separator,[, limit]})`**

  - separator：以什么字符串进行分割，也可以是一个正则表达式；

  - limit：限制返回片段的数量；

    ```javascript
    var message = "my name is czl"
    console.log(message.split(" ",4)) // ["my","name","is","czl"]
    ```

    

## 2.4 字符串中的转义字符

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

- **Boolean 类型仅包含两个值：true 和 false。**

  ```javascript
  var isLogin = true
  var flag = true
  var result = 1 === 1
  ```



## 2.6 Undefined类型

- **如果我们声明一个变量，但是没有对其进行初始化时，它默认就是undefined；**

  ```javascript
  var message 
  console.log(message) / undefined
  console.log(message === undefined) // true
  ```

- **两个注意事项：**

  - **注意一**：最好在变量定义的时候进行初始化，而不只是声明一个变量；
  - **注意二**：不要显示的将一个变量赋值为undefined
    - 如果变量刚开始什么都没有，我们可以初始化为0、空字符串、null等值；



## 2.7 Object类型

- **Object 类型是一个特殊的类型，我们通常把它称为引用类型或者复杂类型；**

  - 其他的数据类型我们通常称之为 “原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）；

  - `Object`往往可以表示一组数据，是其他数据的一个集合；

  - 在JavaScript中我们可以使用 `花括号{} ` 的方式来表示一个对象；

    ```JavaScript
    var info = {
      name:'why',
      age: 18,
      height: 1.88
    }
    ```



## 2.8 Null类型

- **null类型通常用来表示一个对象为空，所以通常我们在给一个对象进行初始化时，会赋值为null；**

  ```javascript
  var obj = null
  console.log(typeof null) // object
  obj = {
    name: '陈卓林',
    age: 18
  }
  ```

- **null和undefined的关系：**

  - `undefined`通常只有在一个变量声明但是未初始化时，它的默认值是`undefined`才会用到；
  - 不推荐直接给一个变量赋值为`undefined`
  - `null`值非常常用，当一个变量准备保存一个对象，但是这个对象不确定时，我们可以先赋值为`null`；



## 2.9 字符串String的转换

- **转换方式一：隐式转换**
  - 一个字符串和另一个字符串进行+操作；
  - 如果+运算符左右两边有一个是字符串，那么另一边会自动转换成字符串类型进行拼接；
  - 某些函数的执行也会自动将参数转为字符串类型，比如`console.log`函数；
- **转换方式二：显式转换**
  - 调用`String()`函数；
  - 调用`toString()`方法



## 2.10 数字类型Number的转换

- **转换方式一：**隐式转换

  - 在算数运算中，通常会将其他类型转换成数字类型来进行运算；
  - 但是如果是+运算，并且其中一边有字符串，那么还是按照字符串来连接的；

- **转换方式二：**显式转换

  - 调用`Number()`函数；

- **其他类型转换数字的规则：**

  |      值       | 转换后的值                                                   |
  | :-----------: | :----------------------------------------------------------- |
  |   undefined   | NaN                                                          |
  |     null      | 0                                                            |
  | true 和 false | 1 and 0                                                      |
  |    string     | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果<br>为 0。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 NaN |



## 2.11 布尔类型Boolean的转换

- **布尔（boolean）类型转换**是最简单的

  - 它发生在逻辑运算中，但是也**可以通过调用`Boolean(value) `显式地进行转换**。

- **转换规则如下：**

  - 直观上`为“空”的值（如 0、空字符串、null、undefined 和 NaN）`将变为 `false`;

  - 其他值变成 `true`。

    | 值                          | 转化后 |
    | :-------------------------- | ------ |
    | 0, null, undefined, NaN, "" | false  |
    | 其他值                      | true   |

- **注意：**包含 0 的字符串 "0" 是 true



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

- **= 是一个运算符，而不是一个有着“魔法”作用的语言结构。**

  - 语句 x = value 将值 value 写入 x 然后返回 x。

- **链式赋值（Chaining assignments）**

  - 链式赋值从右到左进行计算；
  - 首先，对最右边的表达式 2 + 2 求值，然后将其赋给左边的变量：c、b 和 a。
  - 最后，所有的变量共享一个值。

  ```javascript
  let a, b, c;
  a = b = c = 2 + 2;
  console.log(a, b, c); // 4
  ```



## 3.3 ++和- -的位置

- **运算符 ++ 和 -- 可以置于变量前，也可以置于变量后**
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

- **普通的相等性检查 == 存在一个问题，它`不能区分出 0 和 false，或者空字符串和 false`这类运算：**
  - 这是因为在比较不同类型的值时，处于判断符号 == 两侧的值会先被转化为数字；
  - 空字符串和 false 也是如此，转化后它们都为数字 0；
- **如果我们`需要区分 0 和 false`，该怎么办？**
  - 严格相等运算符 === 在进行比较时不会做任何的类型转换；
  - 换句话说，如果 a 和 b 属于不同的数据类型，那么 a === b 不会做任何的类型转换而立刻返回 false；



## 3.6 逻辑运算符

| 运算符 |   运算规则   |     范例      | 结果  |
| :----: | :----------: | :-----------: | :---: |
|   &&   | 与: 同时为真 | false && True | false |
|  \|\|  | 或: 一个为真 | false or frue | true  |
|   !    |   非: 取反   |    !false     | true  |



## 3.7 逻辑或的本质

- **||（或）两个竖线符号表示“或”运算符（也称为短路或）：**
  - 从左到右依次计算操作数。
  - 处理每一个操作数时，都将其转化为`布尔值（Boolean）`；
  - 如果结果是 `true`，就停止计算，返回这个操作数的初始值。
  - 如果所有的操作数都被计算过（也就是，转换结果都是 false），则返回最后一个操作数。
- **注意：**返回的值是操作数的初始形式，不会转换为Boolean类型。



## 3.8 逻辑与的本质

- **&&（或）两个竖线符号表示“与”运算符（也称为短路与）：**
  - 从左到右依次计算操作数。
  - 在处理每一个操作数时，都将其转化为`布尔值（Boolean）`；
  - 如果结果是 `false`，就停止计算，并返回这个操作数的初始值（一般不需要获取到初始值）；
  - 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。



## 3.9 !（非）

- **逻辑非运算符接受一个参数，并按如下运算：**

  - 步骤一：将操作数转化为布尔类型：true/false；
  - 步骤二：返回相反的值；

- **两个非运算 !! 有时候用来将某个值转化为布尔类型：**

  ```javascript
  var num = 100
  var result = !!num
  ```



# 四、JavaScript分支语句

## 4.1 程序的执行顺序

- 在程序开发中，**程序有三种不同的执行方式：**
  - 顺序 —— 从上向下，顺序执行代码
  - 分支 —— 根据条件判断，决定执行代码的 分支
  - 循环 —— 让 特定代码 重复 执行



## 4.2 代码块的理解

- **代码块**是多行执行代码的集合，通过一个花括号{}放到了一起。

- **代码块有自己的作用域**

  ```javascript
  {
    var name = '陈卓林'
    var message = 'my name is ' + name
  }
  ```



## 4.3 什么是分支结构？

- **分支结构**
  - 分支结构的代码就是让我们根据条件来决定代码的执行。
  - 分支结构的语句被称为判断结构或者选择结构。
- **JavaScript中常见的分支结构有：**
  - if分支结构
  - switch分支结构



## 4.4 if语句的细节补充

- **补充一**：如果代码块中只有一行代码，那么{}可以省略：
- **补充二**：if (…) 语句会计算圆括号内的表达式，并将计算结果转换为布尔型（Boolean）。
  - 转换规则和Boolean函数的规则一致；
  - `数字 0、空字符串 “”、null、undefined 和 NaN` 都会被转换成 `false`。
    - 因为它们被称为“假值（falsy）”；
  - 其他值被转换为 true，所以它们被称为“真值（truthy）”；



## 4.5 三元运算符

- **条件运算符：" ? "**

  - 这个运算符通过问号 ? 表示；
  - 有时它被称为三元运算符，被称为“三元”是因为该运算符中有三个操作数（运算元）；
  - 实际上它是 JavaScript 中唯一一个有这么多操作数的运算符；

- **使用格式如下:**

  `var result = condition ? value1 : value2`

- **案例一**： m=20，n=30，比较两个数字的大小，获取较大的那个数字

  ```javascript
  var m = 20;
  var n = 30;
  var result = m > n ? m : n
  ```



## 4.6 switch语句的细节补充

- **case穿透问题**：
  - 一条case语句结束后，会自动执行下一个case的语句；
  - 这种现象被称之为case穿透；
- **break关键字**
  - 通过在每个case的代码块后添加break关键字来解决这个问题；
- **注意事项**：这里的相等是严格相等。
  - 被比较的值必须是相同的类型才能进行匹配。



# 五、JavaScript的内置类

## 5.1 包装类型的使用过程

- **默认情况，`当我们调用一个原始类型的属性或者方法时，会进行如下操作`：**
  1. 根据原始值，创建一个原始类型对应的包装类型对象；
  2. 调用对应的属性或者方法，返回一个新的值；
  3. 创建的包装类对象被销毁；
  4. 通常JavaScript引擎会进行很多的优化，它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用。
- **注意事项**：null、undefined没有任何的方法，也没有对应的“对象包装类”；



## 5.2 Math对象

- **Math常见的属性：**
  - Math.PI：圆周率，约等于 3.14159；
- **Math常见的方法：**
  - `Math.floor`：向下舍入取整
  - `Math.ceil`：向上舍入取整
  - `Math.round`: 四舍五入取整
  - `Math.random`：生成0~1的随机数（包含0，不包含1）
  - `Math.pow(x, y)`：返回x的y次幂



## 5.3 Array数组

- ###### 访问数组中的元素

  - 通过中括号[]访问
  - arr.at(i)：
    - 如果 i >= 0，则与 arr[i] 完全相同。
    - 对于 i 为负数的情况，它则从数组的尾部向前数。

  ```javascript
  const a = arr[0]
  const b = arr.at(-1)
  ```

- ###### 修改数组中的元素

  ```javascript
  arr[0] = "czl"
  ```

- ###### 在数组的尾端添加或删除元素

  - `push `在末端添加元素

  - `pop `从末端取出一个元素.

    ```javascript
    arr.push("abc","dhs")
    arr.pop()
    ```

- ###### 在数组的首端添加或删除元素

  - `shift `取出队列首端的一个元素，整个数组元素向前前移动；

  - `unshift `在首端添加元素，整个其他数组元素向后移动；

    ```javascript
    arr.unshift("curry")
    arr.shift()
    ```

  -  `push/pop` 方法运行的比较快，而 shift/unshift 比较慢。

- ###### `arr.splice`方法

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

- ###### `length`属性

  - 用于获取数组的长度
  - 当我们修改数组的时候，length 属性会自动更新。
  - `length` 属性是可写的
  - 所以，清空数组最简单的方法就是：arr.length = 0。

- ###### 数组的遍历

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

- ###### `arr.slice(begin, end)` 方法：用于对数组进行截取

  - 包含bigin元素，但是不包含end元素；

- ###### `arr.concat`方法：创建一个新数组，其中包含来自于其他数组和其他项的值

  ```javascript
  var newArr = arr.concat(['abc'],"nba")
  ```

- ###### `arr.join`方法： 将一个数组的所有元素连接成一个字符串并返回这个字符串。

  ```javascript
  var arr = [1,2,3,4,5]
  var str = arr.join('0') // 1020304050
  ```

- ###### `arr.indexOf(searchElement,fromIndex)`方法： 查找某个元素的索引 

  - 从fromIndex开始查找，如果找到返回对应的索引，没有找到返回-1；
  - 也有对应的从最后位置开始查找的 lastIndexOf 方法

- ###### `arr.includes(valueToFind, fromIndex)`方法：判断数组是否包含某个元素

  - 从索引 from 开始搜索 item，如果找到则返回 true（如果没找到，则返回 false）

- ###### `find `和 `findIndex `直接查找元素或者元素的索引（ES6之后新增的语法）

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

- ###### `arr.sort(compareFunction(a,b))`方法也是一个高阶函数，用于对数组进行排序，并且生成一个排序后的新数组

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

- ###### `reverse()` 方法将数组中元素的位置颠倒，并返回该数组。

- ###### `arr.forEach`

  - 遍历数组，并且让数组中每一个元素都执行一次对应的方法；

  ```javascript
  arr.forEach((item,index,arr)=>{})
  ```

- ###### `arr.map`

  - map() 方法创建一个新数组；
  - 这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成；

  ```javascript
  const newArr = arr.map((item,index,arr)=>{
    return item * 10
  })
  ```

- ###### `arr.filter`

  - filter() 方法创建一个新数组；
  - 新数组中只包含每个元素调用函数返回为true的元素；

  ```javascript
  const newArr = arr.filter((item,index,arr)=>{
    return item > 10
  })
  ```

- ###### `arr.reduce`

  - 用于计算数组中所有元素的总和；
  - 对数组中的每个元素按序执行一个由您提供的 reducer 函数；
  - 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值；

  ```javascript
  const newArr = arr.reduce((previousValue,currentValue)=>{
    return previousValue += currentValue
  },0)
  ```



## 5.4 Date对象

- ###### 创建Date对象

  ```JavaScript
  // 创建Date对象
  var date = new Date(); // 当前时间（伊尔库茨克标准时间）
  var date2 = new Date(1000); // 传入的毫秒数，表示从1970-01-01 00：00：00 UTC 经过的毫秒数
  var date3 = new Date("2022-08-08"); // 传入的是datestring，日期的字符串值
  // new Date(year,monthIndex [, day [, hours [, minutes [,seconds [, milliseconds]]]]])
  var date4 = new Date(2022, 08, 08, 08, 08, 08, 08);
  ```

- ###### dateString时间的表示方式

  - 默认打印的时间格式是RFC 2822标准的：

  - ISO 8601 标准。

    ```JavaScript
    // RFC 2822标准
    new Date() // Thu Nov 03 2022 18:25:49 GMT+0800 (中国标准时间)
    
    // ISO 8601标准
    new Date().toISOString()  // 2022-11-03T10:26:01.251Z
    ```

- ###### Date获取信息的方法

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

- ###### Date设置信息的方法

  ```JavaScript
  var dete = new Date()
  // 2.也可以给date设置时间(了解)
  date.setFullYear(2033);
  // 自动校验
  date.setDate(32);
  ```

- ###### Date获取Unix时间戳

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

- ###### Date.parse方法

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



# 六、JavaScript的DOM操作

## 6.1 深入理解DOM

- **浏览器会对我们编写的HTML、CSS进行渲染，同时它又要考虑我们可能会通过JavaScript来对其进行操作：**

  - 于是浏览器将我们编写在HTML中的每一个元素（Element）都抽象成了一个个对象
  - 所有这些对象都可以通过JavaScript来对其进行访问，那么我们就可以通过JavaScript来操作页面；
  - 所以，我们将这个抽象过程称之为 文档对象模型（Document Object Model）；

- **整个文档被抽象到 document 对象中：**

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

    

## 6.2 DOM Tree的理解

- **一个页面不只是有html、head、body元素，也包括很多的子元素：**

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



## 6.3 节点（Node）之间的导航（navigator）

- 如果我们**获取到一个节点（Node）后**，可以**根据这个节点去获取其他的节点**，我们**称之为节点之间的导航。**

- **节点之间存在如下的关系：**

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



## 6.4 元素（Element）之间的导航（navigator）

- 如果我们**获取到一个元素（Element）后**，可以**根据这个元素去获取其他的元素**，我们**称之为元素之间的导航。**

- **元素之间存在如下的关系：**

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



## 6.5 表格（table）元素的导航（navigator）

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



## 6.6 获取元素的方法

|         方法名         |   搜索方式   | 可以在元素上调用? | 实时的? |
| :--------------------: | :----------: | :---------------: | :-----: |
|     querySelector      | CSS-selector |         ✔         |    -    |
|    querySelectorAll    | CSS-selector |         ✔         |    -    |
|     getElementById     |      id      |         -         |    -    |
|   getElementsByName    |     name     |         -         |    ✔    |
|  getElementsByTagName  | tag or ' * ' |         ✔         |    ✔    |
| getElementsByClassName |    class     |         ✔         |    ✔    |

- 目前最常用的是`querySelector` 和 `querySelectAll`；

- `getElementById`偶尔也会使用或者在适配一些低版本浏览器时；



## 8.7 节点的类型 - nodeType

- **常见的节点类型有如下：**

  |          常量           |  值  | 描述                                                         |
  | :---------------------: | :--: | :----------------------------------------------------------- |
  |    Node.ELEMENT_NODE    |  1   | 一个 元素 节点，例如 <p> 和 <div>                            |
  |     Node.TEXT_NODE      |  3   | Element 或者 Attr 中实际的 文字                              |
  |    Node.COMMENT_NODE    |  8   | 一个 Comment 节点。                                          |
  |   Node.DOCUMENT_NODE    |  9   | 一个 Document 节点。                                         |
  | Node.DOCUMENT_TYPE_NODE |  10  | 描述文档类型的 DocumentType 节点。例如 <!DOCTYPE html> 就是用于 HTML5 的。 |



## 6.8 节点的属性

- **`nodeName`：**获取node节点的名字；

- **`tagName`：**获取元素的标签名词；

- **tagName 和 nodeName 之间有什么不同呢？**

  - `tagName `属性仅适用于 Element 节点；
  - `nodeName `是为任意 Node 定义的：
    - 对于元素，它的意义与 tagName 相同，所以使用哪一个都是可以的；
    - 对于其他节点类型（text，comment 等），它拥有一个对应节点类型的字符串；

- **`innerHTML` 属性:**

  - 将元素中的 HTML 获取为字符串形式；
  - 设置元素中的内容；

- **`outerHTML` 属性:**

  - 包含了元素的完整 HTML
  - innerHTML 加上元素本身一样；

- **`textContent` 属性:**

  - 仅仅获取元素中的文本内容;

- **`innerHTML`和`textContent`的区别：**

  - 使用 `innerHTML`，我们将其“作为 HTML”插入，带有所有 HTML 标签。
  - 使用 `textContent`，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理。

- **`nodeValue/data`属性:** 

  - 用于获取非元素节点的文本内容

  ```javascript
  var text = document.body.firstChild
  var comment = text.nodeValue	
  console.log(comment.nodeValue)
  ```

- **`hidden`属性：也是一个全局属性，可以用于设置元素隐藏。**

  ```html
  <body>
    <div class="box">哈哈哈哈 </div>
    
    <script>
    	var boxEl = document.querySelector('.box')
      boxEl.hidden = true
    </script>
  </body>
  ```



## 6.9 元素的特性attribute

- ###### 属性attribute的分类

  - 标准的attribute：某些attribute属性是标准的，比如id、class、href、type、value等；

  - 非标准的attribute：某些attribute属性是自定义的，比如abc、age、height等；

    ```html
    <div class="box" id="main" name="why" abc="anc" age="18" height="1.88">
      哈哈哈哈
    </div>
    ```

- ###### attribute的操作

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

- ###### attribute具备以下特征

  - 它们的名字是大小写不敏感的（id 与 ID 相同）。
  - 它们的值总是字符串类型的。



## 6.10 元素的属性property

- **对于标准的attribute，会在DOM对象上创建与其对应的property属性：**

- **在大多数情况下，它们是相互作用的**;

  - 改变`property`，通过`attribute`获取的值，会随着改变；
  - 通过`attribute`操作修改，`property`的值会随着改变；
    - 但是input的value修改只能通过attribute的方法；

- **除非特别情况，大多数情况下，设置、获取attribute，推荐使用property的方式：**

  - 这是因为它默认情况下是有类型的；

    ```javascript
    toggleBtn.onclick = function(){
      checkBoxInput.checked = !checkBoxInput.checked
    }
    ```



## 6.11 HTML5的data-*自定义属性

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



## 6.12 元素的className和classList

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



## 6.13 元素的style属性

- **如果需要单独修改某一个CSS属性，那么可以通过style来操作：**

  - 对于多词（multi-word）属性，使用驼峰式 camelCase

    ```javascript
    boxEl.style.width = "100px"
    boxEl.style.height = "100px"
    boxEl.style.backgroundColor = "red"
    ```

- **如果我们将值设置为空字符串，那么会使用CSS的默认样式：**

  ```javascript
  boxEl.style.display = ""
  ```

- **多个样式的写法，我们需要使用cssText属性：**

  - 不推荐这种用法，因为它会替换整个字符串；

    ```javascript
    boxEl.style.cssText = `
            width: 100px;
            height: 100px;
            background-color: red'`
    ```



## 6.14 元素style的读取 - getComputedStyle

- **如果我们需要读取样式：**

  - 对于`内联样式`，是可以`通过style.*的方式`读取到的;
  - 对于`style、css文件中的样式`，是`读取不到`的；

- **这个时候，我们可以通过`getComputedStyle`的全局函数来实现：**

  ```javascript
  console.log(getComputedStyle(boxEl).width)
  console.log(getComputedStyle(boxEl).height)
  console.log(getComputedStyle(boxEl).backgroundColor)
  ```

  

## 6.15 创建元素

- **前面我们使用过 document.write 方法写入一个元素：**

  - 这种方式写起来非常便捷，但是对于复杂的内容、元素关系拼接并不方便；
  - 它是在早期没有DOM的时候使用的方案，目前依然被保留了下来;

- **那么目前我们想要插入一个元素，通常会按照如下步骤：**

  - `步骤一`：创建一个元素;
  - `步骤二`：插入元素到DOM的某一个位置；

- **创建元素：`document.createElement(tag)`**

  ```javascript
  var boxEl = document.querySelector(".box")
  var h2El = document.createElement("h2")
  h2El.innerHTML = "我是标题"
  h2El.classList.add("title")
  boxEl.append(h2El)
  ```



## 6.16 插入元素

- **插入元素的方式如下：**
  - `node.append(...nodes or strings)` —— 在 node 末尾 插入节点或字符串，
  - `node.prepend(...nodes or strings)` —— 在 node 开头 插入节点或字符串，
  - `node.before(...nodes or strings)` —— 在 node 前面 插入节点或字符串，
  - `node.after(...nodes or strings)` —— 在 node 后面 插入节点或字符串，
  - `node.replaceWith(...nodes or strings)` —— 将 node 替换为给定的节点或字符串。



## 6.17 移除和克隆元素

- **移除元素我们可以调用元素本身的remove方法：**

  ```javascript
  setTimeout(() => {
  	h2El.remove()
  },2000)
  ```

- **如果我们想要复制一个现有的元素，可以通过cloneNode方法：**

  - 可以传入一个`Boolean类型的值`，来决定·是否是深度克隆·；

  - 深度克隆会克隆对应元素的子元素，否则不会；

    ```JavaScript
    var cloneBoxEl = boxEl.cloneNode(true)
    document.body.append(cloneBoxEl)
    ```



## 6.18 旧的元素操作方法

- `parentElem.appendChild(node)`：
  - 在parentElem的父元素最后位置添加一个子元素
- `parentElem.insertBefore(node, nextSibling)`：
  - 在parentElem的nextSibling前面插入一个子元素；
- `parentElem.replaceChild(node, oldChild)`：
  - 在parentElem中，新元素替换之前的oldChild元素；
- `parentElem.removeChild(node)`：
  - 在parentElem中，移除某一个元素；



## 6.19 元素的大小、滚动

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



## 6.20 window的大小、滚动

- **window的width和height**	
  - `innerWidth`、`innerHeight`：获取window窗口的宽度和高度（包含滚动条）
  - `outerWidth`、`outerHeight`：获取window窗口的整个宽度和高度（包括调试工具、工具栏）
  - `documentElement.clientHeight`、``：获取html的宽度和高度（不包含滚动条）
- **window的滚动位置：**
  - `scrollX`：X轴滚动的位置（别名pageXOffset）
  - `scrollY`：Y轴滚动的位置（别名pageYOffset）
- **也有提供对应的滚动方法：**
  - `方法 scrollBy(x,y)`：将页面滚动至 相对于当前位置的 (x, y) 位置；
  - `方法 scrollTo(pageX,pageY)`： 将页面滚动至 绝对坐标；



# 七、JavaScript的事件处理

## 7.1 事件（Event）监听的方式

- **事件监听方式一：**在script中直接监听（很少使用）；

- **事件监听方式二：**DOM属性，通过元素的on来监听事件；

- **事件监听方式三：**通过EventTarget中的addEventListener来监听；

  ```html
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



## 7.2 事件冒泡和事件捕获

- 我们会发现默认情况下事件是`从最内层的span向外依次传递的顺序`，这个顺序我们称之为`事件冒泡（Event Bubble）`;
- 事实上，还有另外一种监听事件流的方式就是`从外层到内层（body -> span）`，这种称之为`事件捕获（Event Capture）`；
- **为什么会产生两种不同的处理流呢？**
  - 这是因为早期浏览器开发时，不管是`IE还是Netscape公司都发现了这个问题`;
  - 但是他们采用了`完全相反的事件流来对事件进行了传递`；
  - IE采用了`事件冒泡的方式`，Netscape采用了`事件捕获的方式`；
- **`捕获阶段（Capturing phase）`：**
  - 事件（从 Window）向下走近元素。
- **`目标阶段（Target phase）`：**
  - 事件到达目标元素。
- **`冒泡阶段（Bubbling phase）`：**
  - 事件从元素上开始冒泡。
- **事实上，我们可以通过event对象来获取当前的阶段：**
  - eventPhase
- **开发中通常会使用`事件冒泡`，所以事件捕获了解即可。**



## 7.3 事件对象event

- **当一个事件发生时，就会有和这个事件相关的很多信息：**

  - 比如`事件的类型是什么`，你点击的是`哪一个元素`，`点击的位置`是哪里等等相关的信息；
  - 那么这些信息会被封装到一个`Event`对象中，这个对象由`浏览器`创建，称之为`event对象`；
  - 该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作；

- ###### 如何获取这个event对象呢？

  - `event对象`会在`传入的事件处理（event handler）函数回调`时，被系统传入；

  - 我们可以在回调函数中拿到这个`event对象`；

    ```javascript
    spanEl.onclick = function(event){
      console.log("事件对象：",event)
    }
    spanEl.addEventListener("click", function(event){
      console.log("事件对象：", event)
    })
    ```

- ###### event常见的属性

  - `type`：事件的类型；
  - `target`：当前事件发生的元素；
  - `currentTarget`：当前处理事件的元素；
  - `eventPhase`：事件所处的阶段；
  - `offsetX、offsetY`：事件发生在元素内的位置；
  - `clientX、clientY`：事件发生在客户端内的位置；
  - `pageX、pageY`：事件发生在客户端相对于document的位置；
  - `screenX、screenY`：事件发生相对于屏幕的位置；

- ###### event常见的方法

  - `preventDefault`：取消事件的默认行为；
  - `stopPropagation`：阻止事件的进一步传递（冒泡或者捕获都可以阻止）；

- ###### 事件处理中的this

  - 在函数中，我们也可以通过this来获取当前的发生元素：

  ```javascript
  boxEl.addEventListener("click", function(event){
    console.log(this === event.target) // true
  })
  ```



## 7.4 EventTarget类

- **我们会发现，所有的节点、元素都继承自EventTarget**

  - 事实上Window也继承自`EventTarget`；

- ###### 那么这个EventTarget是什么呢？

  - EventTarget是一个`DOM接口`，主要用于`添加、删除、派发Event事件`；

- ###### EventTarget常见的方法

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



## 7.5 事件委托（event delegation）

- 事件冒泡在某种情况下可以帮助我们实现强大的事件处理模式 – 事件委托模式（也是一种设计模式）

- **那么这个模式是怎么样的呢？**

  - 因为`当子元素被点击`时，父元素可以`通过冒泡可以监听到子元素的点击`；
  - 并且`可以通过event.target获取到当前监听的元素`；

- **案例：一个ul中存放多个li，点击某一个li会变成红色**

  - 方案一：监听`每一个li的点击`，并且`做出相应`；

  - 方案二：在`ul中监听点击`，并且`通过event.target拿到对应的li进行处理`；

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

- **事件委托的标记**

  - 某些事件委托可能需要对具体的子组件进行区分，这个时候我们可以使用data-*对其进行标记：

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



## 7.6 常见的鼠标事件

- 接下来我们来看一下常见的鼠标事件（不仅仅是鼠标设备，也包括模拟鼠标的设备，比如手机、平板电脑）

- **常见的鼠标事件：**

  |     属性      |                          描述                           |
  | :-----------: | :-----------------------------------------------------: |
  |    `click`    |         `当用户点击某个对象时调用的事件句柄。`          |
  | `contextmenu` |        `在用户点击鼠标右键打开上下文菜单时触发`         |
  |  `dblclick`   |         `当用户双击某个对象时调用的事件句柄。`          |
  |   mousedown   |               mousedown 鼠标按钮被按下。                |
  |    mouseup    |                    鼠标按键被松开。                     |
  |   mouseover   |       mouseover 鼠标移到某元素之上。（支持冒泡）        |
  |   mouseout    |             鼠标从某元素移开。（支持冒泡）              |
  |  mouseenter   | mouseenter 当鼠标指针移动到元素上时触发。（不支持冒泡） |
  |  mouseleave   |        当鼠标指针移出元素时触发。（不支持冒泡）         |
  |   mousemove   |                      鼠标被移动。                       |



## 7.7 常见的键盘事件

- **常见的键盘事件：**

  |    属性    |         描述         |
  | :--------: | :------------------: |
  | onkeydown  | 某个键盘按键被按下。 |
  | onkeypress | 某个键盘按键被按下。 |
  |  onkeyup   | 某个键盘按键被松开。 |

- **事件的执行顺序是 onkeydown、onkeypress、onkeyup**

  - `down`事件先发生；
  - `press`发生在文本被输入；
  - `up`发生在文本输入完成；

- **我们可以通过key和code来区分按下的键：**

  - `code`：“按键代码”（"KeyA"，"ArrowLeft" 等），特定于键盘上按键的物理位置。
  - `key`：字符（"A"，"a" 等），对于非字符（non-character）的按键，通常具有与 code 相同的值。）



## 7.8 常见的表单事件

|   属性   | 描述                                                         |
| :------: | :----------------------------------------------------------- |
| onchange | 该事件在表单元素的内容改变时触发(<input> ,<keygen> ,<select>, 和<textarea> ) |
| oninput  | 元素获取用户输入时触发                                       |
| onfocus  | 元素获取焦点时触发                                           |
|  onblur  | 元素失去焦点时触发                                           |
| onreset  | 表单重置时触发                                               |
| onsubmit | 表单提交时触发                                               |



## 7.9 文档加载事件

- `DOMContentLoaded`：浏览器已完全加载 HTML，并构建了 DOM 树，但像 ![img]() 和样式表之类的外部资源可能尚未加载完成。

- `load`：浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。

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



## 7.10 CSS事件

- CSS 事件：

  - `transitionend` —— 当一个 CSS 动画完成时。

    ```html
    <div class="box">box盒子</div>
    
    <script>
    	var boxEl = document.querySelector(".box")
      boxEl.addEventListener("transitionend", function(){
        console.log("div盒子动画加载完毕")
      })
    </script>
    ```



## 7.11 window定时器方法

- 有时我们并不想立即执行一个函数，而是等待特定一段时间之后再执行，我们称之为`“计划调用（scheduling a call）”`。

- 目前有**两种方式可以实现**：

  - `setTimeout` 允许我们将函数`推迟到一段时间间隔之后`再执行。
  - `setInterva`允许我们`重复运行一个函数`，从一段`时间间隔之后开始运行`，之后以该时间间隔`连续重复运行该函数`。

- 并且通常情况下有提供**对应的取消方法**：

  - `clearTimeout`：取消setTimeout的定时器；
  - `clearInterval`：取消setInterval的定时器；

- ###### `setTimeout`的语法：`let timeId = setTimeout(func|code,[delay],[arg1],[aeg2],...)`

  - `func|code`：想要执行的函数或代码字符串。
  - `delay`：执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），默认值是 0；
  - `arg1，arg2…`：要传入被执行函数（或代码字符串）的参数列表；

- ###### clearTimeout方法

  - `setTimeout `在调用时会返回一个`“定时器标识符（timer identifier）”`，我们可以使用它来取消执行。

    ```javascript
    var timeID = setTimeout(function(name,age){
      console.log("定时器：",name,age)
    },2000,"why",18)
    clearTimeout(timeID)
    ```

- ###### `setInterval`的语法：`let timeId = setInterval(func|code,[delay],[arg1],[aeg2],...)`

  - `func|code`：想要执行的函数或代码字符串。
  - `delay`：执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），默认值是 0；
  - `arg1，arg2…`：要传入被执行函数（或代码字符串）的参数列表；

- ###### `clearInterval`方法

  - `setInterval`也会返回一个`“定时器标识符（timer identifier）”`，我们可以通过clearInterval来取消这个定时器。

    ```javascript
    var timeID = setInterval(function(name,age){
      console.log("定时器：",name,age)
    },2000,"why",18)
    setInterval(timeID)
    ```



# 八、JavaScript的BOM操作

## 8.1 认识BOM

- **BOM：浏览器对象模型（Browser Object Model）**
  - 简称 `BOM`，由`浏览器提供的用于处理文档（document）之外的所有内容的其他对象`；
  - 比如`navigator、location、history`等对象；
- **JavaScript有一个非常重要的运行环境就是浏览器**
  - 而且浏览器本身又作为一个应用程序需要对其本身进行操作；
  - 所以通常浏览器会有对应的`对象模型（BOM，Browser Object Model）`；
  - 我们可以将BOM看成是连接JavaScript脚本与浏览器窗口的桥梁；
- **`BOM`主要包括以下的对象模型：**
  - `window`：包括全局属性、方法，控制浏览器窗口相关的属性、方法；
  - `location`：浏览器连接到的对象的位置（URL）；
  - `history`：操作浏览器的历史；
  - `navigator`：用户代理（浏览器）的状态和标识（很少用到）；
  - `screen`：屏幕窗口信息（很少用到）；



## 8.2 window对象

- **window对象在浏览器中可以从两个视角来看待：**
  
  - `视角一：全局对象。`
    - 我们知道ECMAScript其实是有一个全局对象的，这个全局对象在`Node中是global`；
    - 在浏览器中就是`window对象`；
  - `视角二：浏览器窗口对象。`
    - 作为`浏览器窗口时，提供了对浏览器操作的相关的API`；
- **当然，这两个视角存在大量重叠的地方，所以不需要刻意去区分它们：**
  
  - 事实上对于`浏览器和Node中全局对象名称不一样的情况`，目前已经指定了对应的标准，称之为`globalThis`，并且大多数现代浏览器都支持它；
  - 放在`window对象`上的所有属性都可以被访问；
  - 使用`var定义的变量会被添加到window对象`中；
- window默认给我们提供了全局的函数和类：`setTimeout、Math、Date、Object`等；
  
- ###### window常见的属性

  ```javascript
  // 浏览器高度
  console.log(window.outerHeight)
  console.log(window.innerHeight)
  
  console.log("screenX:",window.screenX)
  console.log("screenY:",window.screenY)
  
  //监听
  window.addEventListener("scroll",(event) =>{
    console.log(window.scrollX)
    console.log(window.scrollY)
  })
  ```

- ###### window常见的方法

  ```javascript
  // close方法
  const closeBtn = document.querySelector("#close")
  closeBtn.onclick = function(){
    window.close()
  }
  
  // scrollTo
  const scrollBtn = document.querySelector("#scroll")
  closeBtn.onclick = function(){
    window.scrollTo({top: 1000 })
  }
  
  // 打开新创建
  const openBtn = document.querySelector("#open")
  openBtn.onclick = function(){
    window.open("./about.html", "_self")
  }
  ```

- ###### window常见的事件

  ```javascript
  window.onfoucs = function(){
    console.log("窗口获取到焦点")
  }
  
  window.onblur = function(){
    console.log("窗口失去焦点")
  }
  
  // 整个页面以及所有的资源都加载完成
  window.onload = function(){
    console.log("页面加载完成")
  }
  
  // hash改变
  const hashBtn = document.querySelector("#hash")
  hashBtn.onclick = function(){
    location.hash = 'aaa'
  }
  window.onhashchange = function() {
    console.log("hash被改变了")
  }
  ```



## 8.3 location对象

- location对象用于表示window上当前链接到的URL信息。

- ###### location对象常见的属性

  - `href`: 当前window对应的超链接URL, 整个URL；
  - `protocol`: 当前的协议；
  - `host`: 主机地址；
  - `hostname`: 主机地址(不带端口)；
  - `port`: 端口；
  - `pathname`: 路径；
  - `search`: 查询字符串；
  - `hash`: 哈希值；
  - username：URL中的username（很多浏览器已经禁用）；
  - password：URL中的password（很多浏览器已经禁用）；

- ###### location对象常见的方法

  - assign：赋值一个新的URL，并且跳转到该URL中；

  - replace：打开一个新的URL，并且跳转到该URL中（不同的是不会在浏览记录中留下之前的记录）；

  - reload：重新加载页面，可以传入一个Boolean类型；

    ```javascript
    const locationBtn.onclick = document.querySelector("#location")
    locationBtn.onclick = function(){
      location.assign("http://www.baidu.com")
      location.replace("http://www.baidu.com")
      location.reload()
    }
    ```



## 8.4 URLSearchParams

- **URLSearchParams 定义了一些实用的方法来处理 URL 的查询字符串。**

  - 可以将一个字符串转化成URLSearchParams类型；

  - 也可以将一个URLSearchParams类型转成字符串；

    ```JavaScript
    var urlsearch = new URLSearchParams("name=why&age=18&height=1.88")
    consol.log(urlsearch.get("name")) // why
    console.log(urlsearch.toSrting()) // name=why&age=18&height=1.88
    ```

- ###### URLSearchParams常见的方法如下

  - `get`：获取搜索参数的值；
  - `set`：设置一个搜索参数和值；
  - `append`：追加一个搜索参数和值；
  - `has`：判断是否有某个搜索参数；



## 8.5 history对象

- history对象允许我们访问浏览器曾经的会话历史记录。

- 有**两个属性：**

  - `length`：会话中的记录条数；
  - `state`：当前保留的状态值；

- 有**五个方法：**

  - `back()`：返回上一页，等价于history.go(-1)；

  - `forward()`：前进下一页，等价于history.go(1)；

  - `go()`：加载历史中的某一页；

  - `pushState()`：打开一个指定的地址；

  - `replaceState()`：打开一个新的地址，并且使用replace；

    ```JavaScript
    console.log(history.length)
    console.log(history.state)
    
    const jumpBtn = document.querySelector("#jump")
    const backBtn = document.querySelector("#back")
    
    jumpBtn.onclick = function(){
      history.pushState({name: "why"}, "11", "aaa")
      console.log(history.length,history.state)
    }
    
    backBtn.onclick = function(){
      history.back()
      console.log(history.length,history.state)
    }
    ```

- history和hash目前是vue、react等框架实现路由的底层原理。



## 8.6 navigator对象（很少使用）

- navigator 对象表示用户代理的状态和标识等信息。

  | 属性/方法                     | 说明                                                         |
  | ----------------------------- | ------------------------------------------------------------ |
  | locks                         | 返回暴露 Web Locks API 的 LockManger 对象                    |
  | meidaCapabilities             | 返回暴露 Media Capabilities API 的 MediaCapabilities 对象    |
  | mediaDevices                  | 返回可用的媒体信息                                           |
  | maxTouchPoints                | 返回设备触摸屏支持的最大触点数                               |
  | mimeTypes                     | 返回浏览器中注册的 MIME 类型数组                             |
  | onLine                        | 返回布尔值，表示浏览器是否联网                               |
  | oscpu                         | 返回浏览器运行设备的操作系统和（或）CPU                      |
  | permissions                   | 返回暴露 Permissions API 的 permissions对象                  |
  | platform                      | 返回浏览器运行的系统平台                                     |
  | plugins                       | 返回浏览器安装的插件数组。在IE中，这个数组包含页面中所有<embed>元素 |
  | product                       | 返回产品名称（通常是"Gecko"）                                |
  | productSub                    | 返回产品的额外信息（通常是Gecko的版本）                      |
  | registerProtocolHandler()     | 将一个网站注册为特定协议的处理程序                           |
  | requestMediaKeySystemAccess() | 返回一个期约，解决为 MediaKeySystemAccess 对象               |
  | sendBeacon()                  | 异步传输一些小数据                                           |
  | serviceWorker                 | 返回用来与 ServiceWorker 实例交互的 ServiceWorkerContainer   |
  | share()                       | 返回当前平台的原生共享机制                                   |
  | storage                       | 返回暴露 Storage API 的 StorageManager 对象                  |
  | userAgent                     | 返回浏览器的用户代理字符串                                   |
  | vendor                        | 返回浏览器的厂商名称                                         |
  | vendorSub                     | 返回浏览器厂商的更多信息                                     |
  | vibrate()                     | 触发设备振动                                                 |
  | webdriver                     | 返回浏览器当前是否被自动化程序粗控制                         |



## 8.7 screen对象（很少使用）

- screen主要记录的是浏览器窗口外面的客户端显示器的信息：

  - 比如屏幕的逻辑像素 screen.width、screen.height；

    | 属性        | 说明                                         |
    | ----------- | -------------------------------------------- |
    | availHeight | 屏幕像素高度减去系统组件高度（只读）         |
    | availLeft   | 没有被系统组件占用的屏幕的最左侧像素（只读） |
    | availTop    | 没有被系统组件占用的屏幕的最顶端像素（只读） |
    | availWidth  | 屏幕像素宽度减去系统组件宽度（只读）         |
    | colorDepth  | 表示屏幕颜色的位数：多数系统是32（只读）     |
    | height      | 屏幕像素高度                                 |
    | left        | 当前屏幕左边的像素距离                       |
    | pixelDepth  | 屏幕的位深（只读）                           |
    | top         | 当前屏幕顶端的像素距离                       |
    | width       | 屏幕像素高度                                 |
    | orientation | 返回 Screen Orientation API 中屏幕的朝向     |



## 8.8 JSON

- 在目前的开发中，JSON是一种非常重要的`数据格式`，它并不是`编程语言`，而是一种可以在服务器和客户端之间传输的数据格式。
- **JSON的全称是JavaScript Object Notation（JavaScript对象符号）：**
  
  - JSON是由`Douglas Crockford构想和设计的一种轻量级资料交换格式，算是JavaScript的一个子集`；
  - 虽然`JSON被提出来的时候是主要应用JavaScript中，但是目前已经独立于编程语言，可以在各个编程语言中`使用；
- 很多编程语言都实现了`将JSON转成对应模型的方式`；
  
- **其他的传输格式：**

  - `XML`：在早期的网络传输中主要是使用XML来进行数据交换的，但是这种格式在解析、传输等各方面都弱于JSON，所以目前已经很少在被使用了；
  - `Protobuf`：另外一个在网络传输中目前已经越来越多使用的传输格式是protobuf，但是直到2021年的3.x版本才支持JavaScript，所以目前在前端使用的较少；

- **目前JSON被使用的场景也越来越多：**

  - `网络数据的传输JSON数据`；
  - `项目的某些配置文件`；
  - `非关系型数据库（NoSQL）将json作为存储格式`；

- **JSON的顶层支持三种类型的值**：

  - `简单值`：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型；

  - `对象值`：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值；

  - `数组值`：数组的值可以是简单值、对象值、数组值；

    ```json
    123
    
    {
      name: 'why',
      "age": 18,
      "friend": {
      	"name": "kobe"
      }
    }
    
    [
      123,
      "abc",
      {
        "name": "kobe"
      }
    ]
    ```

- 在ES5中引用了**JSON全局对象**，该对象有两个**常用的方法**：

  - `stringify方法`：将JavaScript类型转成对应的JSON字符串；
  - `parse方法`：解析JSON字符串，转回对应的JavaScript类型；

- 那么上面的代码我们可以通过如下的方法来使用：

  ```JavaScript
  // 转成字符串保存
  const objString = JSON.stringify(obj)
  localStorage.setItem("info", objString)
  
  // 获取字符串转回对象
  const itemString = localStorage.getItem("info")
  const info = JSON.parse(itemString)
  console.log(info)
  ```

- **JSON.stringify()** 方法**将一个 JavaScript 对象或值转换为 JSON 字符串**：

  - 如果指定了一个 `replacer 函数`，则可以`选择性地替换值`；

  - 如果`指定的 replacer 是数组`，则可`选择性地仅包含数组指定的属性`；

    ```javascript
    // 转成字符串
    const objString1 = JSON.stringify(obj)
    // {"name":"why","age":18,"friend":{"name:kobe"},"hobbies":["篮球","足球","乒乓球"]}
    console.log(objString1)
    
    // replace参数是一个数组	
    const objString2 = JSSON.stringify(obj, ["name","age"])
    // {"name":"why","age":18}
    console.log(objString2)
    
    // replace参数是一个函数
    const objString3 = JSON.stringify(obj, (key,value) =>{
      console.log(key, value)
      if (key === "name"){
        return "chenzhuolin"
      }
      return value
    })
    
    // {"name":"chenzhuolin","age":18,"friend":{"name:kobe"},"hobbies":["篮球","足球","乒乓球"]}
    console.log(objString3)
    ```

  - 如果**对象本身包含toJSON方法**，那么**会直接使用toJSON方法**的结果：

    ```JavaScript
    const obj = {
      name: "why",
      age: 18,
      friend: {
        name: "kobe"
      },
      hobbies: ['篮球','足球','乒乓球'],
      toJSON: function(){
        return "chenzhuolin"
      }
    }
    
    const objString5 = JSON.stringify(obj)
    console.log(objString5) // chenzhuolin
    ```

- **JSON.parse()** 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。

  - 提供可选的 **reviver** 函数用以在返回之前对所得到的对象执行变换(操作)。

    ```javascript
    // 转回对象,并且转换某些值
    const info2 = JSON.parse(objString, (key, value) => {
      if (key === "time") {
        return new Date(value)
      }
      return value
    })
    console.log(info2)
    ```



## 8.9 Storage

- **WebStorage主要提供了一种机制，可以让浏览器提供一种比cookie更直观的key、value存储方式：**

  - `localStorage`：本地存储，提供的是一种`永久性的存储方法`，在关闭掉网页重新打开时，存储的内容依然保留；

  - `sessionStorage`：会话存储，提供的是`本次会话的存储`，在关闭掉会话时，存储的内容会被清除；

    ```javascript
    localStorage.setItem("name", "localStorage")
    sessionStorage.setItem("name", "sessionStorage")
    ```

- ###### localStorage和sessionStorage的区别

  - **验证一**：关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除；
  - **验证二**：在页面内实现跳转，localStorage会保留，sessionStorage也会保留；
  - **验证三**：在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留；

- ###### Storage常见的属性

  - `Storage.length`：只读属性
    - 返回一个整数，表示存储在Storage对象中的数据项数量；

- ###### Storage常见的方法

  - `Storage.key()`：该方法接受一个数值n作为参数，返回存储中的第n个key名称；

  - `Storage.getItem()`：该方法接受一个key作为参数，并且返回key对应的value；

  - `Storage.setItem()`：该方法接受一个key和value，并且将会把key和value添加到存储中。

    - 如果key存储，则更新其对应的值；

  - `Storage.removeItem()`：该方法接受一个key作为参数，并把该key从存储中删除；

  - `Storage.clear()`：该方法的作用是清空存储中的所有key；

    













