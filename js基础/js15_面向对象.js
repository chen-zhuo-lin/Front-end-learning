// 声明对象
var message = "hello world";
var info = {
  name: "czl",
  age: 18,
  address: "湖南长沙",
  // 方括号的使用
  [message]: "你好，世界",
};
// 访问对象的属性
var age = info.age;
// 修改对象的属性
info.name = "kobe";
// 添加对象的属性
info.height = 1.88;
// 删除对象的属性
delete info.age;

// 遍历对象
// Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组；
// 遍历方式一：普通for循环
var infoKeys = Object.keys(info);
for (let i = 0; i < infoKeys.length; i++) {
  var key = infoKeys[i];
  var value = infoKeys[key];
}

// 遍历方式二：for in 遍历方法
for (var key in info) {
  var value = info[key];
}
