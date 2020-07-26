"use strict";
// typescript中的接口
/*
1. 属性类接口
2. 函数类型接口
3. 可索引接口
4. 类类型接口
5. 接口扩展
*/
// 定义方法，且name要满足FullName
function printName(name) {
    console.log(name.firstName + " --- " + name.secondName);
}
var MyName = {
    // age: 20, 可以传入接口不包含的属性，但最好只包含接口定义的属性
    firstName: "Huang",
    secondName: "yisan"
};
printName(MyName);
function getName(name) {
    console.log(name);
}
getName({
    firstname: "h",
});
