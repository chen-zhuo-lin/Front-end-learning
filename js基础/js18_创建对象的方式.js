/* 
工厂函数
    1. 我们在打印对象时，对象的类型都是Object类型
*/
function createPerson(name, age, height, address) {
  var p = new Object();
  p.name = name;
  p.age = age;
  p.height = height;
  p.address = address;

  p.eating = function () {
    console.log(this.name, "在吃东西");
  };

  return p;
}
var p1 = createPerson("czl", 18, 1.88, "湖南长沙");

/* 
如果一个函数被使用new操作符调用了，那么它会执行如下操作：
    1. 在内存中创建一个新的对象（空对象）；
    2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性;
    3. 构造函数内部的this，会指向创建出来的新对象；
    4. 执行函数的内部代码（函数体代码）；
    5. 如果构造函数没有返回非空对象，则返回创建出来的新对象；
*/
function Person(name, age, height, address) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.address = address;

  this.eating = function () {
    console.log(this.name, "在吃东西");
  };
}
var p2 = new Person("czl", 20, 1.9, "湖南衡阳");
console.log(p1,1)
console.log(p2,2)
