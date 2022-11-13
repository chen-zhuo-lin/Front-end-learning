# JavaScript中的函数

## 1. 函数的参数

- **函数：**把 **具有独立功能的代码块** 组织为一个小模块，在需要的时候 **调用**
- **函数的参数**：
  - 在函数 **内部**，把参数当做 **变量** 使用，进行需要的数据处理
  - 函数调用时，按照函数定义的**参数顺序**，把 **希望在函数内部处理的数据**，**通过参数** 传递
- **形参和实参**
  - **形参**：**定义** 函数时，小括号中的参数，是用来接收参数用的，在函数内部 **作为变量使用**
  - **实参**：**调用** 函数时，小括号中的参数，是用来把数据传递到 **函数内部** 用的



## 2. 函数的返回值

- 使用 **return关键字** 来返回结果；
- 一旦在 **函数中执行return操作**，那么当前函数会 **终止**；
- 如果函数中没有使用 return语句 ，那么函数有默认的返回值：`undefined`；
- 如果函数使用 return语句，但是`return`后面没有任何值，那么函数的返回值也是：`undefined`；



## 3. 递归函数

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



## 4. 局部变量和外部变量

- **ES5之前没有块级作用域的概念，但是函数可以定义自己的作用域。**
  - **作用域（Scope）**：表示 **一些标识符的作用有效范围**（所以也有被翻译为有效范围的）；
  - **函数的作用域**： 表示 **在函数内部定义的变量，只有在函数内部可以被访问到**；
- **外部变量和局部变量的概念**
  - 定义在函数内部的变量，被称之为 **局部变量（Local Variables）**。
  - 定义在函数外部的变量，被称之为 **外部变量（Outer Variables）**。
- **什么是全局变量？**
  - 在函数之外声明的变量（在script中声明的），称之为 **全局变量**。
  - 全局变量 **在任何函数中都是可见** 的。
  - 通过 **`var`声明的全局变量会在window对象** 上添加一个属性；
- **在函数中，变量的访问顺序**
  - 优先访问自己函数中的变量，没有找到时，在外部中访问。



## 5. 函数声明 vs 函数表达式

- **首先，语法不同：**
  - **函数声明**：在主代码流中声明为 **单独的语句** 的函数。
  - **函数表达式**：在 **一个表达式中或另一个语法结构** 中创建的函数。
- **其次，JavaScript创建函数的时机是不同的：**
  - 函数表达式是在代码 **执行到达时** 被创建，并且 **仅从那一刻起可用**。
  - 在 **函数声明被定义之前，它就可以被调用**。
    - 这是 **内部算法的缘故**；
    - 当 **JavaScript 准备 运行脚本** 时，首先会在脚本中 **寻找全局函数声明，并创建这些函数**；



## 6. 回调函数

- foo这种函数我们也可以称之为**高阶函数**；

  ```javascript
  // 高阶函数foo
  function foo(fn){
    fn()
  }
  foo(function (){
      console.log("我是匿名函数被调用")
  })
  ```

- **高阶函数必须至少满足两个条件之一**：

  - 接受 **一个或多个函数** 作为输入；
  - **输出一个函数**；

- **匿名函数**：

  - 如果在传入一个函数时，我们没有指定这个函数的名词或者通过函数表达式指定函数对应的变量，那么这个函数称之为匿名函数。



## 7. 立即执行函数

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



## 8. 函数对象的属性

- **name**：一个函数的名词我们可以通过name来访问

- **length**：属性length用于返回函数参数的个数；

  - 注意：rest参数是不参与参数的个数的；

  ```JavaScript
  function foo(name, age) {
    
  }
  foo.name // foo
  foo.length // 2
  ```



## 9. arguments对象

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

### 9.1 arguments转Array

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



## 10. 剩余参数和arguments的区别

- **剩余参数和arguments的区别：**
  1. 剩余参数只包含那些 **没有对应形参的实参**，而 **arguments 对象包含了传给函数的所有实参**；
  2. **arguments对象不是一个真正的数组**，而 **rest参数是一个真正的数组**，可以进行数组的所有操作；
  3. arguments是 **早期的ECMAScript**中为了方便去获取所有的参数提供的一个数据结构，而rest参数是ES6中提供并且希望以此
     来替代arguments的；
- **剩余参数必须放到最后一个位置，否则会报错。**



## 11. 函数的默认参数(ES6)

- **在ES6中，我们允许给函数一个默认值：**

  ```javascript
  function foo(x = 20, y = 30) {
  
  }
  
  // 和解构一起来使用
  // 写法一
  function foo({name, age} = {name: "why", age: 18}) {
  	console.log(name, age)
  }
  
  // 写法二
  function foo({name = "why", age = 18} = {}) {
  	console.log(name, age)
  }
  ```

- **参数的默认值我们通常会将其放到最后（在很多语言中，如果不放到最后其实会报错的）：**

- **默认值会改变函数的length的个数，默认值以及后面的参数都不计算在length之内了。**



## 12. 箭头函数(ES6)

