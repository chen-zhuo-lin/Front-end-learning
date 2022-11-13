# JavaScript函数this指向

## 1. this的绑定规则

### 1.1 规则一：默认绑定

- **独立函数调用**：函数没有被绑定到某个对象上进行调用；

- **常见的默认绑定：**

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

### 1.2 规则二：隐式绑定

- 另外一种比较常见的调用方式是 **通过某个对象进行调用** 的;

- 隐式绑定的**前提条件**：

  - 必须 **在调用的对象内部有一个对函数的引用**（比如一个属性）；
  - 如果没有这样的引用，在进行调用时，会报找不到该函数的错误；
  - 正是通过这个引用，间接的将this绑定到了这个对象上；

- **常见的隐式绑定：**

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

### 1.3 规则三：call、apply、bind显示绑定

- JavaScript所有的函数都可以使用 **call和apply方法**。

  - 第一个参数是相同的，要求传入一个对象；
    - 这个对象的作用是什么呢？就是给this准备的。
    - 在调用这个函数时，会将this绑定到这个传入的对象上。
  - 后面的参数，apply为数组，call为参数列表；
    - `function.apply(thisArg, [argsArray	])`
    - `function.call(this, arg1, arg2, ...)`

- 因为上面的过程，我们明确的绑定了this指向的对象，所以称之为 **显式绑定**。

- 如果我们希望**一个函数总是显示的绑定到一个对象上**，可以怎么做呢？

  - 使用bind方法，bind() 方法创建一个新的 **绑定函数（bound function，BF）**；
  - 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
    - `function.bind(thisArg[, arg1[, arg2[, ...]]])`

  ```javascript
  function foo(name, age) {
    console.log(this)
  }
  
  foo.call(window) // window
  foo.call({name: "why"}) // {name: "why"}
  
  let bar = foo.bind(obj)
  bar("czl", 19)
  ```

  ```javascript
  function foo(name, age) {
    console.log(this)
  }
  
  foo.call(window) // window
  foo.call({name: "why"}) // {name: "why"}
  
  let bar = foo.bind(obj)
  bar("czl", 19)
  ```

### 1.4 new绑定

- 使用**new关键字来调用函数**，会执行如下的操作：

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



## 2. 规则优先级

1. 默认规则的优先级最低
2. 显示绑定优先级高于隐式绑定
3. new绑定优先级高于隐式绑定
4. new绑定优先级高于bind
   - new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高
   - new绑定可以和bind一起使用，new绑定优先级更高



## 3. this规则之外

### 3.1 忽略显示绑定

- **情况一**：如果在显示绑定中，我们**传入一个null或者undefined**，那么这个显示绑定会被忽略，使用默认规则：

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

### 3.2 间接函数引用

- **情况二**：创建一个函数的 **间接引用**，这种情况使用默认绑定规则。

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

### 3.3 ES6箭头函数

- 情况三：箭头函数不绑定this，它根据外层作用域来决定this。

- **模拟网络请求**的案例：

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



