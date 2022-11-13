# JavaScript的BOM操作

## 1. 认识BOM

- BOM：浏览器对象模型（Browser Object Model）
  - 简称 **BOM**，由 **浏览器提供的用于处理文档（document）之外的所有内容的其他对象**；
  - 比如 **navigator、location、history** 等对象；
- JavaScript有一个非常重要的运行环境就是**浏览器**
  - 而且浏览器本身又作为一个应用程序需要对其本身进行操作；
  - 所以通常浏览器会有对应的 **对象模型（BOM，Browser Object Model）**；
  - 我们可以将BOM看成是连接JavaScript脚本与浏览器窗口的桥梁；
- BOM主要包括以下的**对象模型**：
  - window：包括全局属性、方法，控制浏览器窗口相关的属性、方法；
  - location：浏览器连接到的对象的位置（URL）；
  - history：操作浏览器的历史；
  - navigator：用户代理（浏览器）的状态和标识（很少用到）；
  - screen：屏幕窗口信息（很少用到）；



## 2. window对象

- window对象在浏览器中可以从**两个视角**来看待：
  - **视角一：全局对象**
    - 我们知道ECMAScript其实是有一个全局对象的，这个全局对象在 **Node中是global**；
    - 在浏览器中就是 **window对象**；
  - **视角二：浏览器窗口对象**
    - 作为 **浏览器窗口时，提供了对浏览器操作的相关的API**；
- window默认给我们提供了全局的函数和类：**setTimeout、Math、Date、Object** 等；

### 2.1 window常见的属性

```javascript
// 浏览器高度
console.log(window.outerHeight)
console.log(window.innerHeight)

console.log("screenX:",window.screenX)
console.log("screenY:",window.screenY)

//监听
window.addEventListener("scroll",(event) =>{
  console.log(window.scrollX)
  console.log(window.scrollY)
})
```

### 2.2 window常见的方法

```javascript
// close方法
const closeBtn = document.querySelector("#close")
closeBtn.onclick = function(){
  window.close()
}

// scrollTo
const scrollBtn = document.querySelector("#scroll")
closeBtn.onclick = function(){
  window.scrollTo({top: 1000 })
}

// 打开新创建
const openBtn = document.querySelector("#open")
openBtn.onclick = function(){
  window.open("./about.html", "_self")
}
```

### 2.3 window常见的事件

```javascript
window.onfoucs = function(){
  console.log("窗口获取到焦点")
}

window.onblur = function(){
  console.log("窗口失去焦点")
}

// 整个页面以及所有的资源都加载完成
window.onload = function(){
  console.log("页面加载完成")
}

// hash改变
const hashBtn = document.querySelector("#hash")
hashBtn.onclick = function(){
  location.hash = 'aaa'
}
window.onhashchange = function() {
  console.log("hash被改变了")
}
```



## 3. location对象

### 3.1 location对象常见的属性

- location对象用于表示**window上当前链接到的URL信息**。

- 常见的属性
  - **href**: 当前window对应的超链接URL, 整个URL；
  - **protocol**: 当前的协议；
  - **host**: 主机地址；
  - **hostname**: 主机地址(不带端口)；
  - **port**: 端口；
  - **pathname**: 路径；
  - **search**: 查询字符串；
  - **hash**: 哈希值；
  - username：URL中的username（很多浏览器已经禁用）；
  - password：URL中的password（很多浏览器已经禁用）；

### 3.2 location对象常见的方法

- **assign**：赋值一个新的URL，并且跳转到该URL中；

- **replace**：打开一个新的URL，并且跳转到该URL中（不同的是不会在浏览记录中留下之前的记录）；

- **reload**：重新加载页面，可以传入一个Boolean类型；

  ```javascript
  const locationBtn.onclick = document.querySelector("#location")
  locationBtn.onclick = function(){
    location.assign("http://www.baidu.com")
    location.replace("http://www.baidu.com")
    location.reload()
  }
  ```



## 4. URLSearchParams

- URLSearchParams 定义了一些实用的方法来处理 URL 的查询字符串。

  - 可以将一个字符串转化成 **URLSearchParams** 类型；

  - 也可以将一个 **URLSearchParams** 类型转成字符串；

    ```JavaScript
    var urlsearch = new URLSearchParams("name=why&age=18&height=1.88")
    consol.log(urlsearch.get("name")) // why
    console.log(urlsearch.toSrting()) // name=why&age=18&height=1.88
    ```

- URLSearchParams**常见的方法**：

  - **get**：获取搜索参数的值；
  - **set**：设置一个搜索参数和值；
  - **append**：追加一个搜索参数和值；
  - **has**：判断是否有某个搜索参数；



## 5. history对象

### 5.1 history对象常见属性和方法

