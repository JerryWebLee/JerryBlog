var extend = function (target, source) {
  // 遍历源对象中的属性
  for (var property in source) {
    // 将源对象中的属性复制到目标对象中
    target[property] = source[property]
  }
  // 返回目标对象
  return target
}

// 测试用例
var book = {
  name: 'Javascript设计模式',
  alike: ['css', 'html', 'Javascript']
}
var anotherBook = {
  color: 'blue'
}
extend(anotherBook, book)
console.log(anotherBook.name) // Javascript设计模式
console.log(anotherBook.alike) // ["css", "html", "Javascript"]
anotherBook.alike.push('ajax')
anotherBook.name = '设计模式'
console.log(anotherBook.name) // 设计模式
console.log(anotherBook.alike) // ["css", "html", "Javascript", "ajax"]
console.log(book.name) // Javascript设计模式
console.log(book.alike) // ["css", "html", "Javascript", "ajax"]