// 父类
function superClass() {
  this.superValue = true
}
// 共有方法
superClass.prototype.getsuperValue = function(){
  return this.superValue
}
// 子类
function subClass(args){
  this.subValue = false
  this.args = args
}
// 继承父类
subClass.prototype = new superClass()
// 为子类添加共有方法
subClass.prototype.getsubValue = function (){
  return this.subValue
}

var instance = new subClass('哈哈哈')
console.log(instance.args); // 哈哈哈
console.log(new superClass().args); // undefined