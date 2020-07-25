"use strict";
// 创建ts的类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    // 定义对象方法getName
    Person.prototype.getName = function () {
        return this.name;
    };
    // setName方法
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Person;
}());
// 实例化类
var p = new Person("yisan");
// 修改name
p.setName("zhangsan");
console.log(p.getName());
// ts中实现类的继承 extends, super
