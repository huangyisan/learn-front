// 多态: 父类定义一个方法不去实现， 让继承他的子类去实现，每个子类有不同的表现
// 多态属于继承， 让不同的子类实现不同的方法

class Animal{
  name:string
  constructor(name:string) {
    this.name = name
  }

  eat() {
    console.log("父类定义的eat，让子类进行具体实现")
  }
}

class Dog extends Animal {
  constructor(name:string) {
    super(name)
  }
  eat(){
    console.log("小狗吃肉")
  }
}

class Cat extends Animal {
  constructor(name:string) {
    super(name)
  }
  eat(){
    console.log("小猫吃鱼")
  }
}