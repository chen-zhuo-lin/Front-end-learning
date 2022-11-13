# JavaScript变量和数据类型

## 1. 变化数据的记录 – 变量

- **变量的定义：**

  - 一个 **变量**，就是一个用于 **存放数值的容器**；
  - 这个数值可能是一个用于计算的 **数字**，或者是一个句子中的 **字符串**，或者 **其他任意的数据**；
  - 变量的独特之处在于 **它存放的数值是可以改变** 的；

- **举例说明:**

  - 例如，**变量 message** 可以被想象成一个 **标有"message" 的盒子**，盒子里面的 **值为 “Hello!”**；

  - 并且，这个盒子的值，我们想改变多少次，就可以改变多少次；

    ![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/20221111212101.png)



## 2. 声明变量

- **变量的声明**：在JavaScript中声明一个变量使用`var`关键字（variable单词的缩写）

- **变量的赋值**：使用 = 给变量进行赋值；

  ```javascript
  var name = "why"
  
  // 分开操作
  var name;
  name = "why"
  
  // 同时声明多个变量
  var name = "why", age = 18, height = 1.88
  ```



## 3. 变量的使用注意

- **注意一**：如果一个变量未声明（declaration）就直接使用，那么会报错；
- **注意二**：如果一个变量有声明，但是没有赋值，那么默认值是undefined;
- **注意三**：如果没有使用var声明变量也可以，但是不推荐（事实上会被添加到window对象上）



## 4. typeof操作符

- js的数据类型是**松散的**，所以需要一种手段来确定任意变量的数据类型。
- 对一个值使用 **typeof** 操作符会返回下列字符串之一:
  - "undefined" 表示值未定义;
  - "boolean" 表示值为布尔值;
  - "string" 表示值为字符串;
  - "number" 表示值为数值;
  - "object" 表示值为对象(而不是函数)或 null;
  - "function" 表示值为函数;
  - "symbol" 表示值为符号；
- **typeof()的用法：**
  - 你可能还会遇到另一种语法：`typeof(x)`，它与`typeof x`相同
  - typeof是一个 **操作符**，**并非是一个函数**，()只是将后续的内容当做一个整体而已；



## 5. Number类型

- **number 类型代表整数和浮点数。**

  ```javascript
  var age = 10
  var height = 1.88
  ```

- **number的基本操作:**

  ```javascript
  var result1 = 10 * 2
  var result2 = 10 / 3
  ```

- **特殊数值:**

  - **Infinity**：代表数学概念中的 **无穷大 ∞**，也可以表示-Infinity；
    - `const res = 1 / 0`
  - **NaN**：代表一个 **计算错误**，它是一个 **错误的操作** 所得到的结果；
    - `const res = "str" * 20`

- **数字类型的进制表示方法：**

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

- 最小正数值(5e-324，小于这个的数字会被转化为0)：`Number.MIN_VALUE`
- 最大正数值(1.7976931348623157e+308)：`Number.MAX_VALUE`
- JavaScript 中最大的安全整数 (2^53 - 1)：`Number.MAX_SAFE_INTEGER`
- JavaScript 中最小的安全整数 -(2^53 - 1)：`Number.MIN_SAFE_INTEGER`

### 5.2 isNaN

```javascript
const num = 10

// 不是数字返回true，是数字返回 false
isNaN(num) // false
```

### 5.3 Number实例方法

- `toString(base)`：将数字转成字符串，并且按照base(2 ~ 36)进制进行转化，默认是10
- `toFixed(digits)`：格式化一个数字，保留digits(0 ~ 20)位的小数；

### 5.4 Number类方法

- `Number.parseInt(string[, radix])`：将字符串解析成整数，也有对应的全局方法parseInt；
- `Number. parseFloat(string)`：将字符串解析成浮点数，也有对应的全局方法parseFloat；



## 6. String类型

### 6.1 创建字符串

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

- 方法一：通过字符串的索引` str[0]`，没有找到会返回`undefined`
- 方法二：通过`str.charAt(pos)`方法，没有找到会返回空字符串

### 6.5 修改字符串(大小写)

- `toLowerCase()`：将所有的字符转成小写；
- `toUpperCase()`：将所有的字符转成大写；

### 6.6 str.indexOf

- 语法:  `str.indexOf(search [, fromIndex])`
  - 从fromIndex开始，查找searchValue的索引；
  - 如果没有找到，那么返回-1；
- 有一个相似的方法，叫lastIndexOf，从最后开始查找（用的较少）

### 6.7 str.includes(ES6)

- 语法:  `str.includes(searchString[, position])`
  - 从position位置开始查找searchString， 根据情况返回 true 或 false

