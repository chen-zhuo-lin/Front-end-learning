// 创建Date对象
var date = new Date(); // 当前时间（伊尔库茨克标准时间）
var date2 = new Date(1000); // 传入的毫秒数，表示从1970-01-01 00：00：00 UTC 经过的毫秒数
var date3 = new Date("2022-08-08"); // 传入的是datestring，日期的字符串值
// new Date(year,monthIndex [, day [, hours [, minutes [,seconds [, milliseconds]]]]])
var date4 = new Date(2022, 08, 08, 08, 08, 08, 08);

// dateString时间的表示方式
// console.log(date.toISOString());

// 1.获取想要的时间信息
var year = date.getFullYear(); //获取年份（4 位数）；
var month = date.getMonth() + 1; // 获取月份，从 0 到 11；
var day = date.getDate(); // 获取当月的具体日期，从 1 到 31
var hour = date.getHours(); // 获取小时；
var minute = date.getMinutes(); // 获取分钟；
var second = date.getSeconds(); // 获取秒钟；
var millsecond = date.getMilliseconds(); // 获取毫秒

var weekday = date.getDay(); // 一周中的第几天

// 2.也可以给date设置时间(了解)
date.setFullYear(2033);
// 自动校验
date.setDate(32);

/* 
Unix 时间戳：它是一个整数值，表示自1970年1月1日00:00:00 UTC以来的毫秒数。
    方式一：new Date().getTime()
    方式二：new Date().valueOf()
    方式三：+new Date()
    方式四：Date.now()
*/
var startTime = Date.now();
// 测试代码的性能
for (let i = 0; i < 10000; i++) {}
var endTime = Date.now();
var result = endTime - startTime

/* 
Date.parse(str) 方法可以从一个字符串中读取日期，并且输出对应的Unix时间戳。
Date.parse(str) ：
    作用等同于 new Date(dateString).getTime() 操作；
    需要符合 RFC2822 或 ISO 8601 日期格式的字符串；
        比如YYYY-MM-DDTHH:mm:ss.sssZ
    如果输入的格式不能被解析，那么会返回NaN；
*/
var time1 = Date.parse("2022-08-08T08:08:08.666Z")