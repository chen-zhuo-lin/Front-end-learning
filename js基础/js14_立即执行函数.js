/* 
一个函数定义完后被立即执行；
    第一部分是定义了一个匿名函数，这个函数有自己独立的作用域。
    第二部分是后面的（），表示这个函数被执行了

这个东西有什么用？
    会创建一个独立的执行上下文环境，可以避免外界访问或修改内部的变量，也避免了对内部变量的修改
*/
(function () {
  console.log("first");
})();
