# 二、JavaScript变量和数据类型

## 1. 变化数据的记录 – 变量

- **如果我们希望记录某一个之后会变量的数据，在JavaScript中我们可以定义一个 变量：**

  - 一个**变量**，就是一个用于**存放数值的容器**；
  - 这个数值可能是一个用于计算的**数字**，或者是一个句子中的**字符串**，或者**其他任意的数据**；
  - 变量的独特之处在于**它存放的数值是可以改变**的；

- **我们可以把变量想象成一个 `盒子`，盒子里面 `装着我们的数据`，我们需要给盒子进行一个特性的名称。**

  - 例如，**变量 message** 可以被想象成一个**标有 “message” 的盒子**，盒子里面的 **值为 “Hello!”**；

  - 并且，这个盒子的值，我们想改变多少次，就可以改变多少次；

    ![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/20221111212101.png)



## 2. 变量的命名格式

- **在JavaScript中如何命名一个变量呢？包含两部分：**

  - **变量的声明**：在JavaScript中声明一个变量使用`var关键字`（variable单词的缩写）

  - **变量的赋值**：使用 = 给变量进行赋值；

    ```javascript
    var name = "why"
    ```

- **这个过程也可以分开操作：**

  ```javascript
  var name;
  name = "why"
  ```

- **同时声明多个变量：**

  ```javascript
  var name, age, height
  name = "why"
  age = 18
  height = 1.88
  
  var name = "why", age = 18, height = 1.88
  ```



## 3. 变量的使用注意

- **注意一：如果一个变量未声明（declaration）就直接使用，那么会报错；**
- **注意二：如果一个变量有声明，但是没有赋值，那么默认值是undefined**
- **注意三：如果没有使用var声明变量也可以，但是不推荐（事实上会被添加到window对象上）**



## 4. typeof操作符

- **因为 ECMAScript 的类型系统是`松散的`，所以需要一种手段来`确定任意变量的数据类型`。**
  - **typeof 操作符** 就是为此而生的。
- **对一个值使用 typeof 操作符会返回下列字符串之一:**
  - "undefined"表示值未定义;
  - "boolean"表示值为布尔值;
  - "string"表示值为字符串;
  - "number"表示值为数值;
  - "object"表示值为对象(而不是函数)或 null;
  - "function"表示值为函数;
  - "symbol"表示值为符号；
- **typeof()的用法：**
  - 你可能还会遇到另一种语法：`typeof(x)`，它 **与 typeof x 相同**
  - typeof是一个**操作符**，**并非是一个函数**，**()只是将后续的内容当做一个整体而已**；



## 5. Number类型

- **number 类型代表整数和浮点数。**

  ```javascript
  var age = 10
  var height = 1.88
  ```

- **数字number可以有很多操作，比如，乘法 \*、除法 /、加法 +、减法 - 等等。**

  ```javascript
  var result1 = 10 * 2
  var result2 = 10 / 3
  ```

- **除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于Number类型（了解）**

  - `Infinity`：代表数学概念中的 **无穷大 ∞**，也可以表示-Infinity；
    - 比如 1/0 得到的就是无穷大；
  - `NaN`：代表一个 **计算错误**，它是一个 **错误的操作**所得到的结果；
    - 比如 字符串和一个数字相乘；

- **在之前我们学习过进制的概念，数字类型也有其他的进制表示方法：**

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

### 5.1 Number的属性

- 最小正数值：`Number.MIN_VALUE`，这个值为： 5e-324，小于这个的数字会被转化为0
- 最大正数值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308
- `Number.MAX_SAFE_INTEGER`：JavaScript 中最大的安全整数 (2^53 - 1)；
- `Number.MIN_SAFE_INTEGER`：JavaScript 中最小的安全整数 -(2^53 - 1)

### 5.2 isNaN

- 用于判断是否不是一个数字。不是数字返回 true，是数字返回 false。

### 5.3 Number实例方法

- 方法一：`toString(base)`，将数字转成字符串，并且按照base进制进行转化
  - base 的范围可以从 2 到 36，默认情况下是 10；
- 方法二：`toFixed(digits)`，格式化一个数字，保留digits位的小数；
  - digits的范围是0到20（包含）之间；

### 5.4 Number类方法

