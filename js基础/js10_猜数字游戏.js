// 输入数字次数
var count = 1;
// 生成随机数
var randomNum = Math.floor(Math.random() * 100);
alert(randomNum)
// 控制变量
var flag = false;
while (count < 8) {
  // 输入数字
  var num = +prompt("请猜测一个随机数");
  if (num === randomNum) {
    alert("恭喜你，猜对了");
    flag = true;
    break;
  } else if (num > randomNum) {
    alert("猜大了");
  } else {
    alert("猜小了");
  }
  count++;
}

if (!flag) alert("您的次数用完了, 您失败了；");
