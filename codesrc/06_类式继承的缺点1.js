// 父类
function superClass() {
  this.superValue = true
  this.car = {
    size:'2*4',
    color: 'blue',
    speed:'60km/h'
  }
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

var instance1 = new subClass()
var instance2 = new subClass()
console.log(instance1.car) // { size: '2*4', color: 'blue', speed: '60km/h' }
console.log(instance2.car) // { size: '2*4', color: 'blue', speed: '60km/h' }

// 实例1改变了父类共有对象的属性值,实例2中共有对象属性值也会跟着改变
instance1.car.size = '4*6'
instance1.car.speed = "80km/h"
console.log(instance1.car) // { size: '4*6', color: 'blue', speed: '80km/h' }
console.log(instance2.car) // { size: '4*6', color: 'blue', speed: '80km/h' }