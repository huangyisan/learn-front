// 创建ts的类
class Person{
  
  name:string;//定义类的属性，前面省略了public

  constructor(n:string) { // 构造函数， 实例化类的时候触发的方法
    this.name = n;

  }

  // 定义对象方法getName
  getName():string{
    return this.name
  }

  // setName方法
  setName(newName:string):void{
    this.name = newName
  }


}

// 实例化类
let p = new Person("yisan")
// 修改name
p.setName("zhangsan")
console.log(p.getName())


// ts中实现类的继承 extends, super
