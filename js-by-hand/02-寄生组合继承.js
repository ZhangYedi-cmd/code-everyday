function Person(name) {
  this.name = name
}

Person.prototype.sayName = function () {
  console.log(`hello this is ${this.name}`)
}

function Son (name) {
  Person.call(this,name) // 属性继承
}

Son.prototype = new Person(); //方法盗用

const s = new Son("yuzhang")

s.sayName()