### 6.8 str.startsWith

- 语法: `str.startsWith(searchString[, position])`
  - 从position位置开始，判断字符串是否以searchString开头；
  - 这是ES6新增的方法，下面的方法也一样；

### 6.9 str.endsWith

- 语法:  `str.endsWith(searchString[, length])`
  - 在length长度内，判断字符串是否以searchString结尾；

### 6.10 str.replace

- 语法:  `str.replace(regexp|substr, newstr, newSubStr|function)`
- 查找到对应的字符串，并且使用新的字符串进行替代；
- 这里也可以传入一个正则表达式来查找，也可以传入一个函数来替换；

### 6.11 获取子字符串

|           方法            |              选择方式……               |     负值参数      |
| :-----------------------: | :-----------------------------------: | :---------------: |
| slice(start, end) // 推荐 |      从 start 到 end（不含 end）      |       允许        |
|   substring(start, end)   |      从 start 到 end（不含 end）      |    负值代表 0     |
|   substr(start, length)   | 从 start 开始获取长为 length 的字符串 | 允许 start 为负数 |

### 6.12 str.trim 

- 语法: `str.trim()`

### 6.13 str.split

- 语法:  `str.split({separator,[, limit]})`

  - separator：以什么字符串进行分割，也可以是一个正则表达式；

  - limit：限制返回片段的数量；

    ```javascript
    var message = "my name is czl"
    console.log(message.split(" ",4)) // ["my","name","is","czl"]
    ```



## 7. 字符串中的转义字符

![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/20221111215607.png)



## 8. Boolean类型

- **Boolean（布尔）类型用于表示真假，仅包含两个值：true 和 false。**

  ```javascript
  var isLogin = true
  var flag = true
  var result = 1 === 1
  ```



## 9. Undefined类型

- **Undefined 类型** 只有一个值，就是特殊值 `undefined`。

  ```javascript
  // 声明变量，未赋值，就是undefined
  var message 
  console.log(message) / undefined
  console.log(message === undefined) // true
  ```

- **两个注意事项：**

  1. 最好在**变量定义的时候进行初始化**，而**不只是声明一个变量**；
  2. 不要显示的将一个变量赋值为`undefined`



## 10. Object类型

- Object往往可以表示**一组数据**，是**其他数据的一个集合**，我们通常把它称为**引用类型或者复杂类型**；

  ```JavaScript
  // 创建对象的方式
  var info = {
    name:'why',
    age: 18,
    height: 1.88
  }
  ```



## 11. Null类型

- **Null 类型同样只有一个值，即特殊值 null，通常用来表示一个对象为空。**

  ```javascript
  // 对象初始化，赋值为null
  var obj = null
  console.log(typeof null) // object
  obj = {
    name: '陈卓林',
    age: 18
  }
  ```

### 11.1 null和undefined的关系

- `undefined`通常只有在一个变量声明但是未初始化时，它的默认值是`undefined`才会用到；
- `null`值非常常用，当一个变量准备保存一个对象，但是这个对象不确定时，我们可以先赋值为`null`；



## 12. 数据类型总结

- **JS的8种数据类型（7种基本数据类型/原始类型，1种复杂数据类型/引用类型(Object)）。**
  - **number**：用于任何类型的数字：整数或浮点数。
  - **string**：用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
  - **boolean**：用于 `true` 和 `false`。
  - **undefined**：用于未定义的值 —— 只有一个 undefined 值的独立类型。
  - **object**：用于更复杂的数据结构。
  - **null**：用于未知的值 —— 只有一个 null 值的独立类型。
  - **symbol**：用于唯一的标识符。
  - **bigint**：用于任意长度的整数。



## 13. 数据类型的转换

### 13.1 String的转换

- **转换方式一：隐式转换**

  ```javascript
  const str = "hello"
  const num = 10
  // 一个字符串和其他数据类型进行+操作
  const result = str + num
  
  // console.log函数，会自动将参数转为字符串类型
  console.log(num)
  ```

- **转换方式二：显式转换**

  - 调用`String()`函数
  - 调用`toString()`方法

### 13.2 Number的转换

- **转换方式一：隐式转换**

  ```javascript
  const str = "6"
  // 算数运算，会将其他类型转换成数字类型
  const num = str / 2
  ```

- **转换方式二：显式转换**

  - 调用`Number()`函数

- **其他类型转换数字的规则：**

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221111221454.png)

### 13.3 Boolean的转换

- **显式转换：**

  - 调用`Boolean()`函数

- **其他类型转换规则如下：**

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221111222145.png)

- 注意：包含 0 的字符串 "0" 是 true

  

  

