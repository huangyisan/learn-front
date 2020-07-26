// typescript中的接口
/*
1. 属性类接口
2. 函数类型接口
3. 可索引接口
4. 类类型接口
5. 接口扩展
*/

// 接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
// 接口定义了某一批类所需要遵循的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，他只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。

// 关键字 interface 定义接口
// 1. 属性接口

// 定义接口FullName，包含两个属性，皆为string类型
interface FullName {
  firstName:string;
  secondName: string;
}

// 定义方法，且name要满足FullName
function printName(name:FullName) {
  console.log(`${name.firstName} --- ${name.secondName}`)
}

var MyName = { // 传入参数必须包含 firstname和secondname
  // age: 20, 可以传入接口不包含的属性，但最好只包含接口定义的属性
  firstName: "Huang",
  secondName: "yisan"
}

printName(MyName)

// 接口可选属性

interface FullName2{
  firstname: string;
  secondname?: string //表示接口可选属性，可传入也可以不传入
}

function getName(name:FullName2){
  console.log(name)
}

getName({
  firstname:"h",
  // secondname:"yisan"  因为secondname为可选属性，所以可以不传入
})