/* 
this指向什么？
    在全局环境下面，this指向window；
    通过对象调用，this指向调用的对象；
*/

var obj = {
  name: "czl",
  running: function () {
    console.log(this.name, "running"); // this -> obj
  },
  eatting: function () {
    console.log(this.name, "eatting");
  },
  studying: function () {
    console.log(this.name, "studying");
  },
};
