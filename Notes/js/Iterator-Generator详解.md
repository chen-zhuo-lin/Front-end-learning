# Iterator-Generator详解

## 1. 什么是迭代器?

- 在JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议（iterator protocol）：
  - 迭代器协议定义了 **产生一系列值（无论是有限还是无限个）的标准方式**；
  - 在JavaScript中这个标准就是一个 **特定的next方法**；
- next方法有如下的要求：
  - 一个无参数或者一个参数的函数，返回一个应当 **拥有以下两个属性的对象**:
  - **done（boolean）**
    - 如果迭代器 **可以产生序列中的下一个值，则为 false**。（这等价于没有指定 done 这个属性。）
    - 如果迭代器 **已将序列迭代完毕，则为 true**。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。
  - **value**
    - 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。

### 1.1 迭代器的代码练习

```javascript
const friends = ['lilei', 'kobe', 'james']
function createArrayIterator(arr) {
    let index = 0
    return {
        next: function () {
            if (index < arr.length) {
                return { done: false, value: arr[index++] }
            } else {
                return { done: true, value: undefined }
            }
        }
    }
}

const friendsIterator = createArrayIterator(friends)
console.log(friendsIterator.next()); // lilei
console.log(friendsIterator.next()); // kobe
console.log(friendsIterator.next()); // james
console.log(friendsIterator.next()); // undefined
```



## 2. 可迭代对象

- 什么又是可迭代对象呢？
  - **它和迭代器是不同的概念；**
  - 当一个对象 **实现了iterable protocol协议** 时，它就是 **一个可迭代对象**；
  - 这个对象的要求是 **必须实现 @@iterator 方法**，在代码中我们 **使用 Symbol.iterator 访问该属性**；
- 当然我们要问一个问题，我们转成这样的一个东西有什么好处呢？
  - 当 **一个对象变成一个可迭代对象** 的时候，就可以 **进行某些迭代操作**；
  - 比如 `for...of` 操作时，其实就会调用它的 @@iterator 方法；

### 2.1 可迭代对象的代码

```javascript
const info = {
    friends: ["lilei", 'kobe', 'james'],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                if (index < this.friends.length) {
                    return { done: false, value: this.friends[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}

const infoIterator = info[Symbol.iterator]()
console.log(infoIterator.next())
console.log(infoIterator.next())
console.log(infoIterator.next())
console.log(infoIterator.next())
```

### 2.2 原生迭代器对象

- String、Array、Map、Set、arguments对象、NodeList集合；

  ```javascript
  const str = "Hello World"
  for (const s of str) {
      console.log(s)
  }
  
  const arr = ["abc", "cba", "nba"]
  for (const item of arr) {
      console.log(item);
  }
  
  function foo(x, y, z) {
      for (const arg of arguments) {
          console.log(arg);
      }
  }
  foo(20, 30, 40)
  
  // 获取可迭代对象
  console.log(arr[Symbol.iterator]); // [Function: values]
  
  // 调用可迭代函数,获取到迭代器
  const iterator = arr[Symbol.iterator]()
  console.log(iterator.next())
  console.log(iterator.next())
  console.log(iterator.next())
  console.log(iterator.next())
  ```

### 2.3 可迭代对象的应用

```javascript
const info = {
    friends: ["lilei", 'kobe', 'james'],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {
                if (index < this.friends.length) {
                    return { done: false, value: this.friends[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}

// 1.for...of
for (const item of info) {
  console.log(item)
}

// 2.展开运算符
console.log([...info, "curry"])

// 3.解构
const [name1, name2] = info

// 4.创建其他解构
console.log(new Set(info))
console.log(Array.from(info))

// 5.调用方法
Promise.all(info).then(res => {
  console.log(res) // ['lilei','kobe','james']
})
```



## 3. 自定义类的迭代

- **案例：创建一个classroom的类**
  - 教室中有自己的位置、名称、当前教室的学生；
  - 这个教室可以进来新学生（push）；
  - 创建的教室对象是可迭代对象；

### 3.1 迭代器实现

```javascript
class Classroom {
    constructor(name, address, students = []) {
        this.name = name
        this.address = address
        this.students = students
    }

    push(student) {
        this.students.push(student)
    }

    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {
                if (index < this.students.length) {
                    return { done: false, value: this.students[index++] }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

const c1 = new Classroom('lmx','湖南长沙',['abc','dhs'])
c1.push("ldh")
for (const stu of c1) {
  console.log(stu)
}
```

### 3.2 生成器实现

```javascript
class Classrrom {
  constructor(name, address, students = []) {
    this.name = name
    this.address = address
    this.students = students
  }
  
  push(student) {
    this.students.push(student)
  }
  
  *[Symbol.iterator]() {
    yield* this.students
  }
}
```



## 4. 迭代器的中断

- 迭代器在某些情况下会在没有完全迭代的情况下中断：

  - 比如遍历的过程中通过 **break、return、throw中断** 了循环操作；
  - 比如在解构的时候，没有解构所有的值；

