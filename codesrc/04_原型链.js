function Foo() {
  // 检察长:当没有使用new关键字初始化实例对象的时候,内部返回一个使用new关键字实例化的对象
  if (this instanceof Foo) {
    // 属性初始
  } else {
    return new Foo()
  }

  const obj = new Object()
  // -- Foo构造函数的原型对象
  console.log(Foo.prototype); //  Foo {}   
  //  -- 实例对象不存在显式原型属性
  console.log(this.prototype); // undefined  
  // -- 实例的隐士原型属性指向函数的显示原型属性
  console.log(this.__proto__); // Foo {}        
  console.log(Foo.prototype === this.__proto__); // true       
  // -- 原型对象的constructor属性指向构造函数
  console.log(Foo.prototype.constructor); // [Function: Foo]    
  console.log(Foo.prototype.constructor === Foo); // true       
  // -- Foo构造函数作为一个Function实例对象,他的隐士原型属性指向Function构造函数的原型对象
  console.log(Foo.__proto__); // [Function]                     
  console.log(Foo.__proto__ === Function.prototype); // true    
  // -- Function构造函数的原型对象的隐式原型属性,指向Object函数的原型对象
  console.log(Function.prototype.__proto__); // {}                        
  console.log(Function.prototype.__proto__===Object.prototype); // true   
  // -- Object实例对象的隐士原型属性指向Object构造函数的原型对象
  console.log(Object.prototype === obj.__proto__); // true                
  // --  Object作为Function构造函数创建的实例对象,他的隐式原型属性指向Function构造函数的原型对象
  console.log(Object.__proto__); // [Function]                      
  console.log(Object.__proto__ === Function.prototype); // true     
  // -- 原型链的尽头
  console.log(Object.prototype.__proto__); // null 原型链的尽头     
}

new Foo()
// Foo()