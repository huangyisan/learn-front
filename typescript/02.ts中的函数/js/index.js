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