- history对象**允许我们访问浏览器曾经的会话历史记录**。

- 有**两个属性**:

  - `length`：会话中的记录条数；
  - `state`：当前保留的状态值；

- 有**五个方法**:

  - `back()`：返回上一页，等价于history.go(-1)；

  - `forward()`：前进下一页，等价于history.go(1)；

  - `go()`：加载历史中的某一页；

  - `pushState()`：打开一个指定的地址；

  - `replaceState()`：打开一个新的地址，并且使用replace；

    ```JavaScript
    console.log(history.length)
    console.log(history.state)
    
    const jumpBtn = document.querySelector("#jump")
    const backBtn = document.querySelector("#back")
    
    jumpBtn.onclick = function(){
      history.pushState({name: "why"}, "11", "aaa")
      console.log(history.length,history.state)
    }
    
    backBtn.onclick = function(){
      history.back()
      console.log(history.length,history.state)
    }
    ```

- history和hash目前是**vue、react**等框架实现路由的底层原理。



## 6. navigator对象（很少使用）

- **navigator 对象表示用户代理的状态和标识等信息。**

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112114907.png)



## 7. screen对象（很少使用）

- **screen主要记录的是浏览器窗口外面的客户端显示器的信息：**

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221112115006.png)



## 8. JSON

### 8.1 JSON基本语法

- JSON的顶层支持**三种类型**的值：

  - **简单值**：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型；

  - **对象值**：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值；

  - **数组值**：数组的值可以是简单值、对象值、数组值；

    ```json
    123
    
    {
      name: 'why',
      "age": 18,
      "friend": {
      	"name": "kobe"
      }
    }
    
    [
      123,
      "abc",
      {
        "name": "kobe"
      }
    ]
    
    ```

### 8.3 JSON序列化

- 某些情况下我们希望**将JavaScript中的复杂类型转化成JSON格式的字符串**，这样方便对其进行处理：

  - 比如我们希望将一个对象保存到localStorage中；

  - 但是如果我们直接存放一个对象，这个对象会被转化成 [object Object] 格式的字符串，并不是我们想要的结果；

    ```javascript
    const obj = {
      name: "why",
      age: 18,
      friend: {
        name: 'kobe'
      },
      hobbies: ['篮球', '足球', '乒乓球']
    }
    ```

### 8.4 JSON序列化方法

- 在ES5中引用了JSON全局对象，该对象有**两个常用的方法**：

  - `stringify`**方法**：将JavaScript类型转成对应的JSON字符串；
  - `parse`**方法**：解析JSON字符串，转回对应的JavaScript类型；

  ```JavaScript
  // 转成字符串保存
  const objString = JSON.stringify(obj)
  localStorage.setItem("info", objString)
  
  // 获取字符串转回对象
  const itemString = localStorage.getItem("info")
  const info = JSON.parse(itemString)
  console.log(info)
  ```

### 8.5 Stringify的参数replace

- 如果指定了一个 **replacer 函数**，则可以 **选择性地替换值**；

- 如果 **指定的 replacer 是数组**，则可 **选择性地仅包含数组指定的属性**；

  ```javascript
  // 转成字符串
  const objString1 = JSON.stringify(obj)
  // {"name":"why","age":18,"friend":{"name:kobe"},"hobbies":["篮球","足球","乒乓球"]}
  console.log(objString1)
  
  // replace参数是一个数组	
  const objString2 = JSSON.stringify(obj, ["name","age"])
  // {"name":"why","age":18}
  console.log(objString2)
  
  // replace参数是一个函数
  const objString3 = JSON.stringify(obj, (key,value) =>{
    console.log(key, value)
    if (key === "name"){
      return "chenzhuolin"
    }
    return value
  })
  
  // {"name":"chenzhuolin","age":18,"friend":{"name:kobe"},"hobbies":["篮球","足球","乒乓球"]}
  console.log(objString3)
  ```

### 8.6 Stringify的参数space

- 如果**对象本身包含toJSON方法**，那么**会直接使用toJSON方法**的结果：

  ```JavaScript
  const obj = {
    name: "why",
    age: 18,
    friend: {
      name: "kobe"
    },
    hobbies: ['篮球','足球','乒乓球'],
    toJSON: function(){
      return "chenzhuolin"
    }
  }
  
  const objString5 = JSON.stringify(obj)
  console.log(objString5) // chenzhuolin
  ```

### 8.7 parse的参数reviver

- 提供可选的 **reviver** 函数用以在返回之前对所得到的对象执行变换(操作)。

  ```javascript
  // 转回对象,并且转换某些值
  const info2 = JSON.parse(objString, (key, value) => {
    if (key === "time") {
      return new Date(value)
    }
    return value
  })
  console.log(info2)
  ```



