

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

### 2.2.1 数字表示的范围

- 最小正数值：`Number.MIN_VALUE`，这个值为： 5e-324，小于这个的数字会被转化为0
- 最大正数值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308
- `Number.MAX_SAFE_INTEGER`：JavaScript 中最大的安全整数 (2^53 - 1)；
- `Number.MIN_SAFE_INTEGER`：JavaScript 中最小的安全整数 -(2^53 - 1)

### 2.2.2 isNaN方法

- 用于判断是否不是一个数字。不是数字返回 true，是数字返回 false。

### 2.2.3 Number实例方法:

- 方法一：`toString(base)`，将数字转成字符串，并且按照base进制进行转化
  - base 的范围可以从 2 到 36，默认情况下是 10；
- 方法二：`toFixed(digits)`，格式化一个数字，保留digits位的小数；
  - digits的范围是0到20（包含）之间；
- **Number类方法:**
  - 方法一：`Number.parseInt(string[, radix])`，将字符串解析成整数，也有对应的全局方法parseInt；
  - 方法二：`Number. parseFloat(string)`，将字符串解析成浮点数，也有对应的全局方法parseFloat；



## 2.3 String类型

### 2.3.1 创建字符串的方式

```JavaScript
var name = '陈卓林'
var address = "广州市"
// ES6语法
var description = `${name}是${address}的人`
```

### 2.3.2 字符串拼接

```JavaScript
var str1 = 'hello'
var str2 = 'world'
var newStr = str1 + str2

// 语法: str.concat(str2,[, ...strN])
'hello'.concat('world',['你好'])
```

### 2.3.3 获取字符串长度

```javascript
console.log(newStr.length)

```

### 2.3.4 访问字符串的字符

- 使用方法一：通过字符串的索引` str[0]`
- 使用方法二：通过`str.charAt(pos)`方法
- 它们的区别是索引的方式没有找到会返回`undefined`，而`charAt`没有找到会返回空字符串；

### 2.3.5 修改字符串(大小写)

- toLowerCase()：将所有的字符转成小写；

- toUpperCase() ：将所有的字符转成大写；

  ```JavaScript
  var message = 'Hello'
  message.toLowerCase() // hello
  message.toUpperCase() // HELLO
  
  ```

### 2.3.6 查找字符串位置 

- 语法:  `str.indexOf(search [, fromIndex])`
  - 从fromIndex开始，查找searchValue的索引；
  - 如果没有找到，那么返回-1；
- 有一个相似的方法，叫lastIndexOf，从最后开始查找（用的较少）

### 2.3.7 是否包含字符串

- 语法:  `str.includes(searchString[, position])`
  - 从position位置开始查找searchString， 根据情况返回 true 或 false
  - 这是ES6新增的方法

### 2.3.8 以xxx开头

- 语法: `str.startsWith(searchString[, position])`

  - 从position位置开始，判断字符串是否以searchString开头；

  - 这是ES6新增的方法，下面的方法也一样；

    ```javascript
    message.startsWith("czl")
    
    ```

### 2.3.9 以xxx结尾 

- 语法:  `str.endsWith(searchString[, length])`

  - 在length长度内，判断字符串是否以searchString结尾；

    ```javascript
    message.endsWith("czl")
    
    ```

### 2.3.10 替换字符串

- 语法:  `str.replace(regexp|substr, newstr, newSubStr|function)`

- 查找到对应的字符串，并且使用新的字符串进行替代；

- 这里也可以传入一个正则表达式来查找，也可以传入一个函数来替换；

  ```javascript
  message.replace("czl", "kobe")
  
  ```

### 2.3.11  获取子字符串

|           方法            |              选择方式……               |     负值参数      |
| :-----------------------: | :-----------------------------------: | :---------------: |
| slice(start, end) // 推荐 |      从 start 到 end（不含 end）      |       允许        |
|   substring(start, end)   |      从 start 到 end（不含 end）      |    负值代表 0     |
|   substr(start, length)   | 从 start 开始获取长为 length 的字符串 | 允许 start 为负数 |

### 2.3.12 删除首尾空格 

- 语法: `str.trim()`

### 2.3.13 字符串分割 

- 语法:  `str.split({separator,[, limit]})`

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

### 2.8.1 null和undefined的关系

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

### 5.2.1 Math常见的属性

- Math.PI：圆周率，约等于 3.14159；

### 5.2.2 Math常见的方法

- `Math.floor`：向下舍入取整
- `Math.ceil`：向上舍入取整
- `Math.round`: 四舍五入取整
- `Math.random`：生成0~1的随机数（包含0，不包含1）
- `Math.pow(x, y)`：返回x的y次幂



## 5.3 Array数组

### 5.3.1 访问数组中的元素

- 通过中括号[]访问
- arr.at(i)：
  - 如果 i >= 0，则与 arr[i] 完全相同。
  - 对于 i 为负数的情况，它则从数组的尾部向前数。

```javascript
const a = arr[0]
const b = arr.at(-1)

```

### 5.3.2 修改数组中的元素

```javascript
arr[0] = "czl"

```

### 5.3.3 push() 和 pop()

- `push `在末端添加元素

- `pop `从末端取出一个元素.

  ```javascript
  arr.push("abc","dhs")
  arr.pop()
  
  ```

### 5.3.4 unshift() 和 shift()

- `shift `取出队列首端的一个元素，整个数组元素向前前移动；

- `unshift `在首端添加元素，整个其他数组元素向后移动；

  ```javascript
  arr.unshift("curry")
  arr.shift()
  
  ```

- `push/pop` 方法运行的比较快，而 shift/unshift 比较慢。

### 5.3.5 arr.splice()

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

### 5.3.6 length属性

- 用于获取数组的长度
- 当我们修改数组的时候，length 属性会自动更新。
- `length` 属性是可写的
- 所以，清空数组最简单的方法就是：arr.length = 0。

### 5.3.7 数组的遍历

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

### 5.3.8 arr.slice() 

- 用于对数组进行截取
- 语法: `arr.slice(begin, end)`
  - 包含bigin元素，但是不包含end元素；

### 5.3.9 arr.concat()

- 创建一个新数组，其中包含来自于其他数组和其他项的值

  ```javascript
  var newArr = arr.concat(['abc'],"nba")
  
  ```

### 5.3.10 arr.join()

- 将一个数组的所有元素连接成一个字符串并返回这个字符串。

  ```javascript
  var arr = [1,2,3,4,5]
  var str = arr.join('0') // 1020304050
  
  ```

### 5.3.11 arr.indexOf()

- 语法: `arr.indexOf(searchElement,fromIndex)`
  - 从fromIndex开始查找，如果找到返回对应的索引，没有找到返回-1；
- 也有对应的从最后位置开始查找的 lastIndexOf 方法

### 5.3.12 arr.includes()

- 判断数组是否包含某个元素
- 语法: `arr.includes(valueToFind, fromIndex)`
  - 从索引 from 开始搜索 item，如果找到则返回 true（如果没找到，则返回 false）

### 5.3.13 find() 和 findIndex()

- 直接查找元素或者元素的索引（ES6之后新增的语法）

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

### 5.3.14 arr.sort()

- 一个高阶函数，用于对数组进行排序，并且生成一个排序后的新数组

- 语法: `arr.sort(compareFunction(a,b))`

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

### 5.3.15 arr.reverse()

- 将数组中元素的位置颠倒，并返回该数组。

### 5.3.16 arr.forEach()

- 遍历数组，并且让数组中每一个元素都执行一次对应的方法；

  ```javascript
  arr.forEach((item,index,arr)=>{})
  
  ```

### 5.3.17 arr.map()

- map() 方法创建一个新数组；
- 这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成；

```javascript
const newArr = arr.map((item,index,arr)=>{
  return item * 10
})

```

### 5.3.18 arr.filter()

- filter() 方法创建一个新数组；

- 新数组中只包含每个元素调用函数返回为true的元素；

  ```javascript
  const newArr = arr.filter((item,index,arr)=>{
    return item > 10
  })
  
  ```

### 5.3.19 arr.reduce()

- 用于计算数组中所有元素的总和；

- 对数组中的每个元素按序执行一个由您提供的 reducer 函数；

- 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值；

  ```javascript
  const newArr = arr.reduce((previousValue,currentValue)=>{
    return previousValue += currentValue
  },0)
  
  ```



## 5.4 Date对象

### 5.4.1 创建Date对象

```JavaScript
// 创建Date对象
var date = new Date(); // 当前时间（伊尔库茨克标准时间）
var date2 = new Date(1000); // 传入的毫秒数，表示从1970-01-01 00：00：00 UTC 经过的毫秒数
var date3 = new Date("2022-08-08"); // 传入的是datestring，日期的字符串值
// new Date(year,monthIndex [, day [, hours [, minutes [,seconds [, milliseconds]]]]])
var date4 = new Date(2022, 08, 08, 08, 08, 08, 08);

```

### 5.4.2 dateString时间的表示方式

- 默认打印的时间格式是RFC 2822标准的：

- ISO 8601 标准。

  ```JavaScript
  // RFC 2822标准
  new Date() // Thu Nov 03 2022 18:25:49 GMT+0800 (中国标准时间)
  
  // ISO 8601标准
  new Date().toISOString()  // 2022-11-03T10:26:01.251Z
  
  ```

### 5.4.3 Date获取信息的方法

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

### 5.4.4 Date设置信息的方法

```JavaScript
var dete = new Date()
// 2.也可以给date设置时间(了解)
date.setFullYear(2033);
// 自动校验
date.setDate(32);

```

### 5.4.5 Date获取Unix时间戳

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

### 5.4.6 Date.parse方法

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

### 6.9.1 属性attribute的分类

- 标准的attribute：某些attribute属性是标准的，比如id、class、href、type、value等；

- 非标准的attribute：某些attribute属性是自定义的，比如abc、age、height等；

  ```html
  <div class="box" id="main" name="why" abc="anc" age="18" height="1.88">
    哈哈哈哈
  </div>
  ```

### 6.9.2 attribute的操作

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

### 6.9.3 attribute具备的特征

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



## 6.15 元素的增删改查

### 6.15.1 创建元素

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

### 6.15.2 插入元素

- **插入元素的方式如下：**
  - `node.append(...nodes or strings)` —— 在 node 末尾 插入节点或字符串，
  - `node.prepend(...nodes or strings)` —— 在 node 开头 插入节点或字符串，
  - `node.before(...nodes or strings)` —— 在 node 前面 插入节点或字符串，
  - `node.after(...nodes or strings)` —— 在 node 后面 插入节点或字符串，
  - `node.replaceWith(...nodes or strings)` —— 将 node 替换为给定的节点或字符串。

### 6.15.3  移除和克隆元素

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

### 6.15.4 旧的元素操作方法

- `parentElem.appendChild(node)`：
  - 在parentElem的父元素最后位置添加一个子元素
- `parentElem.insertBefore(node, nextSibling)`：
  - 在parentElem的nextSibling前面插入一个子元素；
- `parentElem.replaceChild(node, oldChild)`：
  - 在parentElem中，新元素替换之前的oldChild元素；
- `parentElem.removeChild(node)`：
  - 在parentElem中，移除某一个元素；



## 6.16 元素的大小、滚动

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



## 6.17 window的大小、滚动

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

### 7.3.1 获取event对象

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

### 7.3.2 event常见的属性

- `type`：事件的类型；
- `target`：当前事件发生的元素；
- `currentTarget`：当前处理事件的元素；
- `eventPhase`：事件所处的阶段；
- `offsetX、offsetY`：事件发生在元素内的位置；
- `clientX、clientY`：事件发生在客户端内的位置；
- `pageX、pageY`：事件发生在客户端相对于document的位置；
- `screenX、screenY`：事件发生相对于屏幕的位置；

### 7.3.3 event常见的方法

- `preventDefault`：取消事件的默认行为；
- `stopPropagation`：阻止事件的进一步传递（冒泡或者捕获都可以阻止）；

### 7.3.4 事件处理中的this

- 在函数中，我们也可以通过this来获取当前的发生元素：

```javascript
boxEl.addEventListener("click", function(event){
  console.log(this === event.target) // true
})

```



## 7.4 EventTarget类

- **我们会发现，所有的节点、元素都继承自EventTarget**
  - 事实上Window也继承自`EventTarget`；

### 7.4.1 EventTarget的作用

- EventTarget是一个`DOM接口`，主要用于`添加、删除、派发Event事件`；

### 7.4.2 EventTarget常见的方法

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

- **`setTimeout`的语法：`let timeId = setTimeout(func|code,[delay],[arg1],[aeg2],...)**`

  - `func|code`：想要执行的函数或代码字符串。
  - `delay`：执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），默认值是 0；
  - `arg1，arg2…`：要传入被执行函数（或代码字符串）的参数列表；

- **clearTimeout方法**

  - `setTimeout `在调用时会返回一个`“定时器标识符（timer identifier）”`，我们可以使用它来取消执行。

    ```javascript
    var timeID = setTimeout(function(name,age){
      console.log("定时器：",name,age)
    },2000,"why",18)
    clearTimeout(timeID)
    
    ```

- **`setInterval`的语法：`let timeId = setInterval(func|code,[delay],[arg1],[aeg2],...)`**

  - `func|code`：想要执行的函数或代码字符串。
  - `delay`：执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），默认值是 0；
  - `arg1，arg2…`：要传入被执行函数（或代码字符串）的参数列表；

- `clearInterval`**方法**

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

### 8.2.1 window常见的属性

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

### 8.2.2 window常见的方法

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

### 8.2.3 window常见的事件

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

### 8.3.1 location对象常见的属性

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

### 8.3.2 location对象常见的方法

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

