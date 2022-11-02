// 单引号
var str1 = "1";
// 双引号
var str2 = "2";
// ES6 反引号
var str3 = `${str1},${str2}`;

// 字符串拼接
var newStr = str1 + str2;

// 获取字符串长度
newStr.length;

// 访问字符串的字符
newStr[0]; // 通过字符串的索引,没找到返回undefined
newStr.charAt("2"); // 没用找到字符返回空字符串

// 字符串遍历
// 普通for循环
for (let i = 0; i < newStr.length; i++) {}
// for...of遍历
for (const str of newStr) {
}

// 字符串定义后不可修改,所以，在我们改变很多字符串的操作中，都是生成了一个新的字符串
var message = "Hello World";
message[1] = "a"; // 没有意义
// toLowerCase()：将所有的字符转成小写；
message.toLowerCase();
// toUpperCase() ：将所有的字符转成大写；
message.toUpperCase();

// 查找字符串位置,没有找到,返回-1
message.indexOf("h", 3); // 从第3个索引开始,查找h字符的索引

// ES6 - 是否包含字符串,根据情况返回true 和 false
message.includes("h", 3); // 从第3个索引开始,查找h字符

// ES6 - 以xxx开头,根据情况返回true 和 false
message.startsWith("h", 0); // 索引0开始,是否以h字符开头

// 以xxx结尾,根据情况返回true 和 false
message.endsWith("d", 8); // 在8个字符串长度内,是否以字符 d 结尾

/* 
替换字符串  str.replace(regexp|substr,newSubStr|function)
    查找到对应的字符串，并且使用新的字符串进行替代；
    这里也可以传入一个正则表达式来查找，也可以传入一个函数来替换；
*/
message.replace("h", "H");

// 获取子字符串
// slice(start, end), 从start ~ end, 不包含end,允许负值参数
message.slice(0, 6);
message.slice(-8); // 推荐
// substring(start, end),从 start 到 end（不含 end）,负值代表 0
message.substring(0, 6);
// substr(start, length),从 start 开始获取长为 length 的字符串,允许 start 为负数
message.substr(0, 5);

// 拼接字符串 str.concat(str2,[, ...strN])
"hello".concat("world").concat("你好");

// 删除首尾空格
message.trim();

/* 
字符串分割 str.split([separator,[, limit]])
    separator：以什么字符串进行分割，也可以是一个正则表达式；
    limit：限制返回片段的数量；
*/
var test = "my name is czl";
message.split(" ", 3); // ['my','name','is']
