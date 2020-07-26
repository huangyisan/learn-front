"use strict";
// 抽象类: 他是提供其他类继承的基类，不能直接被实例化。
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法阿不包含具体实现，必须在派生类中实现。
// abstract抽象方法只能放在抽象类里面。
// 抽象类和抽象方法用来定义标准。
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
// 该animals提供标准，不能被实例化。
var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 父类为抽象类，则子类必须实现父类中定义的抽象方法
    Dogs.prototype.eat = function () {
        return "小狗吃肉";
    };
    return Dogs;
}(Animals));
