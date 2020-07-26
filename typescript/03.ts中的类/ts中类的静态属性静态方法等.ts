// 静态方法无法使用实例属性，需要声明静态属性才可以使用

class Per{
  static p_name:string
  static print(){
    console.log(Per.p_name)
  }
}
// 无需实例化，直接通过类来调用静态方法。 
Per.print()