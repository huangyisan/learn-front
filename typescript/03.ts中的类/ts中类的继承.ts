
// ts中实现类的继承 extends, super
class PersonA{
  name:string
  constructor(name:string) {
    this.name = name;
  }

  run():string {

    return `${this.name}`

  }
}

var p1 = new PersonA('yisan')
p1.run()

// PersonB 继承 PersonA
class PersonB extends PersonA{
}

var p2 = new PersonB('yisan')

console.log(p2.run())

// PersonC 继承 PersonA 
// 如果要追加额外的属性，则需要constructor配合super，super为填写父类的已有属性
class PersonC extends PersonA {
  protected age: number // 实例化对象中无法使用.age调用该属性
  constructor(age:number, name:string) {
    super(name) //父类已有的属性name
    this.age = age
    this.name = name
  }
  run():string {
    console.log(name)
    let fa:String
    fa = super.run() // 调用父类的run方法得到的值
    return `${fa} 今年 ${this.age}岁`
  }

}

var p3 = new PersonC(20, "yisan")
console.log(p3.run())


//类的修饰符
/*
public: 公有  在类里面和子类，类外面都可以访问
protected: 保护类型  在类里面，子类里面可以访问，在类外部无法访问
private：私有  只有类里面才可以访问

不加任何修饰符， 默认为public，可以省略。
*/


