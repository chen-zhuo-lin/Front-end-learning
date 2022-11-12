# 六、JavaScript中的函数

## 1. 认识函数

- **什么是函数呢?**
  - `函数`其实就是`某段代码的封装`，这段代码帮助我们完成某一个功能；
  - 默认情况下JavaScript引擎或者浏览器会给我们`提供一些已经实现好的函数`；
  - 我们也可以`编写属于自己的函数`；



## 2. 函数的参数

- **函数的参数:**
  - `函数`，把 `具有独立功能的代码块` 组织为一个小模块，在需要的时候 `调用`
  - `函数的参数`，增加函数的 `通用性`，针对 `相同的数据处理逻辑`，能够 `适应更多的数据`
    - 在函数 **内部**，把参数当做 **变量** 使用，进行需要的数据处理
    - 函数调用时，按照函数定义的**参数顺序**，把 **希望在函数内部处理的数据**，**通过参数** 传递
- **形参和实参**
  - **形参（参数 parameter）**：**定义** 函数时，小括号中的参数，是用来接收参数用的，在函数内部 **作为变量使用**
  - **实参（参数 argument）**：**调用** 函数时，小括号中的参数，是用来把数据传递到 **函数内部** 用的



## 3. 函数的返回值

- **函数不仅仅可以有参数, 也可以有`返回值：`**
  - 使用`return关键字`来返回结果；
  - 一旦在`函数中执行return操作`，那么当前函数会`终止`；
  - 如果函数中没有使用 return语句 ，那么函数有默认的返回值：`undefined`；
  - 如果函数使用 return语句，但是`return`后面没有任何值，那么函数的返回值也是：`undefined`；



## 4. arguments参数

- **函数有一个特别的对象：arguments对象**
  - 默认情况下，`arguments对象`是所有（非箭头）函数中都可用的`局部变量`；
  - 该对象中存放着所有的`调用者传入的参数`，`从0位置开始，依次存放`；
  - arguments变量的类型是`一个object类型（ array-like ），不是一个数组`，但是和数组的用法看起来很相似；
  - 如果`调用者传入的参数多余函数接收的参数`，可以`通过arguments去获取所有的参数`；



## 5. 递归函数

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



## 6. 局部变量和外部变量

- **在JavaScript（ES5之前）中没有块级作用域的概念，但是函数可以定义自己的作用域。**
  - `作用域（Scope）`表示`一些标识符的作用有效范围`（所以也有被翻译为有效范围的）；
  - `函数的作用域`表示`在函数内部定义的变量，只有在函数内部可以被访问到`；
- **外部变量和局部变量的概念**
  - 定义在函数内部的变量，被称之为`局部变量（Local Variables）`。
  - 定义在函数外部的变量，被称之为`外部变量（Outer Variables）`。
- **什么是全局变量？**
  - 在函数之外声明的变量（在script中声明的），称之为`全局变量`。
  - 全局变量`在任何函数中都是可见`的。
  - 通过`var声明的全局变量会在window对象`上添加一个属性（了解）；
- **在函数中，变量的访问顺序**
  - 优先访问自己函数中的变量，没有找到时，在外部中访问。



## 7. 函数声明 vs 函数表达式

- **首先，语法不同：**
  - `函数声明`：在主代码流中声明为`单独的语句`的函数。
  - `函数表达式`：在`一个表达式中或另一个语法结构`中创建的函数。
- **其次，JavaScript创建函数的时机是不同的：**
  - 函数表达式是在代码`执行到达时`被创建，并且`仅从那一刻起可用`。
  - 在`函数声明被定义之前，它就可以被调用`。
    - 这是`内部算法的原故`；
    - 当 `JavaScript 准备 运行脚本`时，首先会在脚本中`寻找全局函数声明，并创建这些函数`；
- **开发中如何选择呢？**
  - 当我们需要`声明一个函数`时，`首先考虑函数声明语法`。
  - 它能够为组织代码提供`更多的灵活性`，因为我们可以`在声明这些函数之前调用这些函数`。



## 8. 回调函数（Callback Function）

- **既然函数可以作为一个值相互赋值，那么也可以传递给另外一个函数。**

  ```javascript
  // 高阶函数foo
  function foo(fn){
    fn()
  }
  foo(function (){
      console.log("我是匿名函数被调用")
  })
  ```

- foo这种函数我们也可以称之为**高阶函数（Higher-order function）**；

- **高阶函数必须至少`满足两个条件之一`：**

  - 接受`一个或多个函数`作为输入；
  - `输出一个函数`；

- **`匿名（anonymous）函数`的理解**：

  - 如果在传入一个函数时，我们没有指定这个函数的名词或者通过函数表达式指定函数对应的变量，那么这个函数称之为匿名函数。



## 9. 立即执行函数

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



## 10. 函数对象的属性

- **我们知道JavaScript中函数也是一个对象，那么对象中就可以有属性和方法。**

- `属性name`：一个函数的名词我们可以通过name来访问

- `属性length`：属性length用于返回函数参数的个数；

  - 注意：rest参数是不参与参数的个数的；

  ```JavaScript
  function foo(name, age) {
    
  }
  foo.name // foo
  foo.length // 2
  ```



## 11. arguments

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

### 11.1 arguments转Array

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



