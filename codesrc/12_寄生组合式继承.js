// 这里返回的是父类原型对象的一个副本
function inheritobject(obj) {
  // 声明一个过渡函数对象
  function F() { }
  // 过渡对象的原型继承父对象
  F.prototype = obj
  // 返回过渡对象的—个实例，该实例的原型继承了父对象
  return new F()
}
/*
  寄生式继承 继承原型
  传递参数 subClass 子类
  传递参数 superClass 父类 
*/
function inheritPrototype(subClass, superClass) {
  // 复制一份父类的原型副本保存在变量中
  var p = inheritobject(superClass.prototype)
  // 修正，因为重写子类原型导致子类的 constructor 属性被修改
  // 对复制对象 p 做一次增强，修复其 constructor 属性指向不正确的问题
  p.constructor = subClass
  // 设置子类的原型
  // 将得到的复制对象 p 赋值给子类的原型，这样子类的原型就继承了父类的原型并且没有执行父类的构造函数
  subClass.prototype = p
}

// 测试用例
// 上面的寄生式继承结合下面子类中的构造函数继承组成寄生组合式继承
// 定义父类
function superClass(name) {
  this.name = name
  this.colors = ["red", "blue", "green"]
}
// 定义父类原型方法
superClass.prototype.getName = function () {
  console.log(this.name)
}

// 定义子类
function subClass(name, time) {
  // 构造函数式继承
  superClass.call(this, name)
  // 子类新增属性
  this.time = time
}
// 寄生式继承父类原型
inheritPrototype(subClass, superClass)

// 子类新增原型方法
subClass.prototype.getTime = function () {
  console.log(this.time)
}
// 创建两个测试方法
var instance1 = new subClass("js book", 2014)
var instance2 = new subClass("css book", 2013)
console.log(instance1.colors);  // [ 'red', 'blue', 'green' ]
instance1.colors.push("black")
console.log(instance1.colors);  // [ 'red', 'blue', 'green', 'black' ] 
console.log(instance2.colors);  // [ 'red', 'blue', 'green' ]
console.log(instance1 instanceof subClass); // true
console.log(instance1 instanceof superClass); // true

instance1.getTime()  // 2014
instance1.getName()  // js book
instance2.getTime()  // 2013
instance2.getName()  // css book