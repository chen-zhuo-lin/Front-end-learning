var arr = [1, 2, 3, 4, 5, 6, 7];
/* 
访问数组中的元素：
    通过中括号[]访问
    arr.at(i)
        如果 i >= 0，则与 arr[i] 完全相同。
        对于 i 为负数的情况，它则从数组的尾部向前数。
*/
const a = arr.at(-1); // 7

// 修改数组中的元素
arr[0] = "czl";

// push/pop 方法运行的比较快，而 shift/unshift 比较慢。
// 在数组的尾端添加或删除元素：
arr.push(8); // push 在末端添加元素
arr.pop(); // pop 从末端取出一个元素.

// 在数组的首端添加或删除元素
arr.shift(); // shift 取出队列首端的一个元素，整个数组元素向前前移动；
arr.unshift(0); // unshift 在首端添加元素，整个其他数组元素向后移动；

/* 
array.splice(start,[, deleteCount[, item1,item2[,...]]])
    从start位置开始，处理数组中的元素；
    deleteCount：要删除元素的个数，如果为0或者负数表示不删除；
    item1, item2, ...：在添加元素时，需要添加的元素；
    注意：这个方法会修改原数组
*/
const arr1 = ["a", "b", "c"];
arr1.splice(1, 1); // 删除一个元素
arr1.splice(1, 0, "abc", "cba"); // 新增两个元素
arr1.splice(1, 2, "kobe", "curry"); // 替换两个元素

/* 
length属性
    length属性用于获取数组的长度：
        当我们修改数组的时候，length 属性会自动更新。
    length 属性的另一个有意思的点是它是可写的。
        如果我们手动增加一个大于默认length的数值，那么会增加数组的长度。
        但是如果我们减少它，数组就会被截断。
*/
arr1.length = 10;
arr1.length = 0; // 清空数组

// 普通for循环遍历
for (let i = 0; i < arr1.length; i++) {}
// for..in 遍历，获取到索引值：
for (const index in arr1) {
}
// for..of 遍历，获取到每一个元素：
for (const item of arr1) {
}

/* 
arr.slice([begin[, end]]) ：用于对数组进行截取
    包含bigin元素，但是不包含end元素；
    不修改原数组
*/
arr1.slice(2, 3);

/*  
var new_arr = old_arr.concat(value1[,value2[, ...[, valueN]]])
*/
var newArr = arr1.concat(["abc", "cns"], "nba");

/* 
arr.join([separator]) :将一个数组的所有元素连接成一个字符串并返回这个字符串。
*/
arr1.join("-");

/* 
arr.indexof(searchElement[, fromIndex]) : 查找某个元素的索引
    从fromIndex开始查找，如果找到返回对应的索引，没有找到返回-1；
    也有对应的从最后位置开始查找的 lastIndexOf 方法
*/
arr1.indexOf("a", 10);

/* 
arr.includes(valueToFind[, fromIndex]) ： 判断数组是否包含某个元素
    从索引 from 开始搜索 item，如果找到则返回 true（如果没找到，则返回 false）。
*/
arr1.includes("a", 2);

/* 
ES6 : find 和 findIndex 直接查找元素或者元素的索引
*/
var student = [
  {
    id: 100,
    name: "czl",
  },
  {
    id: 101,
    name: "lmx",
  },
];
var stu = student.find((item, index, arr) => {
  return item.id === 100;
});

/* 
arr.sort([compareFunction])
    如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 前面
    如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变；
    如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 前面；
    也就是说，谁小谁排在前面；
*/
var newStus = student.sort(function (item1, item2) {
  return item1.id - item2.id;
});

// reverse() 方法将数组中元素的位置颠倒，并返回该数组。
student.reverse();

var demo = [3, 1, 3, 4, 3, 4, 3, 4];
/* 
arr.forEach
    遍历数组，并且让数组中每一个元素都执行一次对应的方法；
*/
demo.forEach((item, index, arr) => {});

/* 
arr.map
    map() 方法创建一个新数组；
    这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成；
*/
var test = demo.map((item) => item * 10);

/* 
arr.filter
    filter() 方法创建一个新数组；
    新数组中只包含每个元素调用函数返回为true的元素；
*/
var result = demo.filter((item, index, arr) => {
  return item > 3;
});

/* 
arr.reduce
    用于计算数组中所有元素的总和；
    对数组中的每个元素按序执行一个由您提供的 reducer 函数；
    每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值
*/
var num = demo.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, 0);
