/* 
调用一个原始类型的属性或者方法时，会进行如下操作：
    根据原始值，创建一个原始类型对应的包装类型对象；
    调用对应的属性或者方法，返回一个新的值;
    创建的包装类对象被销毁；
    通常JavaScript引擎会进行很多的优化，它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用.
*/
var name1 = "lmx";
var name2 = new String("lmx");
typeof name1; // string
typeof name2; // object
name1 === name2; // false