### 8.4.1 URLSearchParams常见的方法如下

- `get`：获取搜索参数的值；
- `set`：设置一个搜索参数和值；
- `append`：追加一个搜索参数和值；
- `has`：判断是否有某个搜索参数；



## 8.5 history对象

- history对象允许我们访问浏览器曾经的会话历史记录。

### 8.5.1 两个属性

- `length`：会话中的记录条数；
- `state`：当前保留的状态值；

### 8.5.2 五个方法

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

### 8.8.1 JSON的由来

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

### 8.8.2 JSON基本语法

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

### 8.8.3 JSON序列化

- **某些情况下我们希望将JavaScript中的复杂类型转化成JSON格式的字符串，这样方便对其进行处理：**

  - 比如我们希望将一个对象保存到localStorage中；

  - 但是如果我们直接存放一个对象，这个对象会被转化成 [object Object] 格式的字符串，并不是我们想要的结果；

    ```javascript
    const obj = {
      name: "why",
      age: 18,
      friend: {
        name: 'kobe'
      },
      hobbies: ['篮球', '足球', '乒乓球']
    }
    ```

### 8.8.4 JSON序列化方法

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

### 8.8.5 Stringify的参数replace

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

### 8.8.6 Stringify的参数space

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

### 8.8.7 parse方法

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



# 九、JavaScript函数this指向

## 9.1 this的绑定规则

### 9.1.1 规则一：默认绑定

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

### 9.1.2 规则二：隐式绑定

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

### 9.1.3 规则三：显式绑定

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

### 9.1.4 call、apply、bind

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

### 9.1.5 new绑定

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



## 9.2 规则优先级

1. **默认规则的优先级最低**
2. **显示绑定优先级高于隐式绑定**
3. n**ew绑定优先级高于隐式绑定**
4. **new绑定优先级高于bind**
   - new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高
   - new绑定可以和bind一起使用，new绑定优先级更高



## 9.3 this规则之外

### 9.3.1 忽略显示绑定

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

### 9.3.2 间接函数引用

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

### 9.3.3 ES6箭头函数

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



# 十、深入浏览器的渲染原理

## 10.1 浏览器的内核

- **常见的浏览器内核:**
  - `Trident `（ 三叉戟）：IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器；
  - `Gecko`（ 壁虎） ：Mozilla Firefox；
  - `Presto`（急板乐曲）-> `Blink `（眨眼）：Opera
  - `Webkit `：Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器（Android、iOS）
  - `Webkit `-> `Blink `：Google Chrome，Edge
- 我们经常说的浏览器内核指的是浏览器的排版引擎：
  
  - **排版引擎**（layout engine），也称为**浏览器引擎**（browser engine）、**页面渲染引擎**（rendering engine）或**样版引擎**。
- 也就是一个网页下载下来后，就是由我们的渲染引擎来帮助我们解析的。



## 10.2 渲染引擎解析页面的详细流程

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



## 10.3 回流和重绘

### 10.3.1 理解回流(重排)reflow

- 第一次确定节点的大小和位置，称之为布局（layout）。
- 之后对节点的大小、位置修改重新计算称之为回流。

### 10.3.2 什么情况下引起回流呢？

- 比如DOM结构发生改变（添加新的节点或者移除节点）；
- 比如改变了布局（修改了width、height、padding、font-size等值）
- 比如窗口resize（修改了窗口的尺寸等）
- 比如调用getComputedStyle方法获取尺寸、位置信息；

### 10.3.3 理解重绘repaint

- 第一次渲染内容称之为绘制（paint）。
- 之后重新渲染称之为重绘。

### 10.3.4 什么情况下会引起重绘呢？

- 比如修改背景色、文字颜色、边框颜色、样式等；
- 回流一定会引起重绘，所以回流是一件很消耗性能的事情。

### 10.3.5 避免回流的方式

1. 修改样式时`尽量一次性修改`;
   - 比如通过cssText修改，比如通过添加class修改
2. 尽量`避免频繁的操作DOM`;
   - 我们可以在一个DocumentFragment或者父元素中将要操作的DOM操作完成，再一次性的操作；
3. 尽量`避免通过getComputedStyle获取尺寸、位置`等信息；
4. 对`某些元素使用position的absolute或者fixed`
   - 并不是不会引起回流，而是开销相对较小，不会对其他元素造成影响。



## 10.4 特殊解析 – composite合成

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



## 10.5 script元素和页面解析的关系

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



## 10.6 defer属性

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



## 10 .7 async属性

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

  

# 十一、深入JavaScript的运行原理

## 11.1 JavaScript代码的执行

- **JavaScript代码下载好之后，是如何一步步被执行的呢？**
- **我们知道，浏览器内核是由两部分组成的，以webkit为例：**
  - `WebCore`：负责HTML解析、布局、渲染等等相关的工作；
  - `JavaScriptCore`：解析、执行JavaScript代码；
- **另外一个强大的JavaScript引擎就是V8引擎。**



## 11.2 V8引擎

### 11.2.1 V8引擎的执行原理