- **箭头函数的注意事项：**

  1. 箭头函数 **不会绑定this、arguments、super参数**；
  2. 箭头函数是 **没有显式原型prototype** 的，所以不能作为构造函数，使用new来创建对象；

- **箭头函数的编写方式：**

  - (): 函数的参数

  - {}: 函数的执行体

    ```javascript
    nums.forEach((item, index, arr) => {
      
    })
    ```

### 12.1 箭头函数的编写优化

- **优化一: 如果只有一个参数()可以省略**
- **优化二: 如果函数执行体中只有一行代码, 那么可以省略大括号**
- **优化三: 如果函数执行体只有返回一个对象, 那么需要给这个对象加上()**

### 12.2 箭头函数的this

- 箭头函数并不绑定this对象，那么this引用就会从上层作用域中找到对应的this

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112120051.png)



## 13. JavaScript纯函数

### 13.1 什么是纯函数

- 确定的输入，一定会产生确定的输出；
- 函数在执行过程中，不能产生副作用；

### 13.2 副作用

- 在**执行一个函数**时，除了**返回函数值**之外，还对**调用函数产生了附加的影响**，比如**修改了全局变量，修改参数或者改变外部的存储**;

### 13.3 案例

- **slice就是一个纯函数，不会修改数组本身，而splice函数不是一个纯函数；**

  ```javascript
  var names = ['abc','cba','nba']
  
  var newNames = names.slice(0, 2)
  
  var newNames2 = names.splice(0, 2)
  ```

### 13.4 作用和优势

- 可以**安心的编写和安心的使用**；
- 在**写的时候**保证了函数的纯度，只是**单纯实现自己的业务逻辑**即可，**不需要关心传入的内容**是如何获得的，或者依赖**其他的外部变量**是否已经发生了修改；
- 在**用的时候**，你确定**你的输入内容不会被任意篡改**，并且**自己确定的输入**，一定会**有确定的输出**；



## 14. 函数柯里化

### 14.1 什么是函数柯里化

- 只**传递给函数一部分参数来调用它**，让**它返回一个函数去处理剩余的参数**，这个过程就称之为柯里化；

- 柯里化是一种函数的转换，将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。
  - 柯里化不会调用函数。它只是对函数进行返回。

### 14.2 柯里化的代码转换

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

### 14.3 柯里化优势

- **函数的职责单一**

  - 一个函数处理一个问题，而不是将一大堆的处理过程交给一个函数来处理；
  - 将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用处理后的结果；

- **函数的参数复用**

  - makeAdder函数要求我们传入一个num；

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

### 14.4 自动柯里化函数

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



## 15. 组合函数

### 15.1 什么是组合函数

- 将这两个函数组合起来，自动依次调用，这个过程就是**对函数的组合**，我们称之为**组合函数（Compose Function）**；

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

### 15.2 实现组合函数

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



## 16. with语句的使用

- **with语句** 扩展一个语句的作用域链。

- 不建议使用with语句，因为它可能是混淆错误和兼容性问题的根源。

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



## 17. eval函数

- **eval是一个特殊的函数**，它可以 **将传入的字符串当做JavaScript代码来运行**；

- **eval会将最后一句执行语句的结果，作为返回值**;

  ```javascript
  var evalString = `var message = "Hello World";console.log(message)`
  eval(evalString)
  
  console.log(message)
  ```

- **不建议在开发中使用eval：**
  - eval代码的 **可读性非常的差**；
  - eval是 **一个字符串**，那么有可能在 **执行的过程中被刻意篡改，那么可能会造成被攻击的风险**；
  - eval的执行 **必须经过JavaScript解释器，不能被JavaScript引擎优化**；



## 18. 严格模式

### 18.1 认识严格模式

- 严格模式是一种 **具有限制性的JavaScript模式**，从而使 **代码隐式的脱离了 ”懒散（sloppy）模式“**；
- **支持严格模式的浏览器** 在检测到代码中有严格模式时，会 **以更加严格的方式对代码进行检测和执行**；

- 严格模式对正常的JavaScript语义进行了一些限制:
  - 严格模式通过 **抛出错误** 来消除一些原有的 **静默（silent）** 错误；
  - 严格模式让 **JS引擎在执行代码时可以进行更多的优化**（不需要对一些特殊的语法进行处理）；
  - 严格模式禁用了 **在ECMAScript未来版本中可能会定义的一些语法**；

### 18.2 开启严格模式

- **严格模式通过在文件或者函数开头使用 use strict 来开启。**

- 现代 JavaScript 支持 “class” 和 “module” ，它们会自动启用 use strict；

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

### 18.3 严格模式限制

1. 无法意外的创建全局变量
2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
3. 严格模式下试图删除不可删除的属性
4. 严格模式不允许函数参数有相同的名称
5. 不允许0的八进制语法
6. 在严格模式下，不允许使用with
7. 在严格模式下，eval不再为上层引用变量
8. 严格模式下，this绑定不会默认转成对象



## 19. 手写apply、call、bind函数实现

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









