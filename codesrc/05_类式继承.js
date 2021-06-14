// 父类
function superClass() {
  this.superValue = true
}
// 共有方法
superClass.prototype.getsuperValue = function(){
  return this.superValue
}
// 子类
function subClass(){
  this.subValue = false
}
// 继承父类
subClass.prototype = new superClass()
// 为子类添加共有方法
subClass.prototype.getsubValue = function (){
  return this.subValue
}

var instance = new subClass()
console.log(instance.getsuperValue()) //true
console.log(instance.getsubValue()) // false

console.log(instance instanceof superClass) //true
console.log(instance instanceof subClass) //true
// subClass.prototype继承了superClass
console.log(subClass instanceof superClass) //false
console.log(subClass.prototype instanceof superClass) // true