"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ts中实现类的继承 extends, super
var PersonA = /** @class */ (function () {
    function PersonA(name) {
        this.name = name;
    }
    PersonA.prototype.run = function () {
        return "" + this.name;
    };
    return PersonA;
}());
var p1 = new PersonA('yisan');
p1.run();
// PersonB 继承 PersonA
var PersonB = /** @class */ (function (_super) {
    __extends(PersonB, _super);
    function PersonB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PersonB;
}(PersonA));
var p2 = new PersonB('yisan');
console.log(p2.run());
// PersonC 继承 PersonA 
// 如果要追加额外的属性，则需要constructor配合super，super为填写父类的已有属性
var PersonC = /** @class */ (function (_super) {
    __extends(PersonC, _super);
    function PersonC(age, name) {
        var _this = _super.call(this, name) //父类已有的属性name
         || this;
        _this.age = age;
        _this.name = name;
        return _this;
    }
    PersonC.prototype.run = function () {
        console.log(name);
        var fa;
        fa = _super.prototype.run.call(this); // 调用父类的run方法得到的值
        return fa + " \u4ECA\u5E74 " + this.age + "\u5C81";
    };
    return PersonC;
}(PersonA));
var p3 = new PersonC(20, "yisan");
console.log(p3.run());
//类的修饰符
/*
public: 公有  在类里面和子类，类外面都可以访问
protected: 保护类型  在类里面，子类里面可以访问，在类外部无法访问
private：私有  只有类里面才可以访问

不加任何修饰符， 默认为public，可以省略。
*/
