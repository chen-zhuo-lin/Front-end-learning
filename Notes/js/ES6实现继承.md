# JavaScript ES6实现继承

## 1. 认识class定义类

- 在ES6（ECMAScript2015）新的标准中使用了**class关键字**来直接定义类；
- 但是类本质上依然是前面所讲的构造函数、原型链的语法糖而已；

- class来定义一个类的方式：

  ```javascript
  class Person {
  
  }
  
  var Student = class {}
  ```



## 2. 类和构造函数的异同

```javascript
var p = new Person()

console.log(Person) // [class Person]
console.log(Person.prototype) // {}
console.log(Person.prototype.constructor) // [class Person]

console.log(p.__proto__ === Person.prototype) // true

console.log(typeof Person) // function
```



## 3. 类的构造函数

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



## 4. 类的实例方法

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



## 5. 类的访问器方法

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



## 6. 类的静态方法

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



## 7. ES6类的继承 - extends

- 在ES6中新增了使用extends关键字，可以方便的帮助我们实现继承：

  ```javascript
  class Person {
  
  }
  
  class Student extends Person {
  
  }
  ```



## 8. super关键字

- 注意：在子（派生）类的构造函数中使用this或者返回默认对象之前，必须先通过super调用父类的构造函数！

- super的使用位置有三个：子类的构造函数、实例方法、静态方法；

  ```javascript
  // 调用 父对象/父类 的构造函数
  super([arguments]);
  
  // 调用 父对象/父类 上的方法
  super.functionOnParent([arguments]);
  ```



## 9. 继承内置类

```javascript
class HYArray extends Array {
  lastItem() {
    return this[this.length - 1]
  }
}

var array = new HYArray(10, 20 ,30)
array.lastItem()
```



## 10. 类的混入mixin

- JavaScript的类只支持单继承：也就是只能有一个父类

- 类的混入，实现多继承

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