- 方法一：`Number.parseInt(string[, radix])`，将字符串解析成整数，也有对应的全局方法parseInt；
- 方法二：`Number. parseFloat(string)`，将字符串解析成浮点数，也有对应的全局方法parseFloat；



## 6. String类型

### 6.1 创建字符串的方式

```JavaScript
var name = '陈卓林'
var address = "广州市"
// ES6语法
var description = `${name}是${address}的人`
```

### 6.2 字符串拼接

```JavaScript
var str1 = 'hello'
var str2 = 'world'
var newStr = str1 + str2

// 语法: str.concat(str2,[, ...strN])
'hello'.concat('world',['你好'])
```

### 6.3 获取字符串长度

```javascript
console.log(newStr.length)
```

### 6.4 访问字符串的字符

- 使用方法一：通过字符串的索引` str[0]`
- 使用方法二：通过`str.charAt(pos)`方法
- 它们的区别是索引的方式没有找到会返回`undefined`，而`charAt`没有找到会返回空字符串；

### 6.5 修改字符串(大小写)

- toLowerCase()：将所有的字符转成小写；

- toUpperCase() ：将所有的字符转成大写；

  ```JavaScript
  var message = 'Hello'
  message.toLowerCase() // hello
  message.toUpperCase() // HELLO
  
  ```

### 6.6 查找字符串位置 

- 语法:  `str.indexOf(search [, fromIndex])`
  - 从fromIndex开始，查找searchValue的索引；
  - 如果没有找到，那么返回-1；
- 有一个相似的方法，叫lastIndexOf，从最后开始查找（用的较少）

### 6.7 是否包含字符串

- 语法:  `str.includes(searchString[, position])`
  - 从position位置开始查找searchString， 根据情况返回 true 或 false
  - 这是ES6新增的方法

### 6.8 以xxx开头

- 语法: `str.startsWith(searchString[, position])`

  - 从position位置开始，判断字符串是否以searchString开头；

  - 这是ES6新增的方法，下面的方法也一样；

    ```javascript
    message.startsWith("czl")
    
    ```

### 6.9 以xxx结尾 

- 语法:  `str.endsWith(searchString[, length])`

  - 在length长度内，判断字符串是否以searchString结尾；

    ```javascript
    message.endsWith("czl")
    ```

### 6.10 替换字符串

- 语法:  `str.replace(regexp|substr, newstr, newSubStr|function)`

- 查找到对应的字符串，并且使用新的字符串进行替代；

- 这里也可以传入一个正则表达式来查找，也可以传入一个函数来替换；

  ```javascript
  message.replace("czl", "kobe")
  ```

### 6.11 获取子字符串

|           方法            |              选择方式……               |     负值参数      |
| :-----------------------: | :-----------------------------------: | :---------------: |
| slice(start, end) // 推荐 |      从 start 到 end（不含 end）      |       允许        |
|   substring(start, end)   |      从 start 到 end（不含 end）      |    负值代表 0     |
|   substr(start, length)   | 从 start 开始获取长为 length 的字符串 | 允许 start 为负数 |

### 6.12 删除首尾空格 

- 语法: `str.trim()`

### 6.13 字符串分割 

- 语法:  `str.split({separator,[, limit]})`

  - separator：以什么字符串进行分割，也可以是一个正则表达式；

  - limit：限制返回片段的数量；

    ```javascript
    var message = "my name is czl"
    console.log(message.split(" ",4)) // ["my","name","is","czl"]
    ```



## 7. 字符串中的转义字符

- **除了普通的可打印字符以外，一些有特殊功能的字符可以通过转义字符的形式放入字符串中：**

  ![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/20221111215607.png)

- **转义字符串开发中只有特殊场景才会用到，暂时掌握 \’\” \t \n四个的用法即可。**



## 8. Boolean类型

- **Boolean（布尔）类型用于表示真假：**

  - 比如 **是否毕业. 是否有身份证. 是否购买车票. 是否成年人**；
  - 比如开发中，我们会判断一个账号 **是否登录、是否是管理员、是否具备某个权限、是否拥有某个英雄、皮肤等**；

- **布尔（英语：`Boolean`）是计算机科学中的逻辑数据类型，以发明布尔代数的数学家`乔治·布尔`为名。**

