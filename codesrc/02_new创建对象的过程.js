function Person(name) {
  this.name = name
}

Person.prototype.getName = function () {
  return this.name
}
var person1 = new Person('Jerry')
var objectFactory = function () {
  var obj = new Object(),
    Constructor = [].shift.call(arguments) // 删除参数数组的第一个值赋值给Constructor
  // console.log(Constructor);
  obj.__proto__ = Constructor.prototype    // 只想正确的原型
  var ret = Constructor.apply(obj, arguments)  // 借用外部传入的构造器给obj空对象设置name属性
  console.log(obj);  // Person { name: 'Jerry' }
  console.log(ret);  // undefined
  return typeof ret === 'object' ? ret : obj
}

var person2 = objectFactory(Person, 'Jerry')
console.log(person1);
console.log(person2);