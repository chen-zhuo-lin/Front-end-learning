/* 
普通的相等性检查 == 存在一个问题，它不能区分出 0 和 false，或者空字符串和 false这类运算：
    这是因为在比较不同类型的值时，处于判断符号 == 两侧的值会先被转化为数字；
    空字符串和 false 也是如此，转化后它们都为数字 0；
*/
var flag1 = 0 == false

/* 
严格相等运算符 === 在进行比较时不会做任何的类型转换;
*/
var flag2 = 0 === false
