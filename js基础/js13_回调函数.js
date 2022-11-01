/* 
foo这种函数我们也可以称之为高阶函数（Higher-order function）；

高阶函数必须至少满足两个条件之一：
    接受一个或多个函数作为输入；
    输出一个函数；

匿名（anonymous）函数的理解：
    如果在传入一个函数时，我们没有指定这个函数的名词或者通过函数表达式指定函数对应的变量，那么这个函数称之为匿名
函数。
*/
var foo = function (fn) {
  fn();
};

var bar = function () {
  console.log("bar函数");
};

// 匿名函数
foo(function () {
  console.log("匿名函数");
});
