function superClass(id){
  this.books = ['Javascript', 'html', 'css']
  this.id = id
}
// 父类声明原型方法
superClass.prototype.showBooks = function(){
  console.log(this.books)
}
// 构造函数继承
function subClass(id){
  // 继承父类
  superClass.call(this, id)
}
// 类式继承
subClass.prototype = new superClass()
// 子类实例化过程中又能将参数传递到父类的构造函数中
var instance1 = new subClass(10)
var instance2 = new subClass(11)
instance1.books.push("设计模式")
console.log(instance1.books)  // ["Javascript", "html", "css", "设计模式"]
console.log(instance1.id)     // 10
instance1.showBooks()         // ["Javascript", "html", "css", "设计模式"]

// instance1的books中添加书籍，不会影响父级的和子级其他实例对象的books对象属性
console.log(new subClass().books);  // [ 'Javascript', 'html', 'css' ]
console.log(instance2.books)        // ["Javascript", "html", "css"]
console.log(instance2.id)           // 11