- **Boolean 类型仅包含两个值：true 和 false。**

  ```javascript
  var isLogin = true
  var flag = true
  var result = 1 === 1
  ```



## 9. Undefined类型

- **`Undefined 类型`只有一个值，就是特殊值 `undefined`。**

  - 如果我们 **声明一个变量**，但是 **没有对其进行初始化**时，它 **默认就是undefined**；

  ```javascript
  var message 
  console.log(message) / undefined
  console.log(message === undefined) // true
  ```

- **两个注意事项：**

  - **注意一**：最好在变量 **定义的时候进行初始化**，而不只是声明一个变量；
  - **注意二**： **不要显示的将一个变量赋值为undefined**
    - 如果变量刚开始什么都没有，我们可以初始化为0、空字符串、null等值；



## 10. Object类型

- **Object 类型是一个特殊的类型，我们通常把它称为`引用类型或者复杂类型`；**

  - 其他的数据类型我们通常称之为 **“原始类型”**，因为它们的值只包含**一个单独的内容（字符串、数字或者其他）**；

  - Object往往可以表示 **一组数据**，是 **其他数据的一个集合**；

  - 在JavaScript中我们可以使用 **花括号{}** 的方式来表示一个对象；

    ```JavaScript
    var info = {
      name:'why',
      age: 18,
      height: 1.88
    }
    ```

- Object是`对象`的意思，后续我们会专门讲解面向对象的概念等；



## 11. Null类型

- **Null 类型同样只有一个值，即特殊值 null。**

  - null类型通常用来表示 **一个对象为空**，所以通常我们在 **给一个对象进行初始化** 时，会赋值为`null`；

  ```javascript
  var obj = null
  console.log(typeof null) // object
  obj = {
    name: '陈卓林',
    age: 18
  }
  ```

### 11.1 null和undefined的关系

- `undefined`通常只有在一个变量声明但是未初始化时，它的默认值是`undefined`才会用到；
- 不推荐直接给一个变量赋值为`undefined`
- `null`值非常常用，当一个变量准备保存一个对象，但是这个对象不确定时，我们可以先赋值为`null`；



## 12. 数据类型总结

- **JavaScript 中有八种基本的数据类型（前七种为`基本数据类型，也称为原始类型`，而 object 为`复杂数据类型，也称为引用类
  型`）。**
  - `number` 用于任何类型的数字：整数或浮点数。
  - `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
  - `boolean` 用于 true 和 false。
  - `undefined` 用于未定义的值 —— 只有一个 undefined 值的独立类型。
  - `object` 用于更复杂的数据结构。
  - `null` 用于未知的值 —— 只有一个 null 值的独立类型。
  - symbol 用于唯一的标识符。
  - bigint 用于任意长度的整数。



## 13. 数据类型的转换

### 13.1 字符串String的转换

- **转换方式一：隐式转换**
  - **一个字符串和另一个字符串进行+操作**；
    - 如果+运算符左右两边有一个是字符串，那么另一边会自动转换成字符串类型进行拼接；
  - **某些函数的执行也会自动将参数转为字符串类型**;
    - 比如`console.log`函数；
- **转换方式二：显式转换**
  - 调用String()函数；
  - 调用toString()方法

### 13.2 数字类型Number的转换

- **转换方式一：隐式转换**

  - 在 **算数运算 **中，通常 **会将其他类型转换成数字类型** 来进行运算；
    - 比如 "6" / "2"；
      - 但是 **如果是+运算**，并且 **其中一边有字符串**，那么还是按照字符串来连接的；

- **转换方式二：显式转换**

  - 我们也可以·使用Number()函数·来进行显式的转换；

- **其他类型转换数字的规则：**

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221111221454.png)

### 13.3 布尔类型Boolean的转换

- **布尔（boolean）类型转换是最简单的**

- 它发生在 **逻辑运算** 中，但是 **也可以通过调用`Boolean(value)`** 显式地进行转换。

- **转换规则如下：**

  - 直观上为“空”的值（如 0、空字符串、null、undefined 和 NaN）将变为 false;

  - 其他值变成 true。

    ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221111222145.png)

- **注意：包含 0 的字符串 "0" 是 true**

  - 一些编程语言（比如 PHP）视 "0" 为 false。但在 JavaScript 中，非空的字符串总是 true。

