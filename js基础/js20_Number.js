//  Infinity：代表数学概念中的 无穷大 ∞，也可以表示-Infinity；
var num1 = 1 / 0;

// NaN：NaN 代表一个计算错误，它是一个错误的操作所得到的结果；
var num2 = "2" * 10;

// 十进制
var num3 = 111;
// 十六进制
var num4 = 0x111;
// 八进制
var num5 = 0o111;
// 二进制
var num6 = 0b111;

// 最小正数值：这个值为： 5e-324，小于这个的数字会被转化为0
Number.MIN_VALUE;
// 最大正数值：这个值为： 1.7976931348623157e+308
Number.MAX_VALUE;

// isNaN,用于判断是否不是一个数字。不是数字返回true，是数字返回false。
isNaN(10) // false

// JavaScript 中最大的安全整数 (2^53 - 1)；
Number.MAX_SAFE_INTEGER
// JavaScript 中最小的安全整数 -(2^53 - 1)
Number.MIN_SAFE_INTEGER

// Number实例方法
// toString(base)，将数字转成字符串，并且按照base进制进行转化
var str1 = num3.toString()
// toFixed(digits)，格式化一个数字，保留digits位的小数；
var num7 = num3.toFixed(2)

// Number类方法
// Number.parseInt(string[, radix])，将字符串解析成整数，也有对应的全局方法parseInt；
Number.parseInt('111')
// Number. parseFloat(string)，将字符串解析成浮点数，也有对应的全局方法parseFloat；
Number.parseFloat('222')