- **我们来看一下官方对V8引擎的定义：**

  - V8是用`C ++编写`的Google开源`高性能JavaScript和WebAssembly引擎`，它用于`Chrome和Node.js`等。
  - 它实现`ECMAScript`和`WebAssembly`，并在Windows 7或更高版本，macOS 10.12+和使用x64，IA-32，ARM或MIPS处理
    器的Linux系统上运行。
  - `V8可以独立运行，也可以嵌入到任何C ++应用程序中`。

  [![1668140292484](https://s1.ax1x.com/2022/11/11/zCED2T.png)]()

### 11.2.2 V8引擎的架构

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

### 11.2.3 V8引擎的解析图（官方）

[![image](https://s1.ax1x.com/2022/11/11/zCE5RK.png)]()

### 11.2.4 V8引擎的解析图

[![image](https://s1.ax1x.com/2022/11/11/zCEHqH.png)]()



## 11.3 初始化全局对象

- js引擎会在`执行代码之前`，会在`堆内存中创建一个全局对象`：Global Object（GO）
  - 该对象 `所有的作用域（scope）`都可以访问；
  
  - 里面会包含`Date、Array、String、Number、setTimeout、setInterval`等等；
  
  - 其中还有一个`window属性`指向自己；
  
    ![image](https://s1.ax1x.com/2022/11/11/zCELdA.png)



## 11.4 执行上下文（ Execution Contexts ）

- js引擎内部有一个**执行上下文栈（Execution Context Stack，简称ECS）**，它是用于执行**代码的调用栈**。
- 那么现在它要执行谁呢？执行的是**全局的代码块**：
  - 全局的代码块为了执行会构建一个 **Global Execution Context（GEC）**；
  - GEC会 `被放入到ECS中` 执行；
- **GEC被放入到ECS中里面包含两部分内容：**
  - **第一部分**：在代码执行前，在`parser转成AST的过程`中，会将`全局定义的变量、函数`等加入到`GlobalObject`中，但是并`不会
    赋值`，这个过程也称之为`变量的作用域提升（hoisting）`；
  - **第二部分**：在代码执行中，对变量赋值，或者执行其他的函数；



## 11.5 认识VO对象（Variable Object）

- **每一个执行上下文会关联一个`VO（Variable Object，变量对象），变量和函数声明`会被添加到这个VO对象中**。
- **当全局代码被执行的时候，VO就是GO对象了**



## 11.6  全局代码执行过程

### 11.6.1 执行前

![](https://s1.ax1x.com/2022/11/11/zCZP1K.png)

### 11.6.2 执行后

![](https://s1.ax1x.com/2022/11/11/zCZE0H.png)



## 11.7 函数如何被执行呢？

- 在执行的过程中**执行到一个函数时**，就会根据**函数体**创建一个**函数执行上下文（Functional Execution Context，简称FEC）**，
  并且压入到**EC Stack**中。
- **因为每个执行上下文都会关联一个VO，那么函数执行上下文关联的VO是什么呢？**
  - 当进入一个函数执行上下文时，会创建一个`AO对象（Activation Object）`；
  - 这个AO对象会`使用arguments作为初始化`，并且`初始值是传入的参数`；
  - 这个`AO对象会作为执行上下文的VO来存放变量的初始化`；



## 11.8 函数的执行过程

### 11.8.1 执行前

![](https://s1.ax1x.com/2022/11/11/zCZYAs.png)

### 11.8.2 执行后

![](https://s1.ax1x.com/2022/11/11/zCZa90.png)



## 11.9 作用域和作用域链（Scope Chain）

- **当进入到一个执行上下文时，执行上下文也会关联一个作用域链（Scope Chain）**
  - `作用域链是一个对象列表`，用于变量标识符的求值；
  - 当进入一个执行上下文时，这个`作用域链被创建，并且根据代码类型，添加一系列的对象`；
  
    ![](https://s1.ax1x.com/2022/11/11/zCZcNR.png)

# 十二、JavaScript内存管理和闭包

## 12.1 认识内存管理

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



## 12.2 JavaScript的内存管理

- JavaScript会在**定义数据时**为我们分配内存。
- **但是内存分配方式是一样的吗？**
  - JS对于`原始数据类型内存的分配`会在执行时，直接在栈空间进行分配；
  
  - JS对于`复杂数据类型内存的分配`会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用；
  
    ![](https://s1.ax1x.com/2022/11/11/zCZ5uD.png)



## 12.3 JavaScript的垃圾回收

- 因为**内存的大小是有限**的，所以当**内存不再需要的时候**，我们需要**对其进行释放**，以便腾出**更多的内存空间**。
- 在**手动管理内存的语言**中，我们需要通过**一些方式自己来释放不再需要的内存，比如free函数**：
  - 但是这种管理的方式其实`非常的低效`，影响我们`编写逻辑的代码的效率`；
  - 并且这种方式对`开发者的要求也很高`，并且`一不小心就会产生内存泄露`；
- 所以大部分**现代的编程语言都是有自己的垃圾回收机制**：
  - 垃圾回收的英文是`Garbage Collection`，简称`GC`；
  - 对于`那些不再使用的对象`，我们都称之为是`垃圾`，它需要被`回收`，以释放更多的内存空间；
  - 而我们的语言运行环境，比如Java的运行环境JVM，JavaScript的运行环境js引擎都会内存 `垃圾回收器`；
  - `垃圾回收器`我们也会简称为`GC`，所以在很多地方你看到GC其实指的是垃圾回收器；



## 12.4 常见的GC算法

### 12.4.1 引用计数

- 当`一个对象有一个引用指向它`时，那么这个`对象的引用就+1`；

- 当一个`对象的引用为0`时，这个对象就`可以被销毁掉`；

- 这个算法有一个很大的弊端就是会产生循环引用；

  ![](https://s1.ax1x.com/2022/11/11/zCZHUA.png)

### 12.4.2 标记清除

- 标记清除的核心思路是`可达性（Reachability）`

- 这个算法是设置一个`根对象（root object），垃圾回收器`会定期`从这个根`开始，找所有从根开始`有引用到的对象`，对于那些`没有引用到的对象，就认为是不可用的对象`；

- 这个算法`可以很好的解决循环引用`的问题；

  ![](https://s1.ax1x.com/2022/11/11/zCZjv8.png)

### 12.4.3 其他算法优化补充

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



## 12.5 闭包的定义

- **MDN对JavaScript闭包的解释**
  - 一个函数和对其周围状态**（lexical environment，词法环境）**的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包（closure）**；
  - 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域；
  - 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来；
- **个人理解和总结**
  - 一个普通的函数function，如果它可以访问外层作用域的自由变量，那么这个函数和周围环境就是一个闭包；
  - `从广义的角度来说：JavaScript中的函数都是闭包；`
  - `从广义的角度来说：JavaScript中的函数都是闭包；`



## 12.6 闭包的内存泄漏

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

### 12.6.1 闭包的内存泄漏测试

![](https://s1.ax1x.com/2022/11/11/zCeEvT.png)



## 12.7 AO不使用的属性优化

- **我们来研究一个问题：AO对象不会被销毁时，是否里面的所有属性都不会被释放？**

  - 下面这段代码中name属于闭包的父作用域里面的变量；

  - 我们知道形成闭包之后count一定不会被销毁掉，那么name是否会被销毁掉呢？

  - 这里我打上了断点，我们可以在浏览器上看看结果；`name is not defined`

    ![](https://s1.ax1x.com/2022/11/11/zCe8xK.png)

# 十三、JavaScript中的函数

## 13.1 函数的返回值

- 使用`return关键字`来返回结果；
- 一旦在`函数中执行return操作`，那么当前函数会`终止`；
- 如果函数中没有使用 return语句 ，那么函数有默认的返回值：`undefined`；
- 如果函数使用 return语句，但是`return`后面没有任何值，那么函数的返回值也是：`undefined`；



## 13.2 arguments参数

- 默认情况下，arguments对象是所有（非箭头）函数中都可用的局部变量；
- 该对象中存放着所有的调用者传入的参数，从0位置开始，依次存放；
- arguments变量的类型是一个object类型（ array-like ），不是一个数组，但是和数组的用法看起来很相似；
- 如果调用者传入的参数多余函数接收的参数，可以通过arguments去获取所有的参数；



## 13.3 递归函数

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



## 13.4 局部变量和外部变量

- **在JavaScript（ES5之前）中没有块级作用域的概念，但是函数可以定义自己的作用域。**
  
  - 作用域（Scope）表示一些标识符的作用有效范围（所以也有被翻译为有效范围的）；
  - 函数的作用域表示在函数内部定义的变量，只有在函数内部可以被访问到；

### 13.4.1 外部变量和局部变量的概念

- 定义在函数内部的变量，被称之为局部变量（Local Variables）。
- 定义在函数外部的变量，被称之为外部变量（Outer Variables）。

### 13.4.2 什么是全局变量？

- 在函数之外声明的变量（在script中声明的），称之为全局变量。
- 全局变量在任何函数中都是可见的。
- 通过var声明的全局变量会在window对象上添加一个属性（了解）；

### 13.4.3 在函数中，变量的访问顺序

- 优先访问自己函数中的变量，没有找到时，在外部中访问。



## 13.5 函数声明 vs 函数表达式

- **首先，语法不同：**
  - 函数声明：在主代码流中声明为单独的语句的函数。
  - 函数表达式：在一个表达式中或另一个语法结构中创建的函数。
- **其次，JavaScript创建函数的时机是不同的：**
  - 函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。
  - 在函数声明被定义之前，它就可以被调用



## 13.6 回调函数（Callback Function）

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



## 13.7 立即执行函数

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



## 13.8 函数对象的属性

- `属性name`：一个函数的名词我们可以通过name来访问

- `属性length`：属性length用于返回函数参数的个数；

  - 注意：rest参数是不参与参数的个数的；

  ```JavaScript
  function foo(name, age) {
    
  }
  foo.name // foo
  foo.length // 2
  ```



## 13.9 arguments

- **arguments** 是一个 对应于 **传递给函数的参数** 的 **类数组(array-like)对象**。

- array-like意味着它不是一个数组类型，而是一个对象类型：

  - 但是它却拥有数组的一些特性，比如说length，比如可以通过index索引来访问；
  - 但是它却没有数组的一些方法，比如filter、map等；

- **箭头函数是不绑定arguments的，所以我们在箭头函数中使用arguments会去上层作用域查找**

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

### 13.9.1 arguments转Array

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



## 13.10 JavaScript纯函数

### 13.10.1 理解JavaScript纯函数

- **纯函数的维基百科定义：**
  - 在程序设计中，若一个函数`符合以下条件`，那么这个函数被称为纯函数：
  - 此函数`在相同的输入值时`，需`产生相同的输出`。
  - 函数的`输出和输入值以外的其他隐藏信息或状态无关`，也和`由I/O设备产生的外部输出`无关。
  - 该函数`不能有语义上可观察的函数副作用`，诸如`“触发事件”`，`使输出设备输出，或更改输出值以外物件的内容`等。

- **简单总结:**
  - `确定的输入，一定会产生确定的输出`；
  - `函数在执行过程中，不能产生副作用`；

### 13.10.2 副作用概念的理解

- **副作用（side effect）**其实本身是医学的一个概念，比如我们经常说吃什么药本来是为了治病，可能会产生一些其他的副作用；
- 在计算机科学中，也引用了副作用的概念，表示`在执行一个函数`时，除了`返回函数值`之外，还对`调用函数产生了附加的影响`，比如`修改了全局变量，修改参数或者改变外部的存储`;
- **纯函数在执行的过程中就是不能产生这样的副作用，副作用往往是产生`bug的 “温床”`。**

### 13.10.3 纯函数的案例

- **我们来看一个对数组操作的两个函数：**

  - `slice`：截取数组时不会对原数组进行任何操作,而是生成一个新的数组；
  - `splice`：截取数组, 会返回一个新的数组, 也会对原数组进行修改；

- **slice就是一个纯函数，不会修改数组本身，而splice函数不是一个纯函数；**

  ```javascript
  var names = ['abc','cba','nba']
  
  var newNames = names.slice(0, 2)
  
  var newNames2 = names.splice(0, 2)
  ```

### 13.10.4 纯函数的作用和优势

- 可以`安心的编写和安心的使用`；
- 在`写的时候`保证了函数的纯度，只是`单纯实现自己的业务逻辑`即可，`不需要关心传入的内容`是如何获得的或者依赖`其他的外部变量`是否已经发生了修改；
- 在`用的时候`，你确定`你的输入内容不会被任意篡改`，并且`自己确定的输入`，一定会`有确定的输出`；



## 13.11 函数柯里化

### 13.11.1 柯里化概念的理解

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

### 13.11.2 柯里化的代码转换

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

### 13.11.3 柯里化优势

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

### 13.11.4 柯里化案例练习

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

### 13.11.5 自动柯里化函数

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



## 13.12 组合函数

### 13.12.1 组合函数概念的理解

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

### 13.12.2 实现组合函数

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



## 13.13 with语句的使用

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



## 13.14 eval函数

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



## 13.15 严格模式

### 13.15.1 认识严格模式

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

### 13.15.2 开启严格模式

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

### 13.15.3 严格模式限制

1. 无法意外的创建全局变量
2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
3. 严格模式下试图删除不可删除的属性
4. 严格模式不允许函数参数有相同的名称
5. 不允许0的八进制语法
6. 在严格模式下，不允许使用with
7. 在严格模式下，eval不再为上层引用变量
8. 严格模式下，this绑定不会默认转成对象



## 13.16 手写apply、call、bind函数实现

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



# 十四、JavaScript中的对象

## 14.1 对象的常见操作

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



## 14.2 对象的遍历

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



## 14.3 栈内存和堆内存

- **原始类型**占据的空间是在**栈内存**中分配的；
  - **原始类型的保存方式**：在变量中保存的是值本身，所以原始类型也被称之为值类型
- **对象类型**占据的空间是在**堆内存**中分配的；
  - **对象类型的保存方式**：在变量中保存的是对象的“引用”，所以对象类型也被称之为引用类型；



## 14.4 this指向什么？

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



## 14.5 创建对象的方案

### 14.5.1 工厂函数创建
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

### 14.5.2 构造函数（类)创建

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



## 14.6 JavaScript中的类（ES5）

- **JavaScript中的构造函数是怎么样的**？
  - 构造函数也是一个普通的函数，从表现形式来说，和千千万万个普通的函数没有任何区别；
  - 那么如果这么一个普通的函数被使用new操作符来调用了，那么这个函数就称之为是一个构造函数；
- **如果一个函数被使用new操作符调用了，那么它会执行如下操作**：
  1. 在内存中创建一个新的对象（空对象）；
  2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；
  3. 构造函数内部的this，会指向创建出来的新对象；
  4. 执行函数的内部代码（函数体代码）；
  5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；



## 14.7 属性描述符

### 14.7.1 对属性操作的控制

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

### 14.7.2 Object.defineProperty

- **Object.defineProperty()** 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
  - `Object.defineProperty(obj, prop, descriptor)`
- 可接收三个参数：
  - obj要定义属性的对象；
  - prop要定义或修改的属性的名称或 Symbol；
  - descriptor要定义或修改的属性描述符；
- 返回值：
  - 被传递给函数的对象。

### 14.7.3 属性描述符分类
- 属性描述符的类型有两种：

  - `数据属性`（Data Properties）描述符（Descriptor）；

  - `存取属性`（Accessor访问器 Properties）描述符（Descriptor）；

  |            | configurable | enumerable | value | writable | get  | set  |
  | ---------- | :----------: | :--------: | :---: | :------: | :--: | :--: |
  | 数据描述符 |      √       |     √      |   √   |    √     |  ×   |  ×   |
  | 存取描述符 |      √       |     √      |   ×   |    ×     |  √   |  √   |

### 14.7.4 数据属性描述符

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
  
    ```javascript
    const obj = {
      name: "why",
      age: 18,
      height: 1.88
    }
    
    Object.defineProperty(obj, "address", {
      Configurable:false,
      Enumerable:false,
      Writable:false,
      value: '湖南'
    })
    ```

### 14.7.5 存取属性描述符

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

### 14.7.6 同时定义多个属性

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



## 14.8 对象方法补充

### 14.8.1 获取对象的属性描述符

- getOwnPropertyDescriptor
- getOwnPropertyDescriptors

### 14.8.2 preventExtensions

- 禁止对象扩展新属性

- 给一个对象添加新的属性会失败（在严格模式下会报错）；

### 14.8.3 seal

- 密封对象，不允许配置和删除属性

- 实际是调用preventExtensions
- 并且将现有属性的configurable:false

### 14.8.4 freeze

- 冻结对象，不允许修改现有属性

- 实际上是调用seal
- 并且将现有属性的writable: false

### 14.8.5 hasOwnProperty

- 对象是否有某一个属于自己的属性（不是在原型上的属性）

### 14.8.6 in/for in 操作符

- 判断某个属性是否在某个对象或者对象的原型上

### 14.8.7 instanceof

- 用于检测`构造函数（Person、Student类）的pototype`，是否出现在`某个实例对象的原型链`上

### 14.8.8 isPrototypeOf

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



# 十五、JavaScript ES5中实现继承

## 15.1 对象和函数的原型

### 15.1.1 认识对象的原型

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

### 15.1.2 函数的原型 prototype

- **新的概念：所有的函数都有一个prototype的属性（注意：不是__proto__）**

  ```javascript
  function foo(){}
  
  // 所有的函数都有一个属性，叫prototype
  console.log(foo.prototype)
  ```

- 是不是因为函数是一个对象，所以它有prototype的属性呢？

  - 不是的，因为它是一个函数，才有了这个特殊的属性；
  - 而不是它是一个对象，所以有这个特殊的属性；

  ```javascript
  var obj = {}
  
  obj.prototype // obj就没有这个属性
  ```



## 15.2 创建对象的内存表现

![](https://s1.ax1x.com/2022/11/11/zCVEiq.png)



## 15.3 constructor属性

- 事实上原型对象上面是有一个属性的：**constructor**

  - 默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象；

  ```JavaScript
  function Person() {
    
  }
  
  Person.prototype.constructor // [Function: Person]
  p1.__proto__.constructor // [Function: Person]
  p1.__proto__.constructor.name // Person
  ```


### 15.3.1 原型对象的constructor

- 如果希望constructor指向Person，那么可以手动添加：

- 方式一虽然可以, 但是也会造成constructor的[[Enumerable]]特性被设置了true.

  - 默认情况下, 原生的constructor属性是不可枚举的.
  - 如果希望解决这个问题, 就可以使用我们前面介绍的Object.defineProperty()函数了.

  ```javascript
  // 方式一
  Person.prototype = {
    constructor: Person,
    name: 'czl'
  }
  
  // 方式二
  Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
  })
  ```



## 15.4 创建对象 – 构造函数和原型组合

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



## 15.5 面向对象的特性 – 继承

- 面向对象有三大特性：封装、继承、多态
  - 封装：我们前面将属性和方法封装到一个类中，可以称之为封装的过程；
  - 继承：继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提（纯面向对象中）；
  - 多态：不同的对象在执行时表现出不同的形态；
- **那么继承是做什么呢？**
  - 继承可以帮助我们`将重复的代码和逻辑抽取到父类`中，子类只需要直接继承过来使用即可；
  - 在很多编程语言中，`继承也是多态的前提`；



## 15.6 JavaScript原型链

- 从一个对象上获取属性，如果在当前对象中没有获取到就会去它的**原型**上面获取：

- 原型里面还有原型，直到找到该属性为止，如果没有找到，最终会指向Object对象的原型，值为null，

- 这样的原型嵌套称为原型链。

  ![](https://s1.ax1x.com/2022/11/11/zCmQeg.png)

### 15.6.1 Object的原型

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

### 15.6.2 创建Object对象的内存图

![](https://s1.ax1x.com/2022/11/11/zCm8Fs.png)

### 15.6.3 原型链关系的内存图

![](https://s1.ax1x.com/2022/11/11/zCmGYn.png)

### 15.6.4 Object是所有类的父类

- **从我们上面的Object原型我们可以得出一个结论：`原型链最顶层的原型对象就是Object的原型对象`**

  ![1667877293238](https://s1.ax1x.com/2022/11/11/zCVJW6.png)



## 15.7 原型链继承

### 15.7.1 通过原型链实现继承

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

### 15.7.2 继承创建对象的内存图

![](https://s1.ax1x.com/2022/11/11/zCmtS0.png)

### 15.7.3 原型链继承的弊端

- **目前有一个很大的弊端：某些属性其实是保存在p对象上的;**
  - 第一，我们通过`直接打印对象是看不到这个属性`的；
  - 第二，这个属性`会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题`；
  - 第三，`不能给Person传递参数`（让每个stu有自己的属性），因为这个对象是一次性创建的（没办法定制化）；



## 15.8 组合继承

### 15.7.3 借用构造函数继承

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

### 15.7.4 组合借用继承的问题

- 组合继承最大的问题就是无论在什么情况下，都会`调用两次父类构造函数`。
  - 一次在创建子类原型的时候；
  - 另一次在子类构造函数内部(也就是每次创建子类实例的时候)；
- 所有的子类实例事实上会拥有两份父类的属性:
  - 一份在当前的实例自己里面(也就是person本身的)，另一份在子类对应的原型对象中(也就是person.__proto__里面)；
  - 当然，这两份属性我们无需担心访问出现问题，因为默认一定是访问实例本身这一部分的；



## 15.9 寄生组合式继承

### 15.8.1 原型式继承函数

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

### 15.8.2 寄生式继承函数

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

### 15.8.3 寄生组合式继承

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



# 十六、JavaScript ES6实现继承

## 16.1 认识class定义类

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



## 16.2 类和构造函数的异同

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



## 16.3 类的构造函数

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



## 16.4 类的实例方法

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



## 16.5 类的访问器方法

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



## 16.6 类的静态方法

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



## 16.7 ES6类的继承 - extends

- 在ES6中新增了使用extends关键字，可以方便的帮助我们实现继承：

  ```javascript
  class Person {
  
  }
  
  class Student extends Person {
  
  }
  ```



## 16.8 super关键字

- 我们会发现在上面的代码中我使用了一个super关键字，这个super关键字有不同的使用方式：

  - 注意：在子（派生）类的构造函数中使用this或者返回默认对象之前，必须先通过super调用父类的构造函数！

  - super的使用位置有三个：子类的构造函数、实例方法、静态方法；

    ```javascript
    // 调用 父对象/父类 的构造函数
    super([arguments]);
    
    // 调用 父对象/父类 上的方法
    super.functionOnParent([arguments]);
    ```



## 16.9 继承内置类

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



## 16.10 类的混入mixin

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



# 十七、ES6 ~ ES13新特性

## 17.1 新的ECMA代码执行描述

- **在新的ECMA代码执行描述中（ES5以及之上），对于代码的执行流程描述改成了另外的一些词汇：**
  
  - 基本思路是相同的，只是`对于一些词汇的描述发生了改变`；
  - `执行上下文栈和执行上下文`也是相同的；

### 17.1.1 词法环境（Lexical Environments）

- **词法环境是一种规范类型，用于在词法嵌套结构中定义关联的变量、函数等标识符；**
  - 一个词法环境是由环境记录（Environment Record）和一个外部词法环境（oute;r Lexical Environment）组成；
  - 一个词法环境经常用于关联一个函数声明、代码块语句、try-catch语句，当它们的代码被执行时，词法环境被创建出来；
- **也就是在ES5之后，执行一个代码，通常会关联对应的词法环境；**
  - 那么执行上下文会关联哪些词法环境呢？
    - LexicalEnvironment用于处理let、const声明的标识符：
    - VariableEnvironment用于处理var和function声明的标识符：

### 17.1.2 环境记录（Environment Record）

- **在这个规范中有两种主要的环境记录值:声明式环境记录和对象环境记录。**
  - 声明式环境记录：声明性环境记录用于定义ECMAScript语言语法元素的效果，如函数声明、变量声明和直接将标识符绑定与
    ECMAScript语言值关联起来的Catch子句。
  - 对象式环境记录：对象环境记录用于定义ECMAScript元素的效果，例如WithStatement，它将标识符绑定与某些对象的属性关联起来。

### 17.1.3 新ECMA描述内存图

![1667894268160](https://s1.ax1x.com/2022/11/11/zCVNQO.png)



## 17.2 let/const/var关键字

### 17.2.1 let/const基本使用

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

### 17.2.2 let/const作用域提升

- **let、const和var的另一个重要区别是作用域提升：**
  - 我们知道`var声明的变量是会进行作用域提升`的；
  - 但是如果我们使用let声明的变量，在声明之前访问会报错；
- **那么是不是意味着foo变量只有在代码执行阶段才会创建的呢？**
  - 事实上并不是这样的，我们可以看一下ECMA262对let和const的描述；
  - 这些变量会被创建在包含他们的词法环境被实例化时，但是是不可以访问它们的，直到词法绑定被求值；

### 17.2.3 暂时性死区 (TDZ)

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

### 17.2.4 let/const有没有作用域提升呢？

- **从上面我们可以看出，在`执行上下文的词法环境创建出来的时候，变量事实上已经被创建`了，只是`这个变量是不能被访问`的。**
  - 那么变量已经有了，但是不能被访问，是不是一种作用域的提升呢？
- **事实上维基百科并没有对作用域提升有严格的概念解释，那么我们自己从字面量上理解；**
  - 作用域提升：在`声明变量的作用域`中，如果`这个变量可以在声明之前被访问，那么我们可以称之为作用域提升`；
  - 在这里，它虽然被创建出来了，但是不能被访问，我认为不能称之为作用域提升；
- 所以我的观点是`let、const没有进行作用域提升，但是会在解析阶段被创建出来`。

### 17.2.5 var的块级作用域

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

### 17.2.6 let/const的块级作用域

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

### 17.2.7 块级作用域的应用

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

### 17.2.8 var、let、const的选择

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



## 17.3 字符串模板

### 9.3.1 字符串模板基本使用

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

### 17.3.2 标签模板字符串使用

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



## 17.4 函数的默认参数

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



## 17.5 函数的剩余参数

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



## 17.6 箭头函数

- **箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁：**
- 箭头函数`不会绑定this、arguments属性`；
  - 箭头函数`不能作为构造函数来使用`（不能和new一起来使用，会抛出错误）；

### 17.6.1 箭头函数的编写方式

- (): 函数的参数

- {}: 函数的执行体

  ```javascript
  nums.forEach((item, index, arr) => {
    
  })
  ```

### 17.6.2 箭头函数的编写优化

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

### 17.6.3 ES6箭头函数this

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

### 17.6.4 函数箭头函数的补充

- 箭头函数是`没有显式原型prototype`的，所以不能作为构造函数，使用new来创建对象；
- 箭头函数也`不绑定this、arguments、super参数`；



## 17.7 展开语法

- **展开语法(Spread syntax)：**
  - 可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；
  - 还可以在构造字面量对象时, 将对象表达式按key-value的方式展开；
- **展开语法的场景：**
  - 在`函数调用`时使用；
  - 在`数组构造`时使用；
  - 在`构建对象字面量`时，也可以使用展开运算符，这个是在ES2018（ES17）中添加的新特性；
- **注意：**展开运算符其实是一种浅拷贝；



## 17.8 Symbol

### 17.8.1 Symbol的基本使用

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
- **我们也可以在创建Symbol值的时候传入一个描述description**：这个是ES20117（ES10）新增的特性；

### 17.8.2 Symbol作为属性名

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

### 17.8.3 相同值的Symbol

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




## 17.17 Set

### 17.17.1 Set的基本使用

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

### 17.17.2 Set的常见方法

- **Set常见的属性：**
  - `size`：返回Set中元素的个数；
- **Set常用的方法：**
  - `add(value)`：添加某个元素，返回Set对象本身；
  - `delete(value)`：从set中删除和这个值相等的元素，返回boolean类型；
  - `has(value)`：判断set中是否存在某个元素，返回boolean类型；
  - `clear()`：清空set中所有的元素，没有返回值；
  - `forEach(callback, [, thisArg])`：通过forEach遍历set；
- **另外Set是支持for of的遍历的。**



## 17.10 WeakSet

### 17.10.1 WeakSet使用

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

### 17.10.2 WeakSet的应用

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



## 17.11 Map

### 17.11.1 Map的基本使用

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

### 17.11.2 Map的常用方法

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



## 17.12 WeakMap

### 17.12.1 WeakMap的使用

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


### 17.12.2 WeakMap常见的方法

- `set(key, value)`：在Map中添加key、value，并且返回整个Map对象；
- `get(key)`：根据key获取Map中的value；
- `has(key)`：判断是否包括某一个key，返回Boolean类型；
- `delete(key)`：根据key删除一个键值对，返回Boolean类型；

### 17.12.3 WeakMap的应用

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



## 17.13 ES7

### 17.13.1 Array Includes

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

### 17.13.2 指数exponentiation运算符

- 在ES7之前，计算数字的乘方需要通过 Math.pow 方法来完成。

- 在ES7中，增加了  `** 运算符`，可以对数字来计算乘方。

  ```javascript
  const result1 = Math.pow(3, 3)
  const result2 = 3 ** 3
  ```



## 17.14 ES8

### 17.14.1 Object values

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

### 17.14.2 Object entries

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

### 17.14.3 String Padding

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

### 17.14.4 Trailing Commas

- **在ES8中，我们允许在函数定义和调用时`多加一个逗号`：**

  ```javascript
  function foo(a, b,) {
    console.log(a, b)
  }
  
  foo(10, 20, )
  ```

### 17.14.5 Object.getOwnPropertyDescriptors

- 获取对象属性描述符

  ```javascript
  var obj = {
    name: "why",
    age: 18
  }
  
  // 1.获取属性描述符
  console.log(Object.getOwnPropertyDescriptors(obj))
  ```



## 17.15 ES10

### 17.15.1 flat flatMap

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

### 17.15.2 Object.fromEntries()

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

### 17.15.3 trimStart trimEnd

- **去除一个字符串首尾的空格，我们可以通过trim方法，如果单独去除前面或者后面呢？**

  - ES10中给我们提供了`trimStart和trimEnd`；

    ```javascript
    const message = "    Hello World    "
    message.trimStart()
    message.trimEnd()
    ```



## 17.16 ES11

### 17.16.1 BigInt

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

### 17.16.2 空值合并操作符

- **ES11，Nullish Coalescing Operator增加了空值合并操作符：**

  ```javascript
  const foo = ""
  
  const result1 = foo || '默认值' // 默认值
  const result2 = foo ?? '默认值' // " "
  ```

### 17.16.3 可选链 Optional Chaining

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

### 17.16.4 Global This

- **在之前我们希望获取JavaScript环境的全局对象，不同的环境获取的方式是不一样的**

  - 比如在浏览器中可以通过this、window来获取；
  - 比如在Node中我们需要通过global来获取；

- **在ES11中对获取全局对象进行了统一的规范：globalThis**

  ```javascript
  console.log(globalThis)
  console.log(this) // 浏览器上
  console.log(global) // Node上
  ```

### 17.16.5 for..in标准化

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



## 17.17 ES12

### 17.17.1 FinalizationRegistry对象

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

### 17.17.2 WeakRefs对象

- 如果我们默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用：

  - 如果我们希望是一个弱引用的话，可以使用WeakRef；

  ```javascript
  let obj = {name: "why"}
  let info = new WeakRef(obj)
  ```

### 17.17.3 逻辑赋值运算符

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



## 17.18 ES13

### 17.18.1 method .at()

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

### 17.18.2 Object.hasOwn(obj, propKey)

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

### 17.18.3 定义类字段的其他方式

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




# 十八、Proxy-Reflect使用详解

## 18.1 监听对象的操作

- **利用了前面讲过的 Object.defineProperty 的存储属性描述符来对属性的操作进行监听。**

- **这样做的缺点：**

  - 首先，Object.defineProperty设计的初衷，不是为了去监听截止一个对象中所有的属性的。
    - 我们在定义某些属性的时候，初衷其实是定义普通的属性，但是后面我们强行将它变成了数据属性描述符。
  - 其次，如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么Object.defineProperty是无能为力的。

- 所以我们要知道，存储数据描述符设计的初衷并不是为了去监听一个完整的对象。

  ```javascript
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      set: function(newValue) {
        console.log(`监听到给${key}设置值`)
        value = newValue
      },
      get: function() {
        console.log(`监听到获取${key}的值`)
        return value
      }
    })
  })
  ```



## 18.2 Proxy

### 18.2.1 Proxy基本使用
- **在ES6中，新增了一个Proxy类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的：**

  - 也就是说，如果我们希望`监听一个对象的相关操作`，那么我们可以`先创建一个代理对象（Proxy对象）`；
  - 之后对`该对象的所有操作`，都通过`代理对象来完成`，代理对象`可以监听我们想要对原对象进行哪些操作`；

- **我们可以将上面的案例用Proxy来实现一次：**

  - 首先，我们需要`new Proxy对象`，并且`传入需要侦听的对象以及一个处理对象`，可以称之为`handler`；

    - `const p = new Proxy(target, handler)`

  - 其次，`我们之后的操作都是直接对Proxy的操作`，而`不是原有的对象`，因为我们需要在handler里面进行侦听；

    ```javascript
    const obj = {
    	name: "why",
    	age: 18
    }
    
    const objProxy = new Proxy(obj, {})
    ```

### 18.2.2 Proxy的set和get捕获器

- **如果我们想要侦听某些具体的操作，那么就可以在handler中添加对应的`捕捉器（Trap）`：**

- **set和get分别对应的是函数类型；**

  - `set函数有四个参数：`

    - target：目标对象（侦听的对象）；
    - property：将被设置的属性key；
    - value: 新属性值；
    - receiver：调用的代理对象；

  - `get函数有三个参数`：

    - target：目标对象（侦听的对象）；
    - property：被获取的属性key；
    - receiver：调用的代理对象；

    ```javascript
    const objProxy = new Proxy(obj, {
      has: function(target, key) {
        console.log("has捕捉器", key)
        return key in target
      },
      set: function(target, key, value, receiver) {
        console.log("set捕捉器", key)
      },
      get: function(target, key, receiver) {
        console.log("get捕捉器", key)
        return target[key]
      },
      deleteProperty: function(target, key) {
        console.log("delete捕捉器")
        delete target[key]
      }
    })
    
    console.log(objProxy.name)
    ```

### 18.2.3 Proxy所有捕获器

- **13个捕捉器分别是做什么的呢？**
- `handler.getPrototypeOf()`：
  - `Object.getPrototypeOf 方法`的捕捉器。
- `handler.setPrototypeOf()`：
  - `Object.setPrototypeOf 方法`的捕捉器。
- `handler.isExtensible()`：
  - `Object.isExtensible 方法`的捕捉器(判断是否可以新增属性)。
- `handler.preventExtensions()`：
  - `Object.preventExtensions 方法`的捕捉器。
- `handler.getOwnPropertyDescriptor()`：
  - `Object.getOwnPropertyDescriptor 方法`的捕捉器。
- `handler.defineProperty()`：
  - `Object.defineProperty 方法`的捕捉器。
- `handler.ownKeys()`：
  - `Object.getOwnPropertyNames 方法`和 `Object.getOwnPropertySymbols 方法`的捕捉器。
- `handler.has()`：in 操作符的捕捉器。
- `handler.get()`：属性读取操作的捕捉器。
- `handler.set()`：属性设置操作的捕捉器。
- `handler.deleteProperty()`：delete 操作符的捕捉器。
- `handler.apply()`：函数调用操作的捕捉器。
- `handler.construct()`：new 操作符的捕捉器。

### 18.2.4 Proxy的construct和apply

- **当然，我们还会看到捕捉器中还有`construct`和`apply`，它们是应用于函数对象的：**

  ```javascript
  function foo() {
    console.log("foo函数被调用了", this, arguments)
    return "foo"
  }
  
  const fooProxy = new Proxy(foo, {
    apply: function(target, thisArg, otherArgs) {
      console.log("函数的apply侦听")
      return target.apply(thisArg, otherArgs)
    },
    construct(target, argArray, newTarget) {
      console.log(target, argArray, newTarget)
      return new target()
    }
  })
  ```



## 18.3 Reflect

### 18.3.1 Reflect的作用
- **Reflect也是ES6新增的一个API，它是`一个对象`，字面的意思是`反射`。**
- **那么这个Reflect有什么用呢？**
  - 它主要提供了很多`操作JavaScript对象的方法`，有点像`Object中操作对象的方法`；
  - 比如`Reflect.getPrototypeOf(target)`类似于 `Object.getPrototypeOf()`；
  - 比如`Reflect.defineProperty(target, propertyKey, attributes)`类似于`Object.defineProperty() `；
- **如果我们有Object可以做这些操作，那么`为什么还需要有Reflect这样的新增对象`？**
  - 因为在早期的ECMA规范中没有考虑到这种`对` **对象本身** `的操作如何设计会更加规范`，所以`将这些API放到了Object上面`；
  - 但是`Object作为一个构造函数`，这些操作实际上`放到它身上并不合适`；
  - 另外还包含一些`类似于 in、delete操作符`，让JS看起来是会有一些奇怪的；
  - 所以在ES6中`新增了Reflect`，让我们这些操作都集中到了Reflect对象上；
  - 另外在使用Proxy时，可以做到`不操作原对象`；

### 18.3.2 Reflect的常见方法

- **Reflect中有哪些常见的方法呢？它和Proxy是一一对应的，也是13个:**
- `Reflect.getPrototypeOf(target)`：
  - 类似于 `Object.getPrototypeOf()`。
- `Reflect.setPrototypeOf(target, prototype)`：
  - 设置对象原型的函数. 返回一个 Boolean， 如果更新成功，则返回true。
- `Reflect.isExtensible(target)`：
  - 类似于 `Object.isExtensible()`。
- `Reflect.preventExtensions(target)`：
  - 类似于` Object.preventExtensions()`。返回一个Boolean。
- `Reflect.getOwnPropertyDescriptor(target, propertyKey)`：
  - 类似于` Object.getOwnPropertyDescriptor()`。如果对象中存在该属性，则返回对应的属性描述符, 否则返回 undefined.
- `Reflect.defineProperty(target, propertyKey, attributes)`：
  - 和` Object.defineProperty() `类似。如果设置成功就会返回 true
- `Reflect.ownKeys(target)`：
  - 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于`Object.keys()`, 但不会enumerable影响).
- `Reflect.has(target, propertyKey)`：
  - 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。
- `Reflect.get(target, propertyKey[, receiver])`：
  - 获取对象身上某个属性的值，类似于 target[name]。
- `Reflect.set(target, propertyKey, value[, receiver])`：
  - 将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true。
- `Reflect.deleteProperty(target, propertyKey)`：
  - 作为函数的delete操作符，相当于执行 delete target[name]。
- `Reflect.apply(target, thisArgument, argumentsList)`：
  - 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和Function.prototype.apply() 功能类似。
- `Reflect.construct(target, argumentsList[, newTarget])`：
  - 对构造函数进行 new 操作，相当于执行 new target(...args)。

### 18.3.3 Reflect的使用

- **那么我们可以将之前Proxy案例中对原对象的操作，都修改为`Reflect来操作`：**

  ```javascript
  const objProxy = new Proxy(obj, {
    has: function(target, key) {
      return Reflect.has(target, key)
    },
    set: function(target, key, value, receiver) {
      return Reflect.set(target, key, value)
    },
    get: function(target, key, receiver) {
      return Reflect.get(target, key)
    },
    deleteProperty: function(target, key) {
      delete Reflect.deleteProperty(target, key)
    }
  })
  
  console.log(objProxy.name)
  ```

### 18.3.4 Receiver的作用

- **我们发现在使用getter、setter的时候有一个`receiver的参数`，它的作用是什么呢？**
  - 如果我们的源对象（obj）有`setter、getter的访问器属性`，那么可以`通过receiver来改变里面的this`；

### 18.3.5 Reflect的construct

```JavaScript
function Student(name, age) {
  this.name = name
  this.age = age
}

function Animal() {
  
}

const stu = Reflect.construct(Student, ["why", 18], Animal)
console.log(stu.__proto__ === Animal.prototype) // true
```



# 十九、Promise用法详解

## 19.1 异步任务的处理

### 19.1.1 异步处理代码的困境
- 我们调用一个函数，这个函数中发送网络请求（我们可以用定时器来模拟）；

- 如果`发送网络请求成功`了，那么`告知调用者发送成功，并且将相关数据返回过去`；

- 如果`发送网络请求失败`了，那么`告知调用者发送失败，并且告知错误信息`；

  ```javascript
  // 1.设计这样的一个函数
  function execCode(counter, successCallback, failureCallback) {
    // 异步任务
    setTimeout(() => {
      if (counter > 0) { // counter可以计算的情况 
        let total = 0
        for (let i = 0; i < counter; i++) {
          total += i
        }
        // 在某一个时刻只需要回调传入的函数
        successCallback(total)
      } else { // 失败情况, counter有问题
        failureCallback(`${counter}值有问题`)
      }
    }, 3000)
  }
  
  // 2.ES5之前,处理异步的代码都是这样封装
  execCode(100, (value) => {
    console.log("本次执行成功了:", value)
  }, (err) => {
    console.log("本次执行失败了:", err)
  })
  ```

### 19.2 Promise解决异步处理

- **在上面的解决方案中，我们确确实实可以解决请求函数得到结果之后，获取到对应的回调，但是它存在两个主要的问题：**

  - 第一，我们`需要自己来设计回调函数、回调函数的名称、回调函数的使用`等；

  - 第二，`对于不同的人、不同的框架设计出来的方案是不同`的，那么我们必须耐心`去看别人的源码或者文档`，以便可以理解它这个函数到底怎么用；

    ```javascript
    function execCode(counter) {
      const promise = new Promise((resolve, reject) => {
        // 异步任务
        setTimeout(() => {
          if (counter > 0) { // counter可以计算的情况 
            let total = 0
            for (let i = 0; i < counter; i++) {
              total += i
            }
            // 成功的回调
            resolve(total)
          } else { // 失败情况, counter有问题
            // 失败的回调
            reject(`${counter}有问题`)
          }
        }, 3000)
      })
    
      return promise
    }
    
    // 执行一次
    execCode(255).then(value => {
      console.log("成功:", value)
    }).catch(err => {
      cnsole.log("失败:", err)
    })
    ```



## 19.2 executor - Promise对象传入的回调函数

- 在通过new创建Promise对象时，我们需要`传入一个回调函数`，我们称之为`executor`
  - 这个回调函数`会被立即执行`，并且给`传入另外两个回调函数resolve、reject`；
  - 当我们`调用resolve回调函数`时，`会执行Promise对象的then方法`传入的回调函数；
  - 当我们`调用reject回调函数`时，`会执行Promise对象的catch方法`传入的回调函数；
- **通常我们会在Executor（Promise对象传入的回调函数）中确定我们的Promise状态：**
  - 通过`resolve`，可以兑现（`fulfilled`）Promise的状态，我们也可以称之为已决议（resolved）；
  - 通过`reject`，可以拒绝（`reject`）Promise的状态；
- **注意：一旦状态被确定下来，Promise的状态会被 锁死，该Promise的状态是不可更改的**
  - 在我们`调用resolve`的时候，如果`resolve传入的值本身不是一个Promise`，那么`会将该Promise的状态变成 兑现（fulfilled）`；
  - 在`之后我们去调用reject时，已经不会有任何的响应`了（并不是这行代码不会执行，而是无法改变Promise状态）；



## 19.3 Promise的三个状态

- **Promise使用过程，我们可以将它划分成三个状态：**
  - `待定（pending）`: 初始状态，既没有被兑现，也没有被拒绝；
    - 当执行executor中的代码时，处于该状态；
  - `已兑现（fulfilled）`: 意味着操作成功完成；
    - 执行了resolve时，处于该状态，Promise已经被兑现；
  - `已拒绝（rejected）`: 意味着操作失败；
    - 执行了reject时，处于该状态，Promise已经被拒绝；



## 19.4 resolve不同值的区别

- **情况一：如果resolve传入`一个普通的值或者对象`，那么`这个值会作为then回调的参数`；**

  ```javascript
  new Promise((resolve, reject) => {
    resolve("normal resolve")
  }).then(res => {
    console.log("res:", res)
  })
  ```

- **情况二：如果resolve中传入的是`另外一个Promise`，那么`这个新Promise会决定原Promise的状态`：**

  ```javascript
  new Promise((resolve, reject) => {
      resolve(new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve("第二个Promise的resolve")
          }, 3000);
      }))
  }).then(res => {
      console.log("res:",res)
  }).catch(err => {
      console.log("err:",err)
  })
  ```

- **情况三：如果resolve中传入的是`一个对象`，并且这个对象`有实现then方法`，那么`会执行该then方法`，并且根据`then方法的结果来决定Promise的状态`：**

  ```javascript
  new Promise((resolve, reject) => {
    resolve({
      then: function(resolve, reject) {
        resolve("thenable value")
      }
    })
  }).then(res => {
    console.log(res)
  })	
  ```

  

## 19.5 Promise的实例方法

### 19.5.1 then方法 – 接受两个参数

- **then方法是Promise对象上的一个方法（实例方法）：**

  - 它其实是放在Promise的原型上的 Promise.prototype.then

- **then方法接受两个参数：**

  - `fulfilled的回调函数`：当状态变成fulfilled时会回调的函数；

  - `reject的回调函数`：当状态变成reject时会回调的函数；

    ```javascript
    promise.then(res => {
      console.log("res:", res)
    },err => {
      console.log("err:", err)
    })
    // 等价于
    promise.then(res => {
      console.log("res:", res)
    }).catch(err => {
      console.log("err:", err)
    })
    ```

### 19.5.2 then方法 – 多次调用

- **一个Promise的then方法是可以`被多次调用`的：**

  - 每次调用我们都可以`传入对应的fulfilled回调`；

  - 当Promise的状态`变成fulfilled的时候`，这些`回调函数都会被执行`;

    ```javascript
    promise.then(res => {
      console.log("res1:", res)
    })
    
    promise.then(res => {
      console.log("res2:", res)
    })
    
    promise.then(res => {
      console.log("res3:", res)
    })
    ```

### 19.5.3 then方法 – 返回值

- **then方法本身是有返回值的，它的返回值是一个Promise，所以我们可以进行如下的链式调用：**
  - 但是`then方法返回的Promise到底处于什么样的状态呢`？
- **Promise有三种状态，那么这个Promise处于什么状态呢？**
  - 当`then方法中的回调函数本身在执行的时候，那么它处于pending`状态；
  - 当`then方法中的回调函数返回一个结果`时，那么它`处于fulfilled状态`，并且`会将结果作为resolve的参数`；
    - 情况一：返回一个普通的值；
    - 情况二：返回一个Promise；
    - 情况三：返回一个thenable值；
  - 当`then方法抛出一个异常时，那么它处于reject状态`；

### 19.5.4 catch方法 – 多次调用

- **catch方法也是Promise对象上的一个方法（实例方法）：**

  - 它也是放在Promise的原型上的 Promise.prototype.catch

- **一个Promise的catch方法是可以被多次调用的：**

  - 每次调用我们`都可以传入对应的reject回调`；

  - 当`Promise的状态变成reject的时候，这些回调函数都会被执行`；

    ```javascript
    promise.catch(err => {
      console.log("err:", err)
    })
    
    promise.catch(err => {
      console.log("err:", err)
    })
    ```

### 19.5.5 catch方法 – 返回值

- **事实上catch方法也是会返回一个Promise对象的，所以catch方法后面我们可以继续调用then方法或者catch方法：**

  - 下面的代码，后续是catch中的err2打印，还是then中的res打印呢？

  - 答案是res打印，这是因为catch传入的回调在执行完后，`默认状态依然会是fulfilled`的；

    ```javascript
    promise.catch(err => {
      console.log("err1:", err)
      throw new Error("error message")
    }).catch(err => {
      console.log("err2:", err)
    }).then(res => {
      console.log("res:",res)
    })
    ```

  - **如果我们希望后续继续执行catch，那么需要抛出一个异常：**

    ```javascript
    promise.catch(err => {
      console.log("err1:", err)
      throw new Error("error message")
    }).then(res => {
      console.log("res:", res)
    }).catch(err => {
      console.log("err:",err)
    })
    ```

### 19.5.6 finally方法

- **finally是在ES9中新增的一个特性：表示`无论Promise对象无论变成fulfilled还是rejected状态，最终都会被执行的代码`。**

- **finally方法是不接收参数的，因为无论前面是fulfilled状态，还是rejected状态，它都会执行。**

  ```javascript
  const promise = new Promise((resolve, reject) => {
    reject("reject")
    // resolve("resolve")
  })
  
  promise.then(res => {
    console.log("res:", res)
  }).catch(err => {
    console.log("err:", err)
  }).finally(() => {
    console.log("finally action")
  })
  ```



## 19.6 Promise的类方法

### 19.6.1 resolve方法

- **有时候我们已经有一个`现成的内容`了，希望`将其转成Promise来使用`，这个时候我们可以使用 `Promise.resolve 方法`来完成。**

  - `Promise.resolve的用法相当于new Promise，并且执行resolve操作`：

    ```javascript
    Promise.resolve("why")
    // 等价于
    new Promise((resolve) => resolve("why"))
    ```

- **resolve参数的形态：**

  - 情况一：参数是一个普通的值或者对象
  - 情况二：参数本身是Promise
  - 情况三：参数是一个thenable

### 19.6.2 reject方法

- **reject方法类似于resolve方法，只是会将Promise对象的状态设置为reject状态。**

- **Promise.reject的用法相当于new Promise，只是会调用reject：**

  ```javascript
  Promise.reject("why")
  // 等价于
  new Promise((resolve, reject) => reject("why"))
  ```

- **Promise.reject传入的参数无论是什么形态，都会直接作为reject状态的参数传递到catch的。**

### 19.6.3 all方法

- 它的作用是`将多个Promise包裹在一起形成一个新的Promise`；

- `新的Promise状态由包裹的所有Promise共同决定`：

  - 当`所有的Promise状态变成fulfilled状态`时，`新的Promise状态为fulfilled`，并且会`将所有Promise的返回值组成一个数组`；

  - 当`有一个Promise状态为reject`时，`新的Promise状态为reject`，并且`会将第一个reject的返回值作为参数`；

    ```javascript
    // 创建三个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p1 resolve")
        reject("p1 reject error")
      }, 3000)
    })
    
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p2 resolve")
      }, 2000)
    })
    
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p3 resolve")
      }, 5000)
    })
    
    // all:全部/所有
    Promise.all([p1, p2, p3]).then(res => {
      console.log("all promise res:", res)
    }).catch(err => {
      console.log("all promise err:", err)
    })
    ```

### 19.6.4 allSettled方法

- **all方法有一个缺陷：当有其中一个Promise变成reject状态时，新Promise就会立即变成对应的reject状态**

  - 那么对于resolved的，以及依然处于pending状态的Promise，我们是获取不到对应的结果的；

- **在ES11（ES2020）中，添加了新的API Promise.allSettled：**

  - 该方法`会在所有的Promise都有结果（settled），无论是fulfilled，还是rejected时，才会有最终的状态`；

  - 并且`这个Promise的结果一定是fulfilled`的；

    ```javascript
    // 创建三个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p1 resolve")
        reject("p1 reject error")
      }, 3000)
    })
    
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p2 resolve")
      }, 2000)
    })
    
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p3 resolve")
      }, 5000)
    })
    
    // 类方法: allSettled
    Promise.allSettled([p1, p2, p3]).then(res => {
      console.log("all settled:", res)
    })
    ```

- **并且这个Promise的结果一定是fulfilled的；**

  - allSettled的结果是一个数组，数组中存放着每一个Promise的结果，并且是对应一个对象的；
  - 这个对象中`包含status状态，以及对应的value值`；

### 19.6.5 race方法

- **如果有一个Promise有了结果，我们就希望决定最终新Promise的状态，那么可以使用race方法：**

  - `race是竞技、竞赛`的意思，表示`多个Promise相互竞争`，谁`先有结果，那么就使用谁的结果`；

    ```javascript
    // 创建三个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p1 resolve")
        // reject("p1 reject error")
      }, 3000)
    })
    
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("p2 resolve")
        reject("p2 reject error")
      }, 2000)
    })
    
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p3 resolve")
      }, 5000)
    })
    
    
    // 类方法: race方法
    // 特点: 会等到一个Promise有结果(无论这个结果是fulfilled还是rejected)
    Promise.race([p1, p2, p3]).then(res => {
      console.log("race promise:", res)
    }).catch(err => {
      console.log("race promise err:", err)
    })
    ```

### 19.6.6 any方法

- **any方法是ES12中新增的方法，和race方法是类似的：**

  - `any方法会等到一个fulfilled状态`，`才会决定新Promise的状态`；
  - 如果`所有的Promise都是reject`的，那么`也会等到所有的Promise都变成rejected状态`；

- **如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态；**

  ```javascript
  // 创建三个Promise
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("p1 resolve")
      reject("p1 reject error")
    }, 3000)
  })
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("p2 resolve")
      reject("p2 reject error")
    }, 2000)
  })
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("p3 resolve")
      reject("p3 reject error")
    }, 5000)
  })
  
  // 类方法: any方法
  Promise.any([p1, p2, p3]).then(res => {
    console.log("any promise res:", res)
  }).catch(err => {
    console.log("any promise err:", err)
  })
  ```

- **如果`所有的Promise都是reject的，那么会报一个AggregateError`的错误。**



# 二十、Iterator-Generator详解

## 20.1 迭代器

### 20.1.1 什么是迭代器?

- **在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）：**
  - 迭代器协议定义了`产生一系列值（无论是有限还是无限个）的标准方式`；
  - 在JavaScript中这个标准就是一个`特定的next方法`；
- **next方法有如下的要求：**
  - 一个无参数或者一个参数的函数，返回一个应当`拥有以下两个属性的对象`:
  - `done（boolean）`
    - 如果迭代器`可以产生序列中的下一个值，则为 false`。（这等价于没有指定 done 这个属性。）
    - 如果迭代器`已将序列迭代完毕，则为 true`。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。
  - `value`
    - 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。

### 20.1.2 迭代器的代码练习

```javascript
const friends = ['lilei', 'kobe', 'james']
function createArrayIterator(arr) {
    let index = 0
    return {
        next: function () {
            if (index < arr.length) {
                return { done: false, value: arr[index++] }
            } else {
                return { done: true, value: undefined }
            }
        }
    }
}

const friendsIterator = createArrayIterator(friends)
console.log(friendsIterator.next()); // lilei
console.log(friendsIterator.next()); // kobe
console.log(friendsIterator.next()); // james
console.log(friendsIterator.next()); // undefined
```

### 20.1.3 迭代器的中断

- **迭代器在某些情况下会在没有完全迭代的情况下中断：**

  - 比如遍历的过程中通过`break、return、throw中断`了循环操作；
  - 比如在解构的时候，没有解构所有的值；

- **那么这个时候我们想要监听中断的话，可以添加return方法：**

  ```javascript
  [Symbol.iterator]() {
    let index = 0
    return {
  		next: () => {
        if (index < this.students.length){
          return { done: false, value: this.students[index++] }
        } else{
          return { done: true }
        }
      },
      return (){
        console.log("迭代器提前终止了")
        return {done: true}
      }
    }
  }
  
  const c1 = new Classroom('lmx','湖南长沙',['abc','dhs'])
  for (const stu of c1) {
    if (stu === 'abc') break
  }
  ```



## 20.2 可迭代对象

- **但是上面的代码整体来说看起来是有点奇怪的：**

  - 我们获取一个数组的时候，需要自己`创建一个index变量`，再`创建一个所谓的迭代器对象`；
  - 事实上`我们可以对上面的代码进行进一步的封装，让其变成一个可迭代对象`；

- **什么又是可迭代对象呢？**

  - `它和迭代器是不同的概念；`
  - 当一个对象`实现了iterable protocol协议`时，它就是`一个可迭代对象`；
  - 这个对象的要求是`必须实现 @@iterator 方法`，在代码中我们`使用 Symbol.iterator 访问该属性`；

- **当然我们要问一个问题，我们转成这样的一个东西有什么好处呢？**

  - 当`一个对象变成一个可迭代对象`的时候，就可以`进行某些迭代操作`；
  - 比如 `for...of` 操作时，其实就会调用它的 @@iterator 方法；

### 20.2.1 可迭代对象的代码

```javascript
const info = {
    friends: ["lilei", 'kobe', 'james'],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                if (index < this.friends.length) {
                    return { done: false, value: this.friends[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}

const infoIterator = info[Symbol.iterator]()
console.log(infoIterator.next())
console.log(infoIterator.next())
console.log(infoIterator.next())
console.log(infoIterator.next())
```

### 20.2.2 原生迭代器对象

- **事实上我们平时创建的很多原生对象已经实现了可迭代协议，会生成一个迭代器对象的：**

  - String、Array、Map、Set、arguments对象、NodeList集合；

    ```javascript
    const str = "Hello World"
    for (const s of str) {
        console.log(s)
    }
    
    const arr = ["abc", "cba", "nba"]
    for (const item of arr) {
        console.log(item);
    }
    
    function foo(x, y, z) {
        for (const arg of arguments) {
            console.log(arg);
        }
    }
    foo(20, 30, 40)
    
    // 获取可迭代对象
    console.log(arr[Symbol.iterator]); // [Function: values]
    
    // 调用可迭代函数,获取到迭代器
    const iterator = arr[Symbol.iterator]()
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    ```

### 20.2.3 可迭代对象的应用

- **JavaScript中语法：`for ...of、展开语法（spread syntax）、yield*（后面讲）、解构赋值（Destructuring_assignment）`；**

- **创建一些对象时：**`new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable])`;

- **一些方法的调用：**`Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable)`;

  ```javascript
  const info = {
      friends: ["lilei", 'kobe', 'james'],
      [Symbol.iterator]: function () {
          let index = 0
          return {
              next: () => {
                  if (index < this.friends.length) {
                      return { done: false, value: this.friends[index++] }
                  } else {
                      return { done: true, value: undefined }
                  }
              }
          }
      }
  }
  
  // 1.for...of
  for (const item of info) {
    console.log(item)
  }
  
  // 2.展开运算符
  console.log([...info, "curry"])
  
  // 3.解构
  const [name1, name2] = info
  
  // 4.创建其他解构
  console.log(new Set(info))
  console.log(Array.from(info))
  
  // 5.调用方法
  Promise.all(info).then(res => {
    console.log(res) // ['lilei','kobe','james']
  })
  ```



## 20.3 自定义类的迭代

- **在前面我们看到Array、Set、String、Map等类创建出来的对象都是可迭代对象：**

  - 在面向对象开发中，我们可以通过`class定义一个自己的类，这个类可以创建很多的对象`：
  - 如果我们也希望`自己的类创建出来的对象默认是可迭代`的，那么`在设计类的时候我们就可以添加上 @@iterator 方法`；

- **案例：创建一个classroom的类**

  - 教室中有自己的位置、名称、当前教室的学生；
  - 这个教室可以进来新学生（push）；
  - 创建的教室对象是可迭代对象；

### 20.3.1 生成器实现

```javascript
class Classroom {
    constructor(name, address, students = []) {
        this.name = name
        this.address = address
        this.students = students
    }

    push(student) {
        this.students.push(student)
    }

    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {
                if (index < this.students.length) {
                    return { done: false, value: this.students[index++] }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

const c1 = new Classroom('lmx','湖南长沙',['abc','dhs'])
c1.push("ldh")
for (const stu of c1) {
  console.log(stu)
}
```

### 20.3.2 生成器实现

- **在之前的自定义类迭代中，我们也可以换成生成器：**

  ```javascript
  class Classrrom {
    constructor(name, address, students = []) {
      this.name = name
      this.address = address
      this.students = students
    }
    
    push(student) {
      this.students.push(student)
    }
    
    *[Symbol.iterator]() {
      yield* this.students
    }
  }
  ```



## 20.4 生成器

### 20.4.1 什么是生成器?

- **生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。**
  - 平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常。
- **生成器函数也是一个函数，但是和普通的函数有一些区别：**
  - 首先，`生成器函数需要在function的后面加一个符号：*`
  - 其次，`生成器函数可以通过yield关键字来控制函数的执行流程`：
  - 最后，`生成器函数的返回值是一个Generator（生成器）`：
    - `生成器事实上是一种特殊的迭代器`；

### 20.4.2 生成器函数执行

- **我们发现下面的生成器函数foo的执行体压根没有执行，它只是返回了一个生成器对象。**

  - 那么我们`如何可以让它执行函数中的东西`呢？`调用next`即可；

  - 我们之前学习迭代器时，知道`迭代器的next是会有返回值`的；

  - 但是我们很多时候`不希望next返回的是一个undefined，这个时候我们可以通过yield来返回结果`；

    ```javascript
    function* foo() {
        console.log("函数开始执行~")
        const value1 = 100
        console.log(value1)
        yield value1
    
        const value2 = 200
        console.log(value2)
        yield value2
    
        const value3 = 300
        console.log(value3)
        yield value3
    
        console.log("函数结束执行~")
    }
    
    // 返回生成器
    const generator = foo()
    
    // 执行到第一个yield, 并且暂停
    console.log(generator.next())
    
    // 执行到第二个yield, 并且暂停
    console.log(generator.next())
    
    // 执行到第三个yield, 并且暂停
    console.log(generator.next())
    
    // 执行剩余的代码
    console.log(generator.next()) // { value: undefined, done: false}
    ```

### 20.4.3 生成器传递参数 – next函数

- **函数既然可以暂停来分段执行，那么函数应该是可以传递参数的，我们是否可以给每个分段来传递参数呢？**

  - 答案是`可以的`；

  - 我们在`调用next函数的时候，可以给它传递参数，那么这个参数会作为上一个yield语句的返回值`；

  - 注意：`也就是说我们是为本次的函数代码块执行提供了一个值`；

    ```javascript
    function* foo(initial) {
        console.log("函数开始执行~")
        const value1 = yield initial + 'aaa' 
        const value2 = yield value1 + 'bbb'  
        const value3 = yield value2 + 'ccc' 
        console.log("函数结束执行~")
    }
    
    const generator = foo("why")
    const result1 = generator.next()
    console.log("result1:",result1) // whyaaa
    const result2 = generator.next(result1.value)
    console.log("result2:",result2) // whyaaabbb
    const result3 = generator.next(result2.value)
    console.log("result3:",result3) // whyaaabbb
    ```

### 20.4.4 生成器提前结束 – return函数

- **还有一个可以给生成器函数传递参数的方法是通过return函数：**

  - `return传值后这个生成器函数就会结束，之后调用next不会继续生成值`了；

    ```javascript
    function* foo() {
      const value1 = yield "why"
      console.log("value1:",value1)
      const value2 = yield value1
      const value3 = yield value2
    }
    
    const generator = foo()
    console.log(generator.next())
    console.log(generator.return(123))
    console.log(generator.next())
    ```

### 20.4.5 生成器抛出异常 – throw函数

- **除了给生成器函数内部传递参数之外，也可以给生成器函数内部抛出异常：**

  - `抛出异常后我们可以在生成器函数中捕获异常`；

  - 但是在`catch语句中不能继续yield新的值了，但是可以在catch语句外使用yield继续中断函数的执行`；

    ```javascript
    function* foo() {
      console.log("函数开始执行")
      
      try {
        yield "why"
      } catch(err) {
        console.log("内部捕获异常:", err)
      }
      
      yield 222
      
      console.log("函数结束执行~")
    }
    
    const generator = foo()
    const result = generator.next()
    generator.throw("error message")
    
    console.log(generator.next())
    ```



## 20.5 生成器替代迭代器

- **我们发现生成器是一种特殊的迭代器，那么在某些情况下我们可以使用生成器来替代迭代器：**

  ```javascript
  function* createArrayIterator(arr) {
    for (const item of arr) {
      yield item
    }
  }
  
  const names = ["abc", "cba", "nba"]
  namesIterator = createArrayIterator(names)
  console.log(namesIterator.next())
  console.log(namesIterator.next())
  console.log(namesIterator.next())
  ```

- **事实上我们还可以使用yield*来生产一个可迭代对象：**

  - 这个时候相当于是`一种yield的语法糖`，只不过会`依次迭代这个可迭代对象，每次迭代其中的一个值`；

    ```javascript
    function* createArrayIterator(arr) {
    	yield* arr
    }
    ```


### 20.5.1 对生成器的操作

```javascript
const namesIterator1 = createArrayIterator(names)
for (const item of namesIterator1){}

const namesIterator2 = createArrayIterator(names)
const set = new Set(namesIterator2)

const namesIterator3 = createArrayIterator(names)
Promise.all(namesIterator3).then(res => {
  console.log(res)
})
```



## 20.6 异步处理方案

- **学完了我们前面的Promise、生成器等，我们目前来看一下异步代码的最终处理方案。**

- **案例需求：**

  - 我们需要向服务器发送网络请求获取数据，一共需要发送三次请求；
  - 第二次的请求url依赖于第一次的结果；
  - 第三次的请求url依赖于第二次的结果；
  - 依次类推；

### 20.6.1 Promise对象进行异步处理

```javascript
function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 2000)
  })
}

// 方式一
function getData() {
  requestData("why").then(res1 => {
    requestData(res1 + "aaa").then(res2 => {
      requestData(res2 + "bbb").then(res3 => {
        console.log("res3:",res3)
      })
    })
  })
}

// 方式二
function getData() {
  requestData("why").then(res1 => {
    return requestData(res1 + "aaa")
  }).then(res2 => {
    return requestData(res2 + "bbb")
  }).then(res3 => {
    console.log(res3)
  })
}
```

### 20.6.2 Generator方案

```javascript
function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 2000)
  })
}

function* getData() {
  const res1 = yield requestData("why")
  const res2 = yield requestData(res1 + "aaa")
  const res3 = yield requestData(res2 + "bbb")
  const res4 = yield requestData(res3 + "ccc")
  console.log(res4)
}

const generator = getData()
generator.next().value.then(res => {
  generator.next(res).value.then(res => {
    generator.next(res).value.then(res => {
      generator.next(res)
    })
  })
})
```

### 20.6.3 自动执行generator函数

- **目前我们的写法有两个问题：**

  - 第一，我们不能确定到底需要调用几层的Promise关系
  - 第二，如果还有其他需要这样执行的函数，我们应该如何操作呢？

- **所以，我们可以封装一个工具函数execGenerator自动执行生成器函数：**

  ```javascript
  function execGenerator(genFn) {
    const generator = genFn()
    
    function exec(res) {
      const result = generator.next(res)
      if (result.done) return result.value
      result.value.then(res => {
        exec(res)
      })
    }
    exec()
  }
  ```



# 二十一、await、async、事件循环

## 21.1 异步函数 async function

- **async关键字用于声明一个异步函数：**

  - async是asynchronous单词的缩写，异步、非同步；
  - sync是synchronous单词的缩写，同步、同时；

- **async异步函数可以有很多中写法：**

  ```javascript
  async function foo1() {
    
  }
  
  const foo2 = async function() {
    
  }
  
  const foo3 = async () => {
    
  }
  
  class Person {
    async foo() {
      
    }
  }
  ```


### 21.1.1 异步函数的执行流程

- **异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行。**

- **异步函数有返回值时，和普通函数会有区别：**

  - `情况一`：异步函数也可以有返回值，但是异步函数的返回值相当于被包裹到Promise.resolve中；

  - `情况二`：如果我们的异步函数的返回值是Promise，状态由会由Promise决定；

  - `情况三`：如果我们的异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定；

    ```javascript
    async function foo2() {
      // 1.返回一个普通的值
      // -> Promise.resolve(321)
      // return ["abc", "cba", "nba"]
    
      // 2.返回一个Promise
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve("aaa")
      //   }, 3000)
      // })
    
      // 3.返回一个thenable对象
      // return {
      //   then: function(resolve, reject) {
      //     resolve("bbb")
      //   }
      // }
    }
    
    foo2().then(res => {
      console.log("res:", res)
    })
    ```

- **如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递；**



## 21.2 await关键字

- **`async函数另外一个特殊之处`就是可以在它内部`使用await关键字`，而`普通函数中是不可以`的。**

- **await关键字有什么特点呢？**

  - 通常使用await是后面会跟上一个表达式，这个表达式会返回一个Promise；
  - 那么await会等到Promise的状态变成fulfilled状态，之后继续执行异步函数;

- **如果await后面是一个`普通的值`，那么会`直接返回这个值`；**

- **如果await后面是一个`thenable的对象`，那么会根据对象的`then方法调用来决定后续的值`；**

- **如果await后面的表达式，返回的Promise是`reject的状态`，那么会将这个`reject结果直接作为函数的Promise的reject值`；**

  ```javascript
  // 1.定义一些其他的异步函数
  function requestData(url) {
    // console.log("request data")
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(url)
      }, 3000)
    })
  }
  
  async function test() {
    console.log("test function")
    return "test"
  }
  
  async function bar() {
    console.log("bar function")
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("bar")
      }, 2000);
    })
  }
  
  async function demo() {
    console.log("demo function")
    return {
      then: function(resolve) {
        resolve("demo")
      }
    }
  }
  
  
  // 2.调用的入口async函数
  async function foo() {
    // console.log("foo function")
  
    const res1 = await requestData("why")
    console.log("res1:", res1)
  
    const res2 = await test()
    console.log("res2:", res2)
  
    const res3 = await bar()
    console.log("res3:", res3)
  
    const res4 = await demo()
    console.log("res4:", res4)
  }
  
  foo()
  ```

  

## 21.3 进程和线程

- **线程和进程是操作系统中的两个概念：**
  - `进程（process）`：计算机`已经运行的程序`，是`操作系统管理程序`的一种方式；
  - `线程（thread）`：操作系统能够运行`运算调度的最小单位`，通常情况下`它被包含在进程`中；
- **听起来很抽象，这里还是给出我的解释：**
  - `进程`：我们可以认为，启动`一个应用程序`，就会默认`启动一个进程`（也可能是多个进程）；
  - `线程`：每`一个进程`中，都会启动`至少一个线程`用来执行程序中的代码，这个线程被称之为`主线程`；
  - 所以我们也可以说进程是线程的容器；
- **再用一个形象的例子解释：**
  - 操作系统类似于一个大工厂；
  - 工厂中里有很多车间，这个车间就是进程；
  - 每个车间可能有一个以上的工人在工厂，这个工人就是线程；



## 21.4 操作系统的工作方式

- **操作系统是如何做到同时让多个进程（边听歌、边写代码、边查阅资料）同时工作呢？**
  - 这是因为`CPU的运算速度非常快`，它可以`快速的在多个进程之间迅速的切换`；
  - 当我们`进程中的线程`获取到`时间片`时，就可以`快速执行我们编写的代码`；
  - 对于用户来说`是感受不到这种快速的切换的`；



## 21.5 浏览器中的JavaScript线程

- 我们经常会说**JavaScript是单线程（可以开启workers）**的，但是**JavaScript的线程应该有自己的容器进程**：`浏览器或者Node`。
- **浏览器是一个进程吗，它里面只有一个线程吗？**
  - 目前`多数的浏览器其实都是多进程`的，当我们`打开一个tab页面时就会开启一个新的进程`，这是为了`防止一个页面卡死而造成
    所有页面无法响应`，整个浏览器需要强制退出；
  - `每个进程中又有很多的线程`，其中`包括执行JavaScript代码的线程`；
- **JavaScript的代码执行是在一个单独的线程中执行的：**
  - 这就意味着JavaScript的代码，在`同一个时刻只能做一件事`；
  - 如果`这件事是非常耗时`的，就意味着当前的线程就`会被阻塞`；
- **所以真正耗时的操作，实际上并不是由JavaScript线程在执行的：**
  - 浏览器的每个进程是多线程的，那么`其他线程可以来完成这个耗时的操作`；
  - 比如`网络请求、定时器`，我们只需要在特性的时候执行应该有的回调即可；



## 21.6 浏览器的事件循环

- **如果在执行JavaScript代码的过程中，有异步操作呢？**

  - 中间我们插入了一个setTimeout的函数调用；

  - 这个函数被放到入调用栈中，执行会立即结束，并不会阻塞后续代码的执行；

    ```javascript
    function sum(num1, num2) {
      return num1 + num2
    }
    
    function bar() {
      return sum(20, 30)
    }
    
    setTimeout(() => {
      console.log("setTimeout")
    }, 1000)
    
    const result = bar()
    ```



## 21.7 宏任务和微任务

- **但是事件循环中并非只维护着一个队列，事实上是有两个队列：**
  - **`宏任务队列（macrotask queue）`：ajax、setTimeout、setInterval、DOM监听、UI Rendering等**
  - `微任务队列（microtask queue）`：Promise的then回调、 Mutation Observer API、queueMicrotask()等
- **那么事件循环对于两个队列的优先级是怎么样的呢？**
  1. `main script中的代码优先执行`（编写的顶层script代码）；
  2. 在`执行任何一个宏任务之前（不是队列，是一个宏任务）`，都会`先查看微任务队列中是否有任务需要执行`
     - 也就是宏任务执行之前，必须保证微任务队列是空的；
     - 如果不为空，那么就优先执行微任务队列中的任务（回调）；



## 21.8 异常处理方案

### 21.8.1 throw关键字
- **throw表达式就是在throw后面可以跟上一个表达式来表示具体的异常信息：**

- **throw关键字可以跟上哪些类型呢？**

  - `基本数据类型`：比如number、string、Boolean
  - `对象类型`：对象类型可以包含更多的信息

- **但是每次写这么长的对象又有点麻烦，所以我们可以创建一个类：**

  ```javascript
  class HyError {
  	constructor(errCode, errMsg) {
  		this.errCode = errCode 
      this.errMsg = errMsg
  	}
  }
  ```

### 21.8.2 Error类型

- **事实上，JavaScript已经给我们提供了一个Error类，我们可以直接创建这个类的对象：**

  ```javascript
  function foo() {
  	throw new Error("error message", "123")
  }
  ```

- **Error包含三个属性：**

  - `messsage`：创建Error对象时传入的message；
  - `name`：Error的名称，通常和类的名称一致；
  - `stack`：整个Error的错误信息，包括函数的调用栈，当我们直接打印Error对象时，打印的就是stack；

- **Error有一些自己的子类：**

  - RangeError：下标值越界时使用的错误类型；
  - SyntaxError：解析语法错误时使用的错误类型；
  - TypeError：出现类型错误时，使用的错误类型；

### 21.8.3 异常的处理

- **我们会发现在之前的代码中，一个函数抛出了异常，调用它的时候程序会被强制终止：**

  - 这是因为如果我们在调用一个函数时，这个函数抛出了异常，但是我们并没有对这个异常进行处理，那么这个异常会继续传
    递到上一个函数调用中；
  - 而如果到了最顶层（全局）的代码中依然没有对这个异常的处理代码，这个时候就会报错并且终止程序的运行；

- **我们先来看一下这段代码的异常传递过程：**

  - foo函数在被执行时会抛出异常，也就是我们的bar函数会拿到这个异常；

  - 但是bar函数并没有对这个异常进行处理，那么这个异常就会被继续传递到调用bar函数的函数，也就是test函数；

  - 但是test函数依然没有处理，就会继续传递到我们的全局代码逻辑中；

  - 依然没有被处理，这个时候程序会终止执行，后续代码都不会再执行了；

    ```javascript
    function foo() {
    	throw "error message"
    }
    
    function bar() {
      foo()
    }
    
    function test() {
      bar()
    }
    
    test()
    ```

### 21.8.4 异常的捕获

- **但是很多情况下当出现异常时，我们并不希望程序直接推出，而是希望可以正确的处理异常：**

  - 这个时候我们就`可以使用try catch`

    ```javascript
    function foo() {
    	throw "error message"
    }
    
    function bar() {
      try {
        foo()
        console.log("foo后续代码")
      } catch (err) {
        console.log(err)
      }
    }
    ```

- **当然，如果有一些必须要执行的代码，我们可以使用finally来执行：**

  - finally表示最终一定会被执行的代码结构；
  - 注意：如果try和finally中都有返回值，那么会使用finally当中的返回值；



# 二十二、storage和正则表达式

## 22.1 Storage

### 22.1.1 认识Storage

- **WebStorage主要提供了一种机制，可以让浏览器提供一种比cookie更直观的key、value存储方式：**

  - `localStorage`：本地存储，提供的是一种`永久性的存储方法`，在关闭掉网页重新打开时，存储的内容依然保留；

  - `sessionStorage`：会话存储，提供的是`本次会话的存储`，在关闭掉会话时，存储的内容会被清除；

    ```javascript
    localStorage.setItem("name", "localStorage")
    sessionStorage.setItem("name", "sessionStorage")
    ```

### 22.1.2 localStorage和sessionStorage的区别

- **验证一**：关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除；
- **验证二**：在页面内实现跳转，localStorage会保留，sessionStorage也会保留；
- **验证三**：在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留；

### 22.1.3 Storage常见的属性

- `Storage.length`：只读属性
  - 返回一个整数，表示存储在Storage对象中的数据项数量；

### 22.1.4 Storage常见的方法

- `Storage.key()`：该方法接受一个数值n作为参数，返回存储中的第n个key名称；
- `Storage.getItem()`：该方法接受一个key作为参数，并且返回key对应的value；
- `Storage.setItem()`：该方法接受一个key和value，并且将会把key和value添加到存储中。
  - 如果key存储，则更新其对应的值；
- `Storage.removeItem()`：该方法接受一个key作为参数，并把该key从存储中删除；
- `Storage.clear()`：该方法的作用是清空存储中的所有key；



## 22.2 正则表达式

### 22.2.1 什么是正则表达式？

- **维基百科对正则表达式的解释：**

  - **正则表达式**（英语：Regular Expression，常简写为regex、regexp或RE），又称**正则表示式、正则表示法、规则表达式、常**
    **规表示法**，是计算机科学的一个概念；
  - 正则表达式使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串。

- **简单概况：正则表达式是一种字符串匹配利器，可以帮助我们搜索、获取、替代字符串；**

- **在JavaScript中，正则表达式使用RegExp类来创建，也有对应的字面量的方式：**

  - 正则表达式主要由两部分组成：模式（patterns）和修饰符（flags）

    ```javascript
    const re1 = new RegExp("HELLO", "I")
    const re2 = /hello/i
    ```

### 22.2.2 正则表达式的使用方法

- JavaScript中的正则表达式被用于 RegExp 的 exec 和 test 方法；

- 也包括 String 的 match、matchAll、replace、search 和 split 方法；

  |    方法    | 描述                                                         |
  | :--------: | ------------------------------------------------------------ |
  |   `exec`   | 一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null）。 |
  |   `test`   | 一个在字符串中测试是否匹配的 RegExp 方法，它返回 true 或 false。 |
  |  `match`   | 一个在字符串中执行查找匹配的 String 方法，它返回一个数组，在未匹配到时会返回 null。 |
  | `matchAll` | 一个在字符串中执行查找所有匹配的 String 方法，它返回一个迭代器（iterator）。 |
  |  `search`  | 一个在字符串中测试匹配的 String 方法，它返回匹配到的位置索引，或者在失败时返回-1。 |
  | `replcace` | 一个在字符串中执行查找匹配的 String 方法，并且使用替换字符串替换掉匹配到的子字符串。 |
  |  `split`   | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。 |

### 22.2.3 修饰符flag的使用

- 常见的修饰符：

  | flag | 含义                   |
  | :--: | ---------------------- |
  |  g   | 全部的，给我匹配全部的 |
  |  i   | 忽略大小写             |
  |  m   | 多行匹配               |

- 需求：

  - 获取一个字符串中所有的abc；

  - 将一个字符串中的所有abc换成大写；

    ```javascript
    let message = "Hello ABC, abc, Abc, AAaBC"
    const pattern = /abc/ig
    const results = message.match(pattern)
    
    message = message.replaceAll(pattern, "ABC")
    ```

### 22.2.4 规则 – 字符类（Character classes）

- **字符类**（Character classes） 是一个特殊的符号，匹配特定集中的任何符号。

  | 字符                   | 含义                                                         |
  | ---------------------- | ------------------------------------------------------------ |
  | \d（“d” 来自 “digit”） | 数字：从 0 到 9 的字符。                                     |
  | \s（“s” 来自 “space”） | 空格符号：包括空格，制表符 \t，换行符 \n 和其他少数稀有字符，例如 \v，\f 和 \r。 |
  | \w（“w” 来自 “word”）  | “单字”字符：拉丁字母或数字或下划线 _。                       |
  | .（点）                | 点 . 是一种特殊字符类，它与 “除换行符之外的任何字符” 匹配    |

- **反向类**（Inverse classes）

  - \D 非数字：除 \d 以外的任何字符，例如字母。

  - \S 非空格符号：除 \s 以外的任何字符，例如字母。

  - \W 非单字字符：除 \w 以外的任何字符，例如非拉丁字母或空格。

    ```javascript
    const message = "CSS2.5"
    const pattern = /CSS\d(\.\d)?/i
    console.log(messgae.match(pattern))
    ```

### 22.2.5 规则 – 锚点（Anchors）

- **符号 ^ 和符号 $ 在正则表达式中具有特殊的意义，它们被称为“锚点”。**

  - 符号 ^ 匹配文本开头；
  - 符号 $ 匹配文本末尾；

- **词边界（Word boundary）**

  - 词边界 \b 是一种检查，就像 ^ 和 $ 一样，它会检查字符串中的位置是否是词边界。
  - 词边界测试 \b 检查位置的一侧是否匹配 \w，而另一侧则不匹配 “\w”

- **匹配下面字符串中的时间：**

  ```javascript
  const message = "now time 22:45, number is 123.456"
  const timePattern = /\b\d\d:\d\d\b/g
  console.log(message.match(timePattern))
  ```

### 22.2.6 规则 – 转义字符串

- **如果要把特殊字符作为常规字符来使用，需要对其进行转义：**

  - 只需要在它前面加个反斜杠；

- **常见的需要转义的字符：`[] \ ^ $ . | ? * + ( )`**

  - 斜杠符号 ‘/’ 并不是一个特殊符号，但是在字面量正则表达式中也需要转义；

- **练习：匹配所有以.js或者jsx结尾的文件名**

  ```javascript
  const fileNames = ["abc.js", "cba.java", "nbs.html", "sds.js", "sjjs.js	x"]
  const newNames = fileName.filter(item => {
    retrun /\.jsx?$/.test(item)/
  })
  ```

- 在webpack当中，匹配文件名时就是以这样的方式。

### 22.2.7 集合（Sets）和范围（Ranges）

- **有时候我们只要选择多个匹配字符的其中之一就可以：**
  
  - 在方括号 […] 中的几个字符或者字符类意味着“搜索给定的字符中的任意一个”；
- **集合（Sets）**
  
  - 比如说，[eao] 意味着查找在 3 个字符 ‘a’、‘e’ 或者 `‘o’ 中的任意一个；
- **范围（Ranges）**
  - 方括号也可以包含字符范围；
  - 比如说，[a-z] 会匹配从 a 到 z 范围内的字母，[0-5] 表示从 0 到 5 的数字；
  - [0-9A-F] 表示两个范围：它搜索一个字符，满足数字 0 到 9 或字母 A 到 F；
  - \d —— 和 [0-9] 相同；
  - \w —— 和 [a-zA-Z0-9_] 相同；

- **案例：匹配手机号码**

  ```javascript
  const phonePettern = /^1[356789]\d{9}$/
  ```

- **排除范围：除了普通的范围匹配，还有类似 [ ^… ]的“排除”范围匹配；**

### 22.2.8 量词（Quantifiers）

- **假设我们有一个字符串 +7(903)-123-45-67，并且想要找到它包含的所有数字。**
  - 因为它们的数量是不同的，所以我们需要给与数量一个范围；
  - 用来形容我们所需要的数量的词被称为**量词（ Quantifiers ）**。
- **数量 {n}**
  - 确切的位数：{5}
  - 某个范围的位数：{3,5}
- **缩写：**
  - +：代表“一个或多个”，相当于 {1,}
  - ?：代表“零个或一个”，相当于 {0,1}。换句话说，它使得符号变得可选；
  - *：代表着“零个或多个”，相当于 {0,}。也就是说，这个字符可以多次出现或不出现；

- **案例：匹配开始或结束标签**

  ```javascript
  const htmlElement = "<div><p>哈哈哈</p><span>呵呵</span></div>"
  const tagPattern = /<\/?[a-z][a-z0-9]*>/ig
  console.log(htmlElement.match(tagPattern))
  ```

### 22.2.9 贪婪（ Greedy）和惰性（ lazy）模式

- **如果我们有这样一个需求：匹配下面字符串中所有使用《》包裹的内容**

  ```javascript
  const message = "我最喜欢的两本书：《黄金时代》和《沉默的大多数》"
  const result = message.match(/《.+》/g)
  console.log(result)
  ```

- **默认情况下的匹配规则是查找到匹配的内容后，会继续向后查找，一直找到最后一个匹配的内容**

  - 这种匹配的方式，我们称之为贪婪模式（Greedy）

- **`懒惰模式`中的量词与贪婪模式中的是相反的。**

  - 只要获取到对应的内容后，就不再继续向后匹配；

  - 我们可以在量词后面再加一个问号 ‘?’ 来启用它；

  - 所以匹配模式变为 *? 或 +?，甚至将 '?' 变为 ??

    ```javascript
    const message = "我最喜欢的两本书：《黄金时代》和《沉默的大多数》"
    const result = message.match(/《.+?》/g)
    console.log(result)
    ```

### 22.2.10 捕获组（capturing group）

- **模式的一部分可以用括号括起来 (...)，这称为“捕获组（capturing group）”。**

- **这有两个作用：**

  - 它允许将匹配的一部分作为结果数组中的单独项；
  - 它将括号视为一个整体；

- **方法 str.match(regexp)，如果 regexp 没有 g 标志，将查找第一个匹配并将它作为一个数组返回：**

  - 在索引 0 处：完全匹配。
  - 在索引 1 处：第一个括号的内容。
  - 在索引 2 处：第二个括号的内容。
  - …等等…

- **案例：匹配到HTML标签，并且获取其中的内容**

  ```javascript
  const str = "<h1>title</h1>"
  const result = str.match(/<(.+?)>/)
  console.log(result[0]) // <h1>
  console.log(result[1]) // </h1>
  ```

- **命名组：**

  - 用数字记录组很困难。

  - 对于更复杂的模式，计算括号很不方便。我们有一个更好的选择：给括号起个名字。

  - 这是通过在开始括号之后立即放置 ? 来完成的。

    ```javascript
    const result = str.match(/(?<why>hel)lo/i)
    ```

- **非捕获组：**

  - 有时我们需要括号才能正确应用量词，但我们不希望它们的内容出现在结果中。

  - 可以通过在开头添加 ?: 来排除组。

    ```javascript
    const result = str.match(/(?<why>hel)(?:lo){2}/i)
    ```

- **or是正则表达式中的一个术语，实际上是一个简单的“或”。**
  - 在正则表达式中，它用竖线 | 表示；
  - 通常会和捕获组一起来使用，在其中表示多个值；

### 22.2.11 案例练习 – 歌词解析

- **歌词解析：http://123.207.32.32:9001/lyric?id=167876**

  ```javascript
  function parseLyric(lyricString) {
    // 1.根据\n切割字符串
    const lyricLineStrings = lyricString.split("\n")
    // console.log(lyricLineStrings)
  
    // 2.针对每一行歌词进行解析
    // [01:22.550]夏末秋凉里带一点温热有换季的颜色
    const timeRe = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/i
    const lyricInfos = []
    for (const lineString of lyricLineStrings) {
      // 1.获取时间
      const result = lineString.match(timeRe)
      if (!result) continue
      const minuteTime = result[1] * 60 * 1000
      const secondTime = result[2] * 1000
      const mSecondTime = result[3].length === 3? result[3]*1: result[3]*10
      const time = minuteTime + secondTime + mSecondTime
      
      // 2.获取内容
      const content = lineString.replace(timeRe, "").trim()
  
      // 3.将对象放到数组中
      lyricInfos.push({ time, content })
    }
  
    return lyricInfos
  }
  ```

### 22.2.12 案例练习 – 时间格式化

- **时间格式化：从服务器拿到时间戳，转成想要的时间格式**

  ```javascript
  function formatDate(time, formatString) {
    // 1.将时间戳转成Date
    const date = new Date(time)
  
    // 2.定义正则和值之间的关系
    const dateO = {
      "y+": date.getFullYear(),
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    }
  
    // 3.for循环进行替换
    for (const key in dateO) {
      const keyRe = new RegExp(key)
      if (keyRe.test(formatString)) {
        const value = (dateO[key] + "").padStart(2, "0")
        formatString = formatString.replace(keyRe, value)
      }
    }
    return fmtString
  }
  
  // 某一个商品上架时间, 活动的结束时间
  const timeEl = document.querySelector(".time")
  const productJSON = {
    name: "iPhone",
    newPrice: 4999,
    oldPrice: 5999,
    endTime: 1659252301637
  }
  
  timeEl.textContent = formatTime(productJSON.endTime, "hh:mm:ss yyyy*MM*dd")
  ```

  























