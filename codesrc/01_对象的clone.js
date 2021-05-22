var Plane = function () {
  this.blood = 100
  this.attackLevel = 1
  this.defenseLevel = 1
}

var plane = new Plane()
plane.blood = 500
plane.attackLevel = 10
plane.defenseLevel = 7

console.log(plane);
var clonePlane = Object.create(plane)
console.log(clonePlane.__proto__)


// 在不支持Object.create()方法的浏览器中，可以使用

Object.create = Object.create || function (obj) {
  var F = function () {
    F.prototype = obj
  }
  return new F()
}