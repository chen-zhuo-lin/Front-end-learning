# JavaScript的while和for循环

## 1. 认识循环

- **循环** 是一种重复运行同一代码的方法。
  - 如果是对某一个列表进行循环操作，我们通常也会称之为 **遍历（traversal）**或者 **迭代（iteration）**；
- **JS中支持三种循环方式：**
  - `while`循环；
  - `do..whild`循环;
  - `for`循环;



## 2. while循环

- **while循环的语法如下：**

  - 当**条件成立**时，**执行代码块**；

  - 当 **条件不成立** 时，**跳出代码块**；

    ```javascript
    while(循环条件) {
    	// 循环代码块
    }
    ```

- **如果条件一直成立（为true），那么会产生 死循环。**

  - 这个时候必须通过 **关闭页面来停止死循环**；



## 3. do..while循环

- do..while的特点是不管条件成不成立，do循环体都会 **先执行一次**;

  ```javascript
  do {
  	// 循环代码块
  } while(循环条件)
  ```



## 4. for循环

- **语法：**`for (begin; condition; step) {body}`

  ![](https://raw.githubusercontent.com/chen-zhuo-lin/pictures/main/2022-11/20221111233357.png)

- begin 执行一次，然后进行迭代：每次检查 condition 后，执行 body 和 step



## 5. 循环控制

- **break**: 直接跳出循环，循环结束，不再执行后续重复的代码
- **continue**: 跳过本次循环，执行下一次循环体



