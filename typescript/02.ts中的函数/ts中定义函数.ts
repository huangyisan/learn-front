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
function run():string {
  return "yisan" //返回类型必须为string类型
}

// ts中的匿名函数
let func2 = function():string{
  return "123"
}

alert(func2())

// ts中定义带参函数
function run1(str:string):string {
  return str
}
// 匿名定义带参函数
let func3 = function(str:string, age:number):string {
  return `${str} -- ${age}`
}

//没有返回值的函数
function noreturn():void {
  console.log("no return")
}

// 可选参数， 形参需要有实参对应，如果不一致则需要配置可选参数
// ?表示该形参可传可不传
function getInfo(name:string, age?:number):string {
  if (age) {
    return `${age}`
  }
  return `${name} -- ${age}`
}

alert(getInfo("yisan"))

// 默认参数
function getInfo1(name:string, age:number=20):string {
  if (age) {
    return `${age}`
  }
  return `${name} -- ${age}`
}

alert(getInfo1("yisan"))

// 不定参数 三点运算符

function sum(...result:number[]):number {
  let sum = 0;
  for(let i = 0; i<result.length; i++){
    sum += result[i];
  }
  return sum;
}

alert(sum(1,2,3,4))

// 函数重载
// ts中的函数重载，是通过为同一个函数提供多个函数类型定义来实现多种功能的目的。
// 多次声明css函数，进行强行约束，比如如下就只有两种类型，string和number，然后最后一个css函数进行最终声明，根据类型判断，实现功能。
function css(name:string):string 

function css(age:number):string

function css(str:any):any {
  if (typeof str === "string") {
    return `${str}`
  }else {
    return `${str} 岁`
  }
}


// 箭头函数 es6
// 箭头函数的this指向上下文

setTimeout(()=>{
  alert("run")
},1000)

