# Proxy-Reflect使用详解

## 1. 监听对象的操作

- 利用了 Object.defineProperty 的存储属性描述符来对属性的操作进行监听。

- 这样做的缺点：

  - 首先，Object.defineProperty设计的初衷，不是为了去监听截止一个对象中所有的属性的。
  - 其次，如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么Object.defineProperty是无能为力的。

- 所以我们要知道，存储数据描述符设计的初衷并不是为了去监听一个完整的对象。

  ```javascript
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      set: function(newValue) {
        console.log(`监听到给${key}设置值`)
        value = newValue
      },
      get: function() {
        console.log(`监听到获取${key}的值`)
        return value
      }
    })
  })
  ```



## 2. Proxy

### 2.1 Proxy基本使用

- 在ES6中，新增了一个Proxy类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的：

  - 也就是说，如果我们希望 **监听一个对象的相关操作**，那么我们可以 **先创建一个代理对象（Proxy对象）**；
  - 之后对 **该对象的所有操作**，都通过 **代理对象来完成**，代理对象 **可以监听我们想要对原对象进行哪些操作**；

- 我们可以将上面的案例用Proxy来实现一次：

  - 首先，我们需要 **new Proxy对象**，并且 **传入需要侦听的对象以及一个处理对象**，可以称之为 **handler**；

    - `const p = new Proxy(target, handler)`

  - 其次，**我们之后的操作都是直接对Proxy的操作**，而 **不是原有的对象**，因为我们需要在handler里面进行侦听；

    ```javascript
    const obj = {
    	name: "why",
    	age: 18
    }
    
    const objProxy = new Proxy(obj, {})
    ```

### 2.2 Proxy的set和get捕获器

![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112141433.png)



### 2.3 Proxy所有捕获器

![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112141528.png)



### 2.4 Proxy的construct和apply

- 当然，我们还会看到捕捉器中还有 **construct和apply**，它们是应用于函数对象的：

  ```javascript
  function foo() {
    console.log("foo函数被调用了", this, arguments)
    return "foo"
  }
  
  const fooProxy = new Proxy(foo, {
    apply: function(target, thisArg, otherArgs) {
      console.log("函数的apply侦听")
      return target.apply(thisArg, otherArgs)
    },
    construct(target, argArray, newTarget) {
      console.log(target, argArray, newTarget)
      return new target()
    }
  })
  ```



## 3. Reflect

### 3.1 Reflect的作用

- Reflect也是ES6新增的一个API，它是 **一个对象**，字面的意思是 **反射**。
- Reflect的作用：
  - 它主要 **提供了很多操作JavaScript对象的方法**，有点像 **Object中操作对象的方法**；
  - 比如`Reflect.getPrototypeOf(target)`类似于 `Object.getPrototypeOf()`；
  - 比如`Reflect.defineProperty(target, propertyKey, attributes)`类似于`Object.defineProperty() `；

### 3.2 Reflect的常见方法![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112141724.png)

### 3.3 Reflect的使用

- 那么我们可以将之前Proxy案例中对原对象的操作，都修改为 **Reflect来操作**：

  ```javascript
  const objProxy = new Proxy(obj, {
    has: function(target, key) {
      return Reflect.has(target, key)
    },
    set: function(target, key, value, receiver) {
      return Reflect.set(target, key, value)
    },
    get: function(target, key, receiver) {
      return Reflect.get(target, key)
    },
    deleteProperty: function(target, key) {
      return Reflect.deleteProperty(target, key)
    }
  })
  ```

### 3.4 Receiver的作用

- 如果我们的源对象（obj）有 **setter、getter的访问器属性**，那么可以 **通过receiver来改变里面的this**；

### 3.5 Reflect的construct

```JavaScript
function Student(name, age) {
  this.name = name
  this.age = age
}

function Animal() {
  
}

const stu = Reflect.construct(Student, ["why", 18], Animal)
console.log(stu.__proto__ === Animal.prototype) // true
```



