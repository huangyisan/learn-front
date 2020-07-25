"use strict";
// 函数的定义
// es5中函数的定义
/*
// 声明式
  function run() {
    return "run";
  }

// 匿名式
  var func2 = function(){
    return "run";
  }
*/
// ts中的函数申明法
function run() {
    return "yisan"; //返回类型必须为string类型
}
// ts中的匿名函数
var func2 = function () {
    return "123";
};
alert(func2());
// ts中定义带参函数
function run1(str) {
    return str;
}
// 匿名定义带参函数
var func3 = function (str, age) {
    return str + " -- " + age;
};
//没有返回值的函数
function noreturn() {
    console.log("no return");
}
// 可选参数， 形参需要有实参对应，如果不一致则需要配置可选参数
// ?表示该形参可传可不传
function getInfo(name, age) {
    if (age) {
        return "" + age;
    }
    return name + " -- " + age;
}
alert(getInfo("yisan"));
// 默认参数
function getInfo1(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return "" + age;
    }
    return name + " -- " + age;
}
alert(getInfo1("yisan"));
// 不定参数 三点运算符
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum(1, 2, 3, 4));
function css(str) {
    if (typeof str === "string") {
        return "" + str;
    }
    else {
        return str + " \u5C81";
    }
}
// 箭头函数 es6
// 箭头函数的this指向上下文
setTimeout(function () {
    alert("run");
}, 1000);
