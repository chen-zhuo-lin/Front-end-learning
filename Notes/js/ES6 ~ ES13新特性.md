# ES6 ~ ES13新特性

## 1. 新的ECMA代码执行描述

### 1.1 词法环境

- **词法环境是一种规范类型，用于在词法嵌套结构中定义关联的变量、函数等标识符；**
  - 一个 **词法环境** 是由 **环境记录** 和一个 **外部词法环境**组成；
  - 一个 **词法环境** 经常用于关联**一个函数声明、代码块语句、try-catch语句**，当它们的**代码被执行时，词法环境被创建出来**；
- 执行上下文关联的词法环境
  - `LexicalEnvironment` 用于处理let、const声明的标识符：
  - `VariableEnvironment` 用于处理var和function声明的标识符：

### 1.2 环境记录

- **两种**主要的环境记录值:
  - 声明式环境记录：声明性环境记录用于定义ECMAScript语言语法元素的效果，如**函数声明、变量声明和直接将标识符绑定与**
    **ECMAScript语言值关联起来的Catch子句**。
  - 对象式环境记录：对象环境记录用于定义ECMAScript元素的效果，例如WithStatement，它**将标识符绑定与某些对象的属性关联起来**。

### 1.3 新ECMA描述内存图

![1667894268160](https://cdn.jsdelivr.net/gh/chen-zhuo-lin/pictures@main/2022-11/zCVNQO.png)



## 2. let/const/var关键字

### 2.1 let/const基本使用

- let关键字：
  - 从直观的角度来说，**let和var是没有太大的区别** 的，都是 **用于声明一个变量**；
- const关键字：
  - const关键字是 **constant的单词的缩写，表示常量、衡量** 的意思；
  - 它表示 **保存的数据一旦被赋值，就不能被修改**；
  - 但是 **如果赋值的是引用类型，那么可以通过引用找到对应的对象，修改对象** 的内容；
- **注意：**另外let、const不允许重复声明变量；

### 2.2 let/const作用域提升

- 我们知道 **var声明的变量是会进行作用域提升** 的；
- 但是如果我们使用let声明的变量，在声明之前访问会报错；

### 2.3 暂时性死区 (TDZ)

- 我们知道，在let、const定义的标识符真正执行到声明的代码之前，是不能被访问的

  - **从块作用域的顶部一直到变量声明完成之前**，这个变量处在 **暂时性死区（TDZ，temporal dead zone）**

    ```javascript
    {
      console.log(name)
      
      let name = "why" // Uncaught ReferenceError: Cannot access 'name' before initialization
    }
    ```

- 使用术语 “temporal” 是因为区域取决于执行顺序（时间），而不是编写代码的位置；

  ```javascript
  function foo() {
    console.log(message)
  }
  
  let message = "Hello World"
  foo()
  ```

### 2.4 let/const有没有作用域提升呢？

- 从上面我们可以看出，在 **执行上下文的词法环境创建出来的时候，变量事实上已经被创建** 了，只是 **这个变量是不能被访问** 的。
  - 那么变量已经有了，但是不能被访问，是不是一种作用域的提升呢？
- 作用域提升：在 **声明变量的作用域** 中，如果 **这个变量可以在声明之前被访问，那么我们可以称之为作用域提升**；
  - 在这里，它虽然被创建出来了，但是不能被访问，我认为不能称之为作用域提升；
- 所以我的观点是 **let、const没有进行作用域提升，但是会在解析阶段被创建出来**。

### 2.5 var的块级作用域

- JavaScript只会形成两个作用域：**全局作用域和函数作用域**。

- ES5中放到一个代码中定义的变量，外面是可以访问的：

  ```javascript
  // var 没有块级作用域
  {
    // 编写语句
    var foo = "foo"
  }
  
  console.log(foo) // foo 可以访问到
  ```

### 2.6 let/const的块级作用域

- 在ES6中新增了块级作用域，并且通过 **let、const、function、class声明** 的标识符是具备块级作用域的限制的：

  ```javascript
  {
    let foo = "foo"
    function bar() {
      console.log("bar")
    }
    class Person {}
  }
  
  console.log(foo) // ReferenceError: foo is not defined
  bar() // 可以访问
  var p = new Person() // ReferenceError: foo is not defined
  ```

- 但是我们会发现 **函数拥有块级作用域** ，但是 **外面依然是可以访问** 的：

  - 这是因为 **引擎会对函数的声明进行特殊的处理**，允许像var那样进行提升；	

### 2.7 块级作用域的应用

- 案例：获取多个按钮监听点击

  ```html
  <button>按钮一</button>
  <button>按钮二</button>
  <button>按钮三</button>
  <button>按钮四</button>
  ```

- 使用let或者const来实现：

  ```javascript
  var btns = document.getElementsByTagName("button")
  for(let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      console.log(`第${i}个按钮被点击`)
    }
  }
  ```

### 2.8 var、let、const的选择

- 对于var的使用：
  - var所表现出来的特殊性：比如 **作用域提升、window全局对象、没有块级作用域** 等都是 **一些历史遗留问题**；
  - 其实是 **JavaScript在设计之初的一种语言缺陷**；
- 对于let、const：
  - 我们会 **优先推荐使用const**，这样可以 **保证数据的安全性不会被随意的篡改**；
  - 只有当 **我们明确知道一个变量后续会需要被重新赋值** 时，这个时候 **再使用let**；



## 3. 字符串模板

### 3.1 字符串模板基本使用

- 首先，我们会使用 \`\` 符号来编写字符串，称之为 **模板字符串**；

- 其次，在模板字符串中，我们可以 **通过 `${expression}`** 来嵌入动态的内容；

  ```javas
  const name = "why"
  const age = 18
  
  console.log(`my name is ${name}, age is ${age}`)
  
  function foo() {
    return 'function is foo'
  }
  
  console.log(`my function is ${foo()}`)
  ```



### 3.2 标签模板字符串使用

- 如果我们使用标签模板字符串，并且在调用的时候插入其他的变量：

  - **模板字符串被拆分** 了；

  - 第一个元素是 **数组**，是 **被模块字符串拆分的字符串组合**

  - **后面的元素是一个个模块字符串传入的内容**；

    ```JavaScript
    const name = "why"
    const age = 18
    // [ ["Hello", "World", ''], 'why', 18]
    foo`Hello ${name} World ${age}`
    ```







## 4. 展开语法

- 展开语法(Spread syntax)：
  - 可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；
  - 还可以在构造字面量对象时, 将对象表达式按key-value的方式展开；
- 展开语法的场景：
  - 在 **函数调用** 时使用；
  - 在 **数组构造** 时使用；
  - 在 **构建对象字面量** 时，也可以使用展开运算符，这个是在ES2018（ES17）中添加的新特性；
- 注意：展开运算符其实是一种浅拷贝；



## 5. Symbol

### 5.1 Symbol的基本使用

- Symbol的作用：用来**生成一个独一无二的值**。
  - Symbol值是通过 **Symbol函数** 来生成的，生成后可以 **作为属性名**；
  - 也就是在ES6中，对象的属性名可以使用 **字符串**，也可以使用 **Symbol值**；
- Symbol函数执行后每次创建出来的值都是独一无二的；
- **我们也可以在创建Symbol值的时候传入一个描述description**：这个是ES20117（ES10）新增的特性；

### 5.2 Symbol作为属性名

- 我们通常会使用Symbol在对象中表示唯一的属性名：

  ```JavaScript
  const s1 = Symbol("abc")
  const s2 = Symbol("cba")
  
  const obj = {}
  
  // 1.写法一：属性名赋值
  obj[s1] = "abc"
  obj[s2] = "cba"
  
  // 2.写法二：Object.defineProperty
  Object.defineProperty(obj, s1, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'abc'
  })
  
  // 3.写法三：定义字面量是直接使用
  const info = {
    [s1]: "abc",
    [s2]: "cba"
  }
  
  const symbolKeys = Object.getOwnPropertySymbols(info)
  for (const key of symbolKeys) {
    console.log(info[key])
  }
  ```

### 5.3 相同值的Symbol

- 我们可以使用`Symbol.for方法`来做到这一点；

- 并且我们可以通过`Symbol.keyFor方法`来获取对应的key；

  ```javas
  const s1 = Symbol.for("abc")
  const s2 = Symbol.for("abc")
  
  console.log(s1 === s2) // true
  const key = Symbol.KeyFor(s1)
  console.log(key) // abc
  const s3 = Symbol.for(key)
  console.log(s3 === s2) // true
  ```



## 6. Set

### 6.1 Set的基本使用

- Set是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是 **元素不能重复**。

  - 创建Set我们需要通过 **Set构造函数**（暂时没有字面量创建的方式）：

- 我们可以发现Set中存放的元素 **是不会重复** 的，那么Set有一个非常常用的功能就是 **给数组去重**。

  ```javascript
  const set1 = new Set()
  set1.add(10)
  
  const set2 = new Set([11,22,22,34,32])
  console.log(set2) // {11, 22, 34 , 32}
  
  const arr = [10,20,10,44,78,44]
  const set3 = new Set(arr)
  const newArray1 = [...set3]
  const newArray2 = Array.from(set3)
  ```

### 6.2 Set的常见属性和方法

- **Set常见的属性：**
  - `size`：返回Set中元素的个数；
- **Set常用的方法：**
  - `add(value)`：添加某个元素，返回Set对象本身；
  - `delete(value)`：从set中删除和这个值相等的元素，返回boolean类型；
  - `has(value)`：判断set中是否存在某个元素，返回boolean类型；
  - `clear()`：清空set中所有的元素，没有返回值；
  - `forEach(callback, [, thisArg])`：通过forEach遍历set；
- **另外Set是支持for of的遍历的。**



## 7. WeakSet

### 7.1 WeakSet使用

- 和Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构。

- 和Set的区别：

  - 区别一：WeakSet中 **只能存放对象类型**，**不能存放基本数据类型**；

  - 区别二：WeakSet **对元素的引用是弱引用**，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收；

    ```javascript
    const wset = new WeakSet()
    
    // TypeError：Invalid value used in weak set
    wset.add(10)
    ```

### 7.2 WeakSet常见的方法

- add(value)：添加某个元素，返回WeakSet对象本身；
- delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型；
- has(value)：判断WeakSet中是否存在某个元素，返回boolean类型；

### 7.3 WeakSet的应用

- 注意：WeakSet不能遍历

  - 因为 **WeakSet只是对对象的弱引用**，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁。

  - 所以 **存储到WeakSet中的对象是没办法获取** 的；

    ```javascript
    const pwset = new WeakSet()
    class Person {
      constructor() {
        pwset.add(this)
      }
      running() {
        if(!pwset.has(this)) throw new Error("不能通过其他对象调用running方法")
        console.log("running",this)
      }
    }
    ```



## 8. Map

### 8.1 Map的基本使用

- 另外一个新增的数据结构是Map，用于存储映射关系。

- 使用对象来存储映射关系和Map存储映射关系的区别：

  - 事实上我们对象存储映射关系只能用 **字符串（ES6新增了Symbol）作为属性名（key）**；
  - 某些情况下我们可能希望通过 **其他类型作为key**，**比如对象**，这个时候 **会自动将对象转成字符串来作为key**；

- 那么我们就可以使用Map：

  ```javascript
  const obj1 = { name: "why" }
  const obj1 = { age: 18 }
  
  const map = new Map()
  // 方式一
  map.set(obj1, "abc")
  map.set(obj2, "cba")
  
  // 方式二
  const map2 = new Map([
    [obj1, "abc"],
    [obj2, "cba"],
    [obj1, "nba"]
  ])
  
  console.log(map.get(obj1)) // nba
  console.log(map.get(obj2)) // cba
  ```

### 8.2 Map的常用方法

- Map常见的属性：

  - `size`：返回Map中元素的个数；

  Map常见的方法

  - `set(key, value)`：在Map中添加key、value，并且返回整个Map对象；
  - `get(key)`：根据key获取Map中的value；
  - `has(key)`：判断是否包括某一个key，返回Boolean类型；
  - `delete(key)`：根据key删除一个键值对，返回Boolean类型；
  - `clear()`：清空所有的元素；
  - `forEach(callback, [, thisArg])`：通过forEach遍历Map；

- Map也可以通过`for of`进行遍历。



## 9. WeakMap

### 9.1 WeakMap的使用

- 和Map类型的另外一个数据结构称之为 **WeakMap**，也是 **以键值对的形式** 存在的。

- 那么和Map有什么区别呢？

  - 区别一：**WeakMap的key只能使用对象，不接受其他的类型作为key**；

  - 区别二：WeakMap的 **key对对象想的引用是弱引用**，如果没有其他引用引用这个对象，那么GC可以回收该对象；

    ```javascript
    const weakMap = new WeakMap()
    
    // Invalid value used as weak map key
    weakMap.set(1, "abc")
    // Invalid value used as weak map key
    weakMap.set("aaa", "abc")
    ```

### 9.2 WeakMap常见的方法

- `set(key, value)`：在Map中添加key、value，并且返回整个Map对象；
- `get(key)`：根据key获取Map中的value；
- `has(key)`：判断是否包括某一个key，返回Boolean类型；
- `delete(key)`：根据key删除一个键值对，返回Boolean类型；

### 9.3 WeakMap的应用

- 注意：WeakMap也是不能遍历的

  - 没有forEach方法，也不支持通过for of的方式进行遍历；

  ```javascript
  // WeakMap({key(对象): value}): key是一个对象，弱引用
  const targetMap = new WeakMap()
  function getDep(target, key) {
    // 1.根据对象(target)取出对应的Map对象
    let depsMap = targetMap.get(target)
    if(!depsMap) {
      depsMap = new Map()
      targetMap.set(target, depsMap)
    }
    
    // 2.取出具体的dep对象
    let dep = depsMap.get(key)
    if(!dep) {
      dep = new Dep()
      depsMap.set(key, dep)
    }
    return dep
  }
  ```



## 10. ES7

### 10.1 Array Includes

- 根据情况，如果包含则返回 true，否则返回false。

  ```javascript
  const names = [1,3,4,4,5]
  
  if (names.includes("why")) {
    console.log("包含why")
  }
  
  if(names.includes("why", 4)) {
    console.log("包含why")
  }
  ```

### 10.2 指数exponentiation运算符

- 对数字来计算乘方。

  ```javascript
  const result1 = Math.pow(3, 3)
  const result2 = 3 ** 3
  ```



## 11. ES8

### 11.1 Object values

- 获取所有的value值

  ```javascript
  const obj = {
  	name: "why",
    age: 18
  }
  
  console.log(Object.values(obj)) // ["why", 18]
  
  // 如果传入一个字符串
  console.log(Object.values("abc")) // ['a','b','c']
  ```

### 11.2 Object entries

- 可以获取到一个数组，数组中会存放可枚举属性的键值对数组。

  - 可以针对 **对象、数组、字符串** 进行操作；

    ```javascript
    const obj = {
      name: 'why',
      age: 18,
      height: 1.88
    }
    
    console.log(Object.entries(obj)) // [ ['name', 'why'], ['age', 18], ['height', 1.88] ]
    for(const entry of Object.entries(obj)) {
      const [key, value] = entry
      console.log(key, value)
    }
    
    // 如果是一个数组
    console.log(Object.entries(["abc","cba","nba"])) // [ ['0', 'abc'], ['1', 'cba'], ['2', 'nba'] ]
    
    // 如果是一个字符串
    console.log(Object.entries("abc")) // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
    ```



### 11.3 String Padding

- ES8中增加了 `padStart` 和 `padEnd` 方法，分别是 **对字符串的首尾进行填充** 的。

  ```javascript
  const message = "Hello World"
  
  console.log(message.padStart(15, "a")) // aaaaHello World
  console.log(message.padEnd(15, 'b')) // Hello Worldbbbb
  ```

- 我们简单具一个应用场景：比如需要对身份证、银行卡的前面位数进行隐藏：

  ```javascript
  const cardNumber = '3242536473647364834'
  const lastFourNumber = cardNumber.slice(-4)
  const finalCardNumber = lastFourNumber.padStart(cardNumber.length, "*")
  console.log(finalCardNumber) // ***************4834
  ```

### 11.4 Trailing Commas

- 在ES8中，我们允许在函数定义和调用时 **多加一个逗号**

  ```javascript
  function foo(a, b,) {
    console.log(a, b)
  }
  
  foo(10, 20, )
  ```



## 12. ES10

### 12.1 flat flatMap

- flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

  ```JavaScript
  const nums = [10,20,[5,8], [[2,3],[9,22]]
  
  const newNums1 = nums.flat(1) // [10, 20, 5, 8, [2,3], [9,22]]
  const newNums2 = nums.flat(2) // [10, 20, 5, 8, 2, 3, 9, 22]
  ```

- flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。

  - 注意一：flatMap是先进行map操作，再做flat的操作；

  - 注意二：flatMap中的flat相当于深度为1；

    ```javascript
    const message = ["hello world","你好 小陈","my name is abc"]
    
    const newMessage = message.flatMap(item => {
        return item.split(" ")
    })
    console.log(newMessage)
    ```

### 12.2 Object.fromEntries()

- 在前面，我们可以通过 Object.fromEntries() 将一个entries转换成 对象

- **应用场景**

  ```javascript
  // 应用场景1
  const obj = {
    name: "why",
    age: 18
  }
  
  const entries = Object.entries(obj)
  const info = Object.fromEntries(entries)
  console.log(info)
  
  // 应用场景二
  const paramsString = 'name=why&age=18&height=1.88'
  const searchParams = new URLSearchParams(paramsString)
  for(const param of searchParams) {
    console.log(param)
  }
  const searchObj = Object.fromEntries(searchParams)
  console.log(searchObj)
  ```

### 12.3 trimStart trimEnd

- 如果单独去除前面或者后面的空格：`trimStart`和`trimEnd`

  ```javascript
  const message = "    Hello World    "
  message.trimStart()
  message.trimEnd()
  ```



## 13. ES11

### 13.1 BigInt

- 在早期的JavaScript中，我们不能正确的表示过大的数字：

  - 大于`MAX_SAFE_INTEGER`的数值，表示的可能是不正确的。

- 那么ES11中，引入了新的数据类型BigInt，用于表示大的整数：

  - BitInt的表示方法是在数值的 **后面加上n**

    ```javascript
    const maxInt = Number.MAX_SAFE_INTEGER
    console.log(maxInt)
    
    // 大于MAX_SAFE_INTEGER值的一些数值，无法正确的表示
    console.log(maxInt + 1) // 9007199254740992
    console.log(maxInt + 2) // 9007199254740992
    
    const bigInt = 9007199254740991n
    console.log(bigInt + 1n)
    console.log(bigInt + 2n)
    ```

### 13.2 空值合并操作符

```javascript
const foo = ""

const result1 = foo || '默认值' // 默认值
const result2 = foo ?? '默认值' // " "
```

### 13.3 可选链 Optional Chaining

```javascript
const obj = {
  friend: {
    girlFriend: {
      name: 'Lucy'
    }
  }
}

if(obj.friend && obj.friend.girlFriend) {
  console.log(obj.friend.girlFriend.name)
}

// 可选链的方式
console.log(obj.friend?.girlFriend?.name)
```

### 13.4 Global This

- 获取全局对象

  ```javascript
  console.log(globalThis)
  console.log(this) // 浏览器上
  console.log(global) // Node上
  ```

### 13.5  for..in标准化

- 在ES11中，对其进行了标准化， **for...in是用于遍历对象** 的key的：

  ```javascript
  const obj = {
    name: "why",
    age: 18
  }
  
  for (const key in obj) {
    console.log(key)
  }
  ```



## 14. ES12

### 14.1 FinalizationRegistry对象

- `FinalizationRegistry` 对象可以让你在对象被垃圾回收时请求一个回调。

  - FinalizationRegistry 提供了这样的一种方法：当一个 **在注册表中注册的对象被回收** 时，**请求在某个时间点上调用一个清理回**
    **调**。

  - 你可以通过 **调用register方法**，**注册任何你想要清理回调的对象，传入该对象和所含的值**;

    ```javascript
    let obj = { name: "why" }
    
    const registry = new FinalizationRegistry(value => {
        console.log('被销毁了', value);
    })
    
    registry.register(obj, "obj")
    
    setTimeout(() => {
        obj = null
    }, 1000);
    ```

### 14.2 WeakRefs对象

- 如果我们默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用：

  - 如果我们希望是一个弱引用的话，可以使用WeakRef；

  ```javascript
  let obj = {name: "why"}
  let info = new WeakRef(obj)
  ```

### 14.3 逻辑赋值运算符

```JavaScript
// 1.逻辑或运算符
let message = ""
// message = message || "hello world"
message ||= "hello world"

let obj = {
  name: "why"
}

// 2.逻辑与运算符
// obj = obj && obj.foo()
obj &&= obj.name

// 3.逻辑空运算符
let foo = null
foo ??= "默认值"
console.log(foo)
```



## 15. ES13

### 15.1 method .at()

```javascript
// 1.数组
var names = ['abc', 'cba', 'nba']
console.log(names.at(1))
console.log(names.at(-1))

// 2.字符串
var str = "hello world"
console.log(str.at(1))
console.log(str.at(-1))
```

### 15.2 Object.hasOwn(obj, propKey)

- 该方法用于判断一个对象中是否有某个自己的属性；

- 和Object.prototype.hasOwnProperty的区别:

  - 区别一：防止对象内部有重写hasOwnProperty

  - 区别二：对于隐式原型指向null的对象， hasOwnProperty无法进行判断

    ```javascript
    var obj = {
        name: "czl",
        age: 18,
        hasOwnProperty: function() {
            return false
        }
    }
    
    var info = Object.create(null)
    info.name = 'why'
    console.log(info.hasOwnProperty("name")); // 报错
    console.log(Object.hasOwn(info, "name")); // 可以判断 返回true
    ```

### 15.3 定义类字段的其他方式

```javascript
class Person {
  address = "中国"
	static totalCount = "70亿"

  // 只能类内部访问
	#sex = "male"
	static #maleCount = "10亿"
  
  constructor(name, age) {
    this.name = name
    this.age = age
  }

	// 静态代码块
	static {
    console.log("static block execution")
  }

	printInfo() {
    console.log(this.address, this.#sex, Person.#maleCount)
  }
}
```





