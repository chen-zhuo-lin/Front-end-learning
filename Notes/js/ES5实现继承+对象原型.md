# JavaScript ES5中实现继承

## 1. 认识对象的原型

- JavaScript当中每个对象都有一个**特殊的内置属性 [[prototype]]**，这个特殊的对象可以指向另外一个对象。
- 那么这个对象有什么用呢？
  - 当我们通过引用对象的 **属性key来获取一个value** 时，它会 **触发 [[Get]]** 的操作；
  - 这个操作会 **首先检查该对象是否有对应的属性**，如果有的话就使用它；
  - **如果对象中没有该属性，那么会访问对象[[prototype]]内置属性指向的对象上的属性**；
- 获取的方式有**两种**：
  - 方式一：通过对象的 __proto__ 属性可以获取到（但是这个是早期浏览器自己添加的，存在一定的兼容性问题）；
- 方式二：通过`Object.getPrototypeOf方法`可以获取到；



## 2. 函数的原型 prototype

- 所有的函数都有一个**prototype**的属性（注意：不是__proto__）

  ```javascript
  function foo(){}
  
  // 所有的函数都有一个属性，叫prototype
  console.log(foo.prototype)
  ```

- 是不是因为函数是一个对象，所以它有prototype的属性呢？

  - 不是的，因为**它是一个函数**，才有了这个特殊的属性；
  - 而**不是它是一个对象**，所以有这个特殊的属性；

  ```javascript
  var obj = {}
  
  obj.prototype // obj就没有这个属性
  ```



## 3. 创建对象的内存表现

![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112130526.png)



## 4. prototype添加属性

![](C:\Users\czl20\AppData\Roaming\Typora\typora-user-images\1668229599079.png)



## 5. constructor属性

- 默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象；

```JavaScript
function Person() {
  
}

Person.prototype.constructor // [Function: Person]
p1.__proto__.constructor // [Function: Person]
p1.__proto__.constructor.name // Person
```



## 6. 重写原型对象

- 每创建一个函数, 就会同时创建它的prototype对象, 这个对象也会自动获取constructor属性；

- 这里相当于给prototype重新赋值了一个对象, 那么这个新对象的constructor属性, 会指向Object构造函数, 而不是
  Person构造函数了

  ```javascript
  function Person() {
    
  }
  
  Person.prototype = {
    name: 'why',
    age: 18
  }
  
  Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
  })
  ```



## 7. 面向对象的特性

- 面向对象有三大特性：封装、继承、多态
  - 封装：我们前面将属性和方法封装到一个类中，可以称之为封装的过程；
  - 继承：继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提（纯面向对象中）；
  - 多态：不同的对象在执行时表现出不同的形态；



## 8. JavaScript原型链

- 我们知道，从一个对象上获取属性，如果在当前对象中没有获取到就会去它的原型上面获取：

  ![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCmQeg.png)

- 什么地方是原型链的尽头呢？

  ```JavaScript
  obj.__proto__.__proto__.__proto__.__proto__ // [Object: null prototype] {}
  ```

- 我们会发现它打印的是 **[Object: null prototype] {}**

  - 事实上这个原型就是我们最顶层的原型了
  - 从**Object**直接创建出来的对象的原型都是 **[Object: null prototype] {}**。

-  [Object: null prototype] {} 原型的特殊性质：

  - 特殊一：**该对象有原型属性**，但是它的原型属性已经指向的是null，也就是已经是顶层原型了；
  - 特殊二：**该对象上有很多默认的属性和方法**；

### 8.1 原型链关系的内存图

![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCmGYn.png)

### 8.2 Object是所有类的父类

- 从我们上面的Object原型我们可以得出一个结论：**原型链最顶层的原型对象就是Object的原型对象**

  ![1667877293238](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCVJW6.png)



## 9. 原型链继承

### 9.1 通过原型链实现继承

- 目前student的原型是p对象，而p对象的原型是Person默认的原型，里面包含running等函数；

- 注意：步骤4和步骤5不可以调整顺序，否则会有问题

  ```javascript
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

### 9.2 继承创建对象的内存图

![](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCmtS0.png)

### 9.3 原型链继承的弊端

- 第一，我们通过 **直接打印对象是看不到这个属性** 的；
- 第二，这个属性 **会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题**；
- 第三，**不能给Person传递参数** （让每个stu有自己的属性），因为这个对象是一次性创建的（没办法定制化）；



## 10. 组合继承

### 10.1 借用构造函数继承

- 借用继承的做法：**在子类型构造函数的内部调用父类型构造函数**.

  - 因为函数可以在任意的时刻被调用；

  - 因此通过 **`apply()`和`call()`方法** 也可以在新创建的对象上执行构造函数；

    ```javascript
    function Student(name, friends, sno) {
      Person.call(this, name, friends)
      this.sno = sno
    }
    
    Student.prototype = Person.prototype
    ```

### 10.2 组合借用继承的问题

- 组合继承最大的问题就是无论在什么情况下，都会 **调用两次父类构造函数**。
  - 一次在创建子类原型的时候；
  - 另一次在子类构造函数内部(也就是每次创建子类实例的时候)；
- 所有的子类实例事实上会拥有两份父类的属性:
  - 一份在当前的实例自己里面(也就是person本身的)，另一份在子类对应的原型对象中(也就是person.__proto__里面)；
  - 当然，这两份属性我们无需担心访问出现问题，因为默认一定是访问实例本身这一部分的；



## 11. 寄生组合式继承

### 11.1 原型式继承函数

- 最终的目的：student对象的原型指向了person对象；

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

### 11.2 寄生式继承函数

- 寄生式继承的思路是 **结合原型类继承和工厂模式** 的一种方式；

- 即 **创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象，最后再将这个对象返回**；

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

### 11.3 寄生组合式继承

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


