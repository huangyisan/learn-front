"use strict";
// 1. 布尔类型(boolean) true和false
var flag = true;
var flag2 = false;
console.log(flag);
console.log(flag2);
// 2. 数字类型(number)
var num = 123;
num = 456; // 因为上一行已经定义num为number类型，如果将字符串赋值给num，则报错
num = 2.2; // 浮点类型是可以被number类型接受的
console.log(num);
// 3. 字符串类型(string)
var str = "yisan";
console.log(str);
// 4. 数组类型(array)
// 第一种定义数组方法 
// 数组名:类型[]
var arr = [1, 2, 3, 4];
console.log(arr);
// 第二种定义数组方法
// 数组名:Array<类型>
var arr2 = [1, 2, 3, 4, 5];
var arr3 = ["php", "java", 'c'];
console.log(arr2);
console.log(arr3);
// 第三种定义数组的方法
var arr4 = [1, "string", true];
console.log(arr4);
// 5. 元组类型(tuple)
// 按次序指定元素的类型
// 数组名称:[类型1， 类型2， 类型3]
var tuple1 = ["yisan", 123, true];
console.log(tuple1);
// 6. 枚举类型(enum)
// 事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法称之为枚举方法。
// enum 枚举名{
//   标示符[=整形常数]
//   标示符[=整形常数]
//   标示符[=整形常数]
//   ...
//   标示符[=整形常数]
// } 
// pay_status 0 未支付 1 支付 2 交易成功
var pay_status;
(function (pay_status) {
    pay_status[pay_status["unpay"] = 0] = "unpay";
    pay_status[pay_status["pay"] = 1] = "pay";
    pay_status[pay_status["success"] = 2] = "success";
})(pay_status || (pay_status = {}));
// 定义f为枚举类型，其值为枚举类型pay_sutats对应的unpay的值
var f = pay_status.unpay;
console.log(f);
// 如果对枚举类型的标示符不赋值，则默认值为该标示符的索引值
var color;
(function (color) {
    color[color["yellow"] = 0] = "yellow";
    color[color["blue"] = 1] = "blue";
    color[color["red"] = 2] = "red";
})(color || (color = {}));
var c = color.blue;
console.log(c); //输出为1
// 如果枚举类型的其中一个标示符被赋值number类型，接下来的没有赋值，则接下来的标示符的值为前一个值+1
var color1;
(function (color1) {
    color1[color1["yellow"] = 0] = "yellow";
    color1[color1["blue"] = 1] = "blue";
    color1[color1["red"] = 2] = "red";
})(color1 || (color1 = {}));
var c1 = color1.red;
console.log(c1); //输出为3
// 7. 任意类型(any)
// any可以表示任意类型
var numany = "ss";
//因为numany是任意类型，所以即便当前为string类型，也可以被赋值成number类型
numany = 123;
console.log(numany);
// 8. null 和 undefined
// 属于其他类型(never类型)的子类型
var n;
// console.log(n) //输出报错
var n1;
console.log(n1); //输出undefined
// 定义未赋值则undefined，赋值则是number类型
var numn;
console.log(numn);
//可能是number类型 可能null 可能undefined
var numnull;
console.log(numnull);
// 9. void类型 表示没有任何类型，一般用于定义方法的时候没有返回值
function run() {
    console.log("没有返回类型");
}
run();
// 10. never类型,是其他类型(包括null和undefined)的子类型，代表从不会出现的值。
// 这意味着声明nerver的变量只能被never类型所赋值。
var a;
// a 只能被赋值为undefined, 否则报错
a = undefined;
console.log(a);
// b 只能被赋值为null, 否则报错
var b;
b = null;
console.log(b);
// 这边定义d为never类型，在函数中返回的是一个错误，错误这个类型是非基本类型的其他类型
var d;
d = (function () {
    throw new Error("错误");
})();
