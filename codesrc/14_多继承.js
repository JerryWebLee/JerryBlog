// 多继承 属性复制
// var mix = function () {
//   var i = 1, // 从第二个参数起为被继承的对象
//     len = arguments.length, // 获取参数长度
//     target = arguments[0], // 第—个对象为目标对象
//     arg // 缓存参数对象
//   // 遍历被继承的对象
//   for (;i < len; i++) {
//     // 缓存当前对象
//     arg = arguments[i]
//     // 遍历被继承对象中的属性
//     for (var property in arg) {
//       // 将被继承对象中的属性复制到目标对象中
//       target[property] = arg[property]
//     }
//   }
//   // 返回目标对象
//   return target
// }

Object.prototype.mix = function () {
  var i = 0, // 从第—个参数起为被继承的对象
    len = arguments.length, // 获取参数长度
    arg // 缓存参数对象
  // 遍历被继承的对象
  for (; i < len; i++) {
    // 缓存当前对象
    arg = arguments[i]
    // 遍历被继承对象中的属性
    for (var property in arg) {
      // 将被继承对象中的属性复制到目标对象中
      this[property] = arg[property]
    }
  }
}
var book1 = {
  name: 'Javascript设计模式',
  alike: ['css', 'html', 'Javascript']
}
var book2 = {
  color: 'blue'
}
var otherBook = new Object()

otherBook.mix(book1, book2)
/*
  {
    name: 'Javascript设计模式',
    alike: [ 'css', 'html', 'Javascript' ],
    mix: [Function],
    color: 'blue'
  }
*/
console.log(otherBook)
