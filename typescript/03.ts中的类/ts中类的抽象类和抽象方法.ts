// 抽象类: 他是提供其他类继承的基类，不能直接被实例化。
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法阿不包含具体实现，必须在派生类中实现。
// abstract抽象方法只能放在抽象类里面。
// 抽象类和抽象方法用来定义标准。


// 该animals提供标准，不能被实例化。
abstract class Animals {
  abstract eat():any
}

class Dogs extends Animals {
  // 父类为抽象类，则子类必须实现父类中定义的抽象方法
  eat() {
    return "小狗吃肉"
  }
}