function superClass(id){
  // 引用类型共有属性
  this.books = ['Javascript', 'html', 'css']
  // 值类型共有属性
  this.id = id
}
// 父类声明原型方法
superClass.prototype.showBooks = function(){
  console.log(this.books)
}
// 声明子类
function subClass(id){
  // 继承父类
  superClass.call(this, id)
}
// 创建第一个子类的实例
var instance1 = new subClass(10)
// 创建第二个子类的实例
var instance2 = new subClass(11)
instance1.books.push("设计模式")
console.log(instance1.books)  // ["Javascript", "html", "css", "设计模式"]
console.log(instance1.id)     // 10
console.log(instance2.books)  // ["Javascript", "html", "css"]
console.log(instance2.id)     // 11
// instance1.showBooks()         // TypeError