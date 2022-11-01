/* 
首先，语法不同：
    函数声明：在主代码流中声明为单独的语句的函数
    函数表达式：在一个表达式中或另一个语法结构中创建的函数。

其次，JavaScript创建函数的时机是不同的：
    函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。
    在函数声明被定义之前，它就可以被调用。
        这是内部算法的原故；
        当 JavaScript 准备 运行脚本时，首先会在脚本中寻找全局函数声明，并创建这些函数；
*/

function bar() {}

var foo = function () {};
