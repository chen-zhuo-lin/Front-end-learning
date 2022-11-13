# JavaScript的内置类

## 1. 包装类型的使用过程

- 默认情况，**当我们调用一个原始类型的属性或者方法**时，会进行如下操作：

  1. 根据 **原始值**，**创建一个原始类型对应的包装类型对象**；
  2. **调用对应的属性或者方法，返回一个新的值**；
  3. **创建的包装类对象被销毁**；
  4. 通常JavaScript **引擎会进行很多的优化，它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用**。

- **自己创建一个包装类的对象：**

  - name1是字面量（literal）的创建方式，name2是new创建对象的方式；

    ```javascript
    var name1 = "why"
    var name2 = new String("why")
    typeof name1 // string
    typeof name2 // object
    name1 === name2 // false
    ```

- **注意事项**：`null`、`undefined`没有任何的方法，也没有对应的“对象包装类”；



## 2. Math对象

- Math是一个 **内置对象**（不是一个构造函数），它 **拥有一些数学常数属性和数学函数方法**；

### 2.1 Math常见的属性

- `Math.PI`：圆周率，约等于 3.14159；

### 2.2 Math常见的方法

- `Math.floor`：向下舍入取整
- `Math.ceil`：向上舍入取整
- `Math.round`：四舍五入取整
- `Math.random`：生成0~1的随机数（包含0，不包含1）
- `Math.pow(x, y)`：返回x的y次幂



## 3. Array数组

### 3.1 访问数组中的元素

- 通过中括号[]访问
- arr.at(i)：
  - 如果 i >= 0，则与 arr[i] 完全相同。
  - 对于 i 为负数的情况，它则从数组的尾部向前数。

```javascript
const a = arr[0]
const b = arr.at(-1)
```

### 3.2 修改数组中的元素

```javascript
arr[0] = "czl"
```

### 3.3 push() 和 pop()

- `push `在末端添加元素

- `pop `从末端取出一个元素.

  ```javascript
  arr.push("abc","dhs")
  arr.pop()
  ```

### 3.4 unshift() 和 shift()

- `shift `取出队列首端的一个元素，整个数组元素向前前移动；

- `unshift `在首端添加元素，整个其他数组元素向后移动；

  ```javascript
  arr.unshift("curry")
  arr.shift()
  ```

- `push/pop` 方法运行的比较快，而 shift/unshift 比较慢。

### 3.5 arr.splice()

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

### 3.6 length属性

- 用于获取数组的长度
- 当我们修改数组的时候，length 属性会自动更新。
- `length` 属性是可写的
- 所以，清空数组最简单的方法就是：arr.length = 0。

### 3.7 数组的遍历

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

### 3.8 arr.slice() 

- 用于对数组进行截取
- 语法: `arr.slice(begin, end)`
  - 包含bigin元素，但是不包含end元素；

### 3.9 arr.concat()

- 创建一个新数组，其中包含来自于其他数组和其他项的值

  ```javascript
  var newArr = arr.concat(['abc'],"nba")
  ```

### 3.10 arr.join()

- 将一个数组的所有元素连接成一个字符串并返回这个字符串。

  ```javascript
  var arr = [1,2,3,4,5]
  var str = arr.join('0') // 1020304050
  ```

### 3.11 arr.indexOf()

- 语法: `arr.indexOf(searchElement,fromIndex)`
  - 从fromIndex开始查找，如果找到返回对应的索引，没有找到返回-1；
- 也有对应的从最后位置开始查找的 lastIndexOf 方法

### 3.12 arr.includes()

- 判断数组是否包含某个元素
- 语法: `arr.includes(valueToFind, fromIndex)`
  - 从索引 from 开始搜索 item，如果找到则返回 true（如果没找到，则返回 false）

### 3.13 find() 和 findIndex()

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

### 3.14 arr.sort()

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

### 3.15 arr.reverse()

- 将数组中元素的位置颠倒，并返回该数组。

### 3.16 arr.forEach()

- 遍历数组，并且让数组中每一个元素都执行一次对应的方法；

  ```javascript
  arr.forEach((item,index,arr)=>{})
  ```

### 3.17 arr.map()

- map() 方法创建一个新数组；
- 这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成；

```javascript
const newArr = arr.map((item,index,arr)=>{
  return item * 10
})
```

### 3.18 arr.filter()

- filter() 方法创建一个新数组；

- 新数组中只包含每个元素调用函数返回为true的元素；

  ```javascript
  const newArr = arr.filter((item,index,arr)=>{
    return item > 10
  })
  ```

### 3.19 arr.reduce()

- 用于计算数组中所有元素的总和；

- 对数组中的每个元素按序执行一个由您提供的 reducer 函数；

- 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值；

  ```javascript
  const newArr = arr.reduce((previousValue,currentValue)=>{
    return previousValue += currentValue
  },0)
  ```



## 4. Date对象

### 4.1 创建Date对象

```JavaScript
// 创建Date对象
var date = new Date(); // 当前时间（伊尔库茨克标准时间）
var date2 = new Date(1000); // 传入的毫秒数，表示从1970-01-01 00：00：00 UTC 经过的毫秒数
var date3 = new Date("2022-08-08"); // 传入的是datestring，日期的字符串值
// new Date(year,monthIndex [, day [, hours [, minutes [,seconds [, milliseconds]]]]])
var date4 = new Date(2022, 08, 08, 08, 08, 08, 08);
```

### 4.2 dateString时间的表示方式

- 默认打印的时间格式是RFC 2822标准的：

- ISO 8601 标准。

  ```JavaScript
  // RFC 2822标准
  new Date() // Thu Nov 03 2022 18:25:49 GMT+0800 (中国标准时间)
  
  // ISO 8601标准
  new Date().toISOString()  // 2022-11-03T10:26:01.251Z
  ```

### 4.3 Date获取信息的方法

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

### 4.4 Date设置信息的方法

```JavaScript
var dete = new Date()
// 2.也可以给date设置时间(了解)
date.setFullYear(2033);
// 自动校验
date.setDate(32);
```

### 4.5 Date获取Unix时间戳

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

### 4.6 Date.parse方法

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





