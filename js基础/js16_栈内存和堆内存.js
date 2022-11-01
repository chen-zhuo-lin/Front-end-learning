/* 
    原始类型占据的空间是在栈内存中分配的；
    对象类型占据的空间是在堆内存中分配的；
*/

/* 
    原始类型的保存方式：在变量中保存的是值本身
        所以原始类型也被称之为值类型；
    对象类型的保存方式：在变量中保存的是对象的“引用”
        所以对象类型也被称之为引用类型；
*/
var a = 123
var b = 123
a === b // true

var m = {}
var n = {}
m === n // false

function foo(info){
    info.name = 'a'
}

var obj = {
    name: 'czl'
}
foo(obj)
console.log(obj.name); // a