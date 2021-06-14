var Book = function (title, time, author) {
  // 私有属性
  var num = 1
  // 私有方法
  function checkID() {
    console.log('check id');
  }
  // 构造函数内的，这是供实例化对象复制用的
  if (this instanceof Book) {
    // 公有属性
    this.title = title
    this.time = time
    this.author = author
    //特权方法
    /* 
      通过this创建的方法，不但可以访问这些对象
      的共有属性与共有方法，而且还能访问到类（创建时）
      或对象自身的私有属性和私有方法，由于这些方法
      权利比较大，所以我们又将它看作特权方法。 
    */
    this.getName = function () { }
    this.getPrice = function () { }

    //构造器
    /*
      在对象创建时通过使用这些特权方法我们可以初始化
      实例对象的一些属性，因此这些在创建对象时调用的
      特权方法还可以看作是类的构造器
    */
    this.setName = function () { }
    this.setPrice = function () { }
    //对象公有方法
    this.copy = function () { }
  } else {
    return new Book(title, time, author)
  }
}

// 构造函数外的，直接通过点语法添加的，这是供类使用的,实例化对象是访问不到的
// 类静态公有属性
Book.isChinese = true
// 类静态公有方法
Book.setItem = function (item) {
  console.log(item);
}

// 类的原型中的，实例化对象可以通过其原 型链间接地访问到，也是为供所有实例化对象所共用的
Book.prototype = {
  // 公有属性
  isAboutJS: true,
  // 公有方法
  display: function () {
    console.log('book displayed');
  }
}

var book = Book('Javascript设计模式', '2000-01-01', 'ZRM')
console.log(book);                   // { title: 'Javascript设计模式', time: '2000-01-01', author: 'ZRM' }
console.log(book instanceof Book);   // true
console.log(book.isChinese);         // undefined
// book.setItem('js book')           // TypeError: book.setItem is not a function
Book.setItem('js book')              // js book
console.log(book.isAboutJS);         // true
console.log(Book.isAboutJS);         // undefined
book.display()                       // book displayed
// Book.display()                    // TypeError: Book.display is not a function