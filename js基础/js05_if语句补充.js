// 补充一：如果代码块中只有一行代码，那么{}可以省略：
if (true) return '111'

/* 
补充二：if (…) 语句会计算圆括号内的表达式，并将计算结果转换为布尔型（Boolean）
   转换规则和Boolean函数的规则一致；
   数字 0、空字符串 “”、null、undefined 和 NaN 都会被转换成 false,所以它们被称为 “假值（falsy）”
   其他值被转换为 true，所以它们被称为 “真值（truthy）”； 
*/