- 那么这个时候我们想要监听中断的话，可以添加return方法：

  ```javascript
  [Symbol.iterator]() {
    let index = 0
    return {
  		next: () => {
        if (index < this.students.length){
          return { done: false, value: this.students[index++] }
        } else{
          return { done: true }
        }
      },
      return (){
        console.log("迭代器提前终止了")
        return {done: true}
      }
    }
  }
  
  const c1 = new Classroom('lmx','湖南长沙',['abc','dhs'])
  for (const stu of c1) {
    if (stu === 'abc') break
  }
  ```



## 5. 什么是生成器?

- 生成器函数也是一个函数，但是和普通的函数有一些区别：
  - 首先，**生成器函数需要在function的后面加一个符号：***
  - 其次，**生成器函数可以通过yield关键字来控制函数的执行流程**：
  - 最后，**生成器函数的返回值是一个Generator（生成器）**：
    - **生成器事实上是一种特殊的迭代器**；

### 5.1 生成器函数执行

- 我们发现下面的生成器函数foo的执行体压根没有执行，它只是返回了一个生成器对象。

  - 那么我们 **如何可以让它执行函数中的东西** 呢？**调用next** 即可；

  - 但是我们很多时候 **不希望next返回的是一个undefined，这个时候我们可以通过yield来返回结果**；

    ```javascript
    function* foo() {
        console.log("函数开始执行~")
        const value1 = 100
        console.log(value1)
        yield value1
    
        const value2 = 200
        console.log(value2)
        yield value2
    
        const value3 = 300
        console.log(value3)
        yield value3
    
        console.log("函数结束执行~")
    }
    
    // 返回生成器
    const generator = foo()
    
    // 执行到第一个yield, 并且暂停
    console.log(generator.next())
    
    // 执行到第二个yield, 并且暂停
    console.log(generator.next())
    
    // 执行到第三个yield, 并且暂停
    console.log(generator.next())
    
    // 执行剩余的代码
    console.log(generator.next()) // { value: undefined, done: false}
    ```

### 5.2 生成器传递参数 – next函数

- 我们在 **调用next函数的时候，可以给它传递参数，那么这个参数会作为上一个yield语句的返回值**；

- 注意：**也就是说我们是为本次的函数代码块执行提供了一个值**；

  ```javascript
  function* foo(initial) {
      console.log("函数开始执行~")
      const value1 = yield initial + 'aaa' 
      const value2 = yield value1 + 'bbb'  
      const value3 = yield value2 + 'ccc' 
      console.log("函数结束执行~")
  }
  
  const generator = foo("why")
  const result1 = generator.next()
  console.log("result1:",result1) // whyaaa
  const result2 = generator.next(result1.value)
  console.log("result2:",result2) // whyaaabbb
  const result3 = generator.next(result2.value)
  console.log("result3:",result3) // whyaaabbb
  ```

### 5.3 生成器提前结束 – return函数

- **return传值后这个生成器函数就会结束，之后调用next不会继续生成值** 了；

  ```javascript
  function* foo() {
    const value1 = yield "why"
    console.log("value1:",value1)
    const value2 = yield value1
    const value3 = yield value2
  }
  
  const generator = foo()
  console.log(generator.next())
  console.log(generator.return(123))
  console.log(generator.next())
  ```

### 5.4 生成器抛出异常 – throw函数

- **抛出异常后我们可以在生成器函数中捕获异常**；

- 但是在 **catch语句中不能继续yield新的值了，但是可以在catch语句外使用yield继续中断函数的执行**；

  ```javascript
  function* foo() {
    console.log("函数开始执行")
    
    try {
      yield "why"
    } catch(err) {
      console.log("内部捕获异常:", err)
    }
    
    yield 222
    
    console.log("函数结束执行~")
  }
  
  const generator = foo()
  const result = generator.next()
  generator.throw("error message")
  
  console.log(generator.next())
  ```



## 6. 生成器替代迭代器

```javascript
function* createArrayIterator(arr) {
  for (const item of arr) {
    yield item
  }
}

const names = ["abc", "cba", "nba"]
namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())

// 语法糖
function* createArrayIterator(arr) {
	yield* arr
}

// 对生成器的操作
const namesIterator1 = createArrayIterator(names)
for (const item of namesIterator1){}

const namesIterator2 = createArrayIterator(names)
const set = new Set(namesIterator2)

const namesIterator3 = createArrayIterator(names)
Promise.all(namesIterator3).then(res => {
  console.log(res)
})
```



## 7. 异步处理方案

- 学完了我们前面的Promise、生成器等，我们目前来看一下异步代码的最终处理方案。

- 案例需求：

  - 我们需要向服务器发送网络请求获取数据，一共需要发送三次请求；
  - 第二次的请求url依赖于第一次的结果；
  - 第三次的请求url依赖于第二次的结果；
  - 依次类推；

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112144915.png)

### 7.1 Generator方案

![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112145043.png)

### 7.2 自动执行generator函数

- 封装一个工具函数execGenerator自动执行生成器函数：

  ```javascript
  function execGenerator(genFn) {
    const generator = genFn()
    
    function exec(res) {
      const result = generator.next(res)
      if (result.done) return result.value
      result.value.then(res => {
        exec(res)
      })
    }
    exec()
  }
  ```







