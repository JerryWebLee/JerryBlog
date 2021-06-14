function inheritobject(obj){
  // 声明—个过渡函数对象
  function F(){}
  // 过渡对象的原型继承父对象
  F.prototype = obj
  // 返回过渡对象的—个实例，该实例的原型继承了父对象
  return new F()
}

// 寄生式继承
// 声明基对象
var book = {
  name: "js book",
  alikeBook: ["css book", "html book"]
}
function createBook(obj){
  // 通过原型继承方式创建新对象
  var o = new inheritobject(obj)
  // 拓展新对象
  o.getName = function () {
    console.log(this.name)
  }
  o.setName = function(name){
    this.name = name
  }
  // 返回拓展后的新对象
  return o
}

let newBook = createBook(book)
newBook.getName()                 // js book
newBook.setName('java book')
newBook.getName()                 // java book
console.log(newBook.alikeBook);   // [ 'css book', 'html book' ]
newBook.alikeBook.push('js book')
// 也会更改父类的属性对象
console.log(newBook.alikeBook);   // [ 'css book', 'html book', 'js book' ]
console.log(book.alikeBook);      // [ 'css book', 'html book', 'js book' ]