## 12. 函数的剩余（rest）参数

- **ES6中引用了rest parameter，可以将不定数量的参数放入到一个数组中：**

  - 如果最后一个参数是 ... 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组；

    ```javascript
    function foo(m, n, ...args) {
    	
    }
    ```

- **那么剩余参数和arguments有什么区别呢？**

  - 剩余参数只包含那些`没有对应形参的实参`，而 `arguments 对象包含了传给函数的所有实参`；
  - `arguments对象不是一个真正的数组`，而`rest参数是一个真正的数组`，可以进行数组的所有操作；
  - arguments是`早期的ECMAScript`中为了方便去获取所有的参数提供的一个数据结构，而rest参数是ES6中提供并且希望以此
    来替代arguments的；

- **剩余参数必须放到最后一个位置，否则会报错。**



## 13. 函数的默认参数

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



## 14. 箭头函数 arrow function

- **箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁：**

  - 箭头函数`不会绑定this、arguments属性`；
  - 箭头函数`不能作为构造函数来使用`（不能和new一起来使用，会抛出错误）；

- **箭头函数如何编写呢？**

  - (): 函数的参数

  - {}: 函数的执行体

    ```javascript
    nums.forEach((item, index, arr) => {
      
    })
    ```

### 14.1 箭头函数的编写优化

- **优化一: 如果只有一个参数()可以省略**
- **优化二: 如果函数执行体中只有一行代码, 那么可以省略大括号**
- **优化三: 如果函数执行体只有返回一个对象, 那么需要给这个对象加上()**

### 14.2 ES6箭头函数this

- **之前的代码在ES6之前是我们最常用的方式，从ES6开始，我们会使用箭头函数：**

  - 为什么在setTimeout的回调函数中可以直接使用this呢？

  - 因为箭头函数并不绑定this对象，那么this引用就会从上层作用于中找到对应的this

    ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112120051.png)

### 14.3 函数箭头函数的补充

- 箭头函数是`没有显式原型prototype`的，所以不能作为构造函数，使用new来创建对象；
- 箭头函数也`不绑定this、arguments、super参数`；



## 15. JavaScript纯函数

### 15.1 理解JavaScript纯函数

- **纯函数的维基百科定义：**
  - 在程序设计中，若一个函数`符合以下条件`，那么这个函数被称为纯函数：
  - 此函数`在相同的输入值时`，需`产生相同的输出`。
  - 函数的`输出和输入值以外的其他隐藏信息或状态无关`，也和`由I/O设备产生的外部输出`无关。
  - 该函数`不能有语义上可观察的函数副作用`，诸如`“触发事件”`，`使输出设备输出，或更改输出值以外物件的内容`等。
- **简单总结:**
  - `确定的输入，一定会产生确定的输出`；
  - `函数在执行过程中，不能产生副作用`；

### 15.2 副作用概念的理解

- **副作用（side effect）**其实本身是医学的一个概念，比如我们经常说吃什么药本来是为了治病，可能会产生一些其他的副作用；
- 在计算机科学中，也引用了副作用的概念，表示`在执行一个函数`时，除了`返回函数值`之外，还对`调用函数产生了附加的影响`，比如`修改了全局变量，修改参数或者改变外部的存储`;
- **纯函数在执行的过程中就是不能产生这样的副作用**
  - 副作用往往是产生`bug的 “温床”`。

### 15.3 纯函数的案例

- **我们来看一个对数组操作的两个函数：**

  - `slice`：截取数组时不会对原数组进行任何操作,而是生成一个新的数组；
  - `splice`：截取数组, 会返回一个新的数组, 也会对原数组进行修改；

- **slice就是一个纯函数，不会修改数组本身，而splice函数不是一个纯函数；**

  ```javascript
  var names = ['abc','cba','nba']
  
  var newNames = names.slice(0, 2)
  
  var newNames2 = names.splice(0, 2)
  ```

### 15.4 纯函数的作用和优势

- 可以`安心的编写和安心的使用`；
- 在`写的时候`保证了函数的纯度，只是`单纯实现自己的业务逻辑`即可，`不需要关心传入的内容`是如何获得的或者依赖`其他的外部变量`是否已经发生了修改；
- 在`用的时候`，你确定`你的输入内容不会被任意篡改`，并且`自己确定的输入`，一定会`有确定的输出`；



## 16. 函数柯里化

### 16.1 柯里化概念的理解

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

### 16.2 柯里化的代码转换

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

### 16.3 柯里化优势

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

### 16.4 柯里化案例练习

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

### 16.5 自动柯里化函数

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



## 17. 组合函数

### 17.1 组合函数概念的理解

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

### 17.2 实现组合函数

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



## 18. with语句的使用

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



## 19. eval函数

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



## 20. 严格模式

### 20.1 认识严格模式

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

### 20.2 开启严格模式

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

### 20.3 严格模式限制

1. 无法意外的创建全局变量
2. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
3. 严格模式下试图删除不可删除的属性
4. 严格模式不允许函数参数有相同的名称
5. 不允许0的八进制语法
6. 在严格模式下，不允许使用with
7. 在严格模式下，eval不再为上层引用变量
8. 严格模式下，this绑定不会默认转成对象



## 21. 手写apply、call、bind函数实现

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

