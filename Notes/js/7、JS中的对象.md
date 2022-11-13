# 七、JavaScript中的面向对象

## 1. 认识对象类型

- **在数据类型中我们提到还有一种特别的类型：对象类型。**
  - 对象类型涉及到JavaScript的各个方面，所以掌握 **对象类型非常重要**；
  - 对象类型是一种 **存储键值对（key-value）**的更复杂的数据类型；
- **为什么需要对象类型呢？**
  - 基本数据类型可以存储一些简单的值，但是现实世界的事物抽象成程序时，往往比较复杂；
  - 比如 **一个人**，有 **自己的特性**（比如姓名、年龄、身高），**有一些行为**（比如跑步、学习、工作）；
  - 比如 **一辆车**，有 **自己的特性**（比如颜色、重量、速度），**有一些行为**（比如行驶）；
- **这个时候，我们需要一种新的类型将这些特性和行为组织在一起，这种类型就是对象类型。**
  - 对象类型可以 **使用{…}**来创建的复杂类型，里面包含的是 **键值对（“key: value”）**；
  - **键值对** 可以是 **属性和方法（在对象中的函数称之为方法）**；
  - 其中 **key是字符串**（也叫做属性名property name ，ES6之后也可以是Symbol类型)
  - 其中 **value可以是任意类型**，包括基本数据类型、函数类型、对象类型等；



## 2. 创建对象和使用对象

- **对象的创建方法有很多，包括三种：**

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

- **我们知道程序是需要加载到内存中来执行的，我们可以将内存划分为两个区域：`栈内存和堆内存`。**

  - **原始类型** 占据的空间是在 **栈内存** 中分配的；

  - **对象类型** 占据的空间是在 **堆内存** 中分配的；

    ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112095053.png)



## 5. 值类型和引用类型

- **原始类型的保存方式：在变量中保存的是值本身**

  - 所以原始类型也被称之为 **值类型**；

- **对象类型的保存方式：在变量中保存的是对象的“引用”**

  - 所以对象类型也被称之为 **引用类型**；

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112095453.png)



## 6. this指向什么？

- **目前掌握两个this的判断方法：**

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

- **我们可以想到的一种创建对象的方式：工厂函数**

  - 我们可以 **封装一个函数**，这个函数用于帮助我们 **创建一个对象**，我们只需要重复调用这个函数即可；
  - **工厂模式其实是一种常见的设计模式**；

- **工厂方法创建对象有一个比较大的问题：`我们在打印对象时，对象的类型都是Object类型`**

  - 但是从某些角度来说，这些对象应该有一个 **他们共同的类型**；

  - 下面我们来看一下另外一种模式：**构造函数的方式**；

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

- **我们前面说过，在JavaScript中类的表示形式就是构造函数**。
- **JavaScript中的构造函数是怎么样的**？
  - 构造函数也是一个 **普通的函数**，从表现形式来说，和 **千千万万个普通的函数** 没有任何区别；
  - 那么如果这么一个 **普通的函数被使用new操作符 **来调用了，那么 **这个函数就称之为是一个构造函数**；
- **如果一个函数被使用new操作符调用了，那么它会执行如下操作**：
  1. 在内存中创建一个新的对象（空对象）；
  2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；
  3. 构造函数内部的this，会指向创建出来的新对象；
  4. 执行函数的内部代码（函数体代码）；
  5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；
- **接下来，我们可以用构造函数的方式来实现一下批量创建学生**

### 7.3 构造函数（类)

- **我们来通过构造函数实现一下：**

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

- 这个 **构造函数**可以确保我们的对象是有Person的类型的；

- **事实上构造函数还有很多其他的特性：**

  - 比如原型、原型链、实现继承的方案
  - 比如ES6中类、继承的实现；



## 8. 数据属性描述符

### 8.1 对属性操作的控制

- 在前面我们的属性都是 **直接定义在对象内部**，或者 **直接添加到对象内部**的：

  - 但是这样来做的时候我们就 **不能对这个属性进行一些限制**：比如 **这个属性是否是可以通过delete删除**？这个属性 **是否在for-in遍历的时候被遍历出来**呢？

    ```JavaScript
    var obj = {
      name: "why",
      age: 18,
      height: 1.88
    }
    ```

- 如果我们想要对 **一个属性进行比较精准的操作控制**，那么我们就可以使用 **属性描述符**。

  - 通过属性描述符 **可以精准的添加或修改对象的属性**；
  - 属性描述符需要使用 `Object.defineProperty` 来对属性进行添加或者修改；

### 8.2  Object.defineProperty

- **Object.defineProperty()** 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
  - `Object.defineProperty(obj, prop, descriptor)`
- 可接收三个参数：
  - obj要定义属性的对象；
  - prop要定义或修改的属性的名称或 Symbol；
  - descriptor要定义或修改的属性描述符；
- 返回值：
  - 被传递给函数的对象。

### 8.3 属性描述符分类

- 属性描述符的类型有两种：

  - **数据属性**（Data Properties）描述符（Descriptor）；
  - **存取属性**（Accessor访问器 Properties）描述符（Descriptor）；

  |            | configurable | enumerable | value | writable | get  | set  |
  | ---------- | :----------: | :--------: | :---: | :------: | :--: | :--: |
  | 数据描述符 |      √       |     √      |   √   |    √     |  ×   |  ×   |
  | 存取描述符 |      √       |     √      |   ×   |    ×     |  √   |  √   |

### 8.4 数据属性描述符

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

### 8.5 存取属性描述符

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

### 8.6 同时定义多个属性

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

- 用于检测`构造函数（Person、Student类）的pototype`，是否出现在`某个实例对象的原型链`上

### 9.8 isPrototypeOf

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

