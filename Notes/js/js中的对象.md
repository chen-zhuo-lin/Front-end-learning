# JavaScript中的面向对象

## 1. 认识对象类型

- 对象类型是一种 **存储键值对（key-value）** 的更复杂的数据类型；

- 对象类型可以 **使用{…}** 来创建的复杂类型，里面包含的是 **键值对（“key: value”）**；
- **键值对** 可以是 **属性和方法（在对象中的函数称之为方法）**；
- 其中 **key是字符串**（也叫做属性名，ES6之后也可以是Symbol类型)
- 其中 **value可以是任意类型**，包括基本数据类型、函数类型、对象类型等；



## 2. 对象的基本使用

- **对象的三种创建方法**：

  - **对象字面量（Object Literal）**：通过{}
  - **new Object+动态添加属性**；
  - **new 其他类**；

- **对象的使用过程包括如下操作：**

  - **访问** 对象的属性；

  - **修改** 对象的属性；

  - **添加** 对象的属性；

  - **删除** 对象的属性；

    ```javascript
    var message = "hello world"
    var info = {
      name: '陈卓林',
      age: 18,
      // 方括号的使用
      "hello world": '你好, 世界',
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
    
    obj['hello world']
    obj[message]
    ```



## 3. 对象的遍历

- **对象的遍历（迭代）：表示获取对象中所有的属性和方法**。

  - `Object.keys()` 方法会返回一个由一个给定对象的自身可枚举属性组成的数组；

- **遍历方式一：普通for循环**

  ```javascript
  var infoKeys = Object.keys(info)
  for(var i = 0;i < infoKeys.length; i++){
    var key = infoKeys[i]
    var value = info[key]
  }
  ```

- **遍历方式二：for in 遍历方法**

  ```javascript
  for(var key in info){
    var value = info[key]
  }
  ```



## 4. 栈内存和堆内存

- **程序是需要加载到内存中来执行的，可以将内存划分为两个区域：栈内存和堆内存。**

  - **原始类型** 占据的空间是在 **栈内存** 中分配的；

  - **对象类型** 占据的空间是在 **堆内存** 中分配的；

    ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112095053.png)



## 5. 值类型和引用类型

- **原始类型的保存方式：在变量中保存的是值本身**，所以原始类型也被称之为 **值类型**；

- **对象类型的保存方式：在变量中保存的是对象的“引用”**，所以对象类型也被称之为 **引用类型**；

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112095453.png)



## 6. this指向什么？

- **两个this的判断方法：**

  - 在全局环境下面，this指向window；

  - 通过对象调用，this指向调用的对象；

    ```javascript
    function foo() {
      console.log(this)
    }
    foo() // window
    
    var obj = {
      bar: function() {
        console.log(this)
      }
    }
    ob.bar() // obj对象
    ```

    

## 7. 创建对象的方案

### 7.1 工厂函数

- **封装一个函数**，这个函数用于帮助我们 **创建一个对象**，我们只需要重复调用这个函数即可；
- 工厂模式其实是一种常见的设计模式；

- **工厂方法创建对象存在的问题**：

  - 我们在打印对象时，对象的类型都是Object类型

  - 但是从某些角度来说，这些对象应该有一个 **他们共同的类型**；

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

### 7.2 JavaScript中的类（ES5）

- **在JavaScript中类的表示形式就是构造函数**。
- **JavaScript中的构造函数是怎么样的**？
  - 构造函数也是一个 **普通的函数**，从表现形式来说，和 **千千万万个普通的函数** 没有任何区别；
  - 如果这个 **普通的函数被使用new操作符** 来调用了，那么 **这个函数就称之为是一个构造函数**；
- **如果一个函数被使用new操作符调用了，那么它会执行如下操作**：
  1. 在内存中创建一个新的对象（空对象）；
  2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；
  3. 构造函数内部的this，会指向创建出来的新对象；
  4. 执行函数的内部代码（函数体代码）；
  5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；

### 7.3 构造函数（类)

- 这个 **构造函数** 可以确保我们的对象是有Person的类型的；

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



## 8. 数据属性描述符

### 8.1  Object.defineProperty()

- 会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
  - 语法：`Object.defineProperty(obj, prop, descriptor)`
- 可接收三个参数：
  - obj要定义属性的对象；
  - prop要定义或修改的属性的名称或 Symbol；
  - descriptor要定义或修改的属性描述符；
- 返回值：
  - 被传递给函数的对象。

### 8.2 属性描述符分类

- 属性描述符的类型有两种：

  |            | configurable | enumerable | value | writable | get  | set  |
  | ---------- | :----------: | :--------: | :---: | :------: | :--: | :--: |
  | 数据描述符 |      √       |     √      |   √   |    √     |  ×   |  ×   |
  | 存取描述符 |      √       |     √      |   ×   |    ×     |  √   |  √   |

### 8.3 数据属性描述符

- **[[Configurable]]**：表示属性是否可以通过 delete 删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；

  - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Configurable]]**为`true`；
  - 当我们通过属性描述符定义一个属性时，这个属性的**[[Configurable]]**默认为`false`；

- **[[Enumerable]]**：表示属性是否可以通过`for-in`或者`Object.keys()`返回该属性；

  - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Enumerable]]**为`true`；
  - 当我们通过属性描述符定义一个属性时，这个属性的**[[Enumerable]]**默认为`false`；

- **[[Writable]]**：表示是否可以修改属性的值；

  - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Writable]]**为`true`；
  - 当我们通过属性描述符定义一个属性时，这个属性的**[[Writable]]**默认为`false`；

- **[[value]]**：属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改，默认情况下这个值是undefined；；

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

### 8.4 存取属性描述符

- **[[Configurable]]**：表示属性是否可以通过 delete 删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符；

  - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Configurable]]**为true；
  - 当我们通过属性描述符定义一个属性时，这个属性的**[[Configurable]]**默认为false；

- **[[Enumerable]]**：表示属性是否可以通过`for-in`或者`Object.keys()`返回该属性；

  - 当我们直接在一个对象上定义某个属性时，这个属性的**[[Enumerable]]**为`true`；
  - 当我们通过属性描述符定义一个属性时，这个属性的**[[Enumerable]]**默认为`false`；

- **[[get]]**：获取属性时会执行的函数。默认值为`undefined`

- **[[set]]**：设置属性时会执行的函数。默认值为`undefined`

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

### 8.5 同时定义多个属性

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



## 9. 对象方法补充

### 9.1 获取对象的属性描述符

- getOwnPropertyDescriptor
- getOwnPropertyDescriptors

### 9.2 preventExtensions

- 禁止对象扩展新属性
- 给一个对象添加新的属性会失败（在严格模式下会报错）；

### 9.3 seal

- 密封对象，不允许配置和删除属性
- 实际是调用preventExtensions
- 并且将现有属性的configurable:false

### 9.4 freeze

- 冻结对象，不允许修改现有属性
- 实际上是调用seal
- 并且将现有属性的writable: false

### 9.5 hasOwnProperty

- 对象是否有某一个属于自己的属性（不是在原型上的属性）

### 9.6 in/for in 操作符

- 判断某个属性是否在某个对象或者对象的原型上

### 9.7 instanceof

- 用于检测 **构造函数（Person、Student类）的pototype**，是否出现在 **某个实例对象的原型链** 上

### 9.8 isPrototypeOf

- 用于检测 **某个对象**，是否出现在 **某个实例对象的原型链** 上

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





