// console.log('start')
//
//
//
// async function fc(){
//   console.log('ac-start')
//   await new Promise((resolve) => {
//     resolve('p3')
//   }).then(res =>{
//     console.log(res)
//   })
//   await new Promise((resolve) => {
//     console.log('p1')
//     return 'p2'
//   })
//   console.log('success')
//
//   return 'ac-edn'
// }
//
//
// fc().then(res => {
//   console.log(res)
// })
// console.log('end')


// const target = {
//   m :function () {
//     console.log(this === proxy)
//
//   }
// }
//
//
// const proxy = new Proxy(target, {})
//
// target.m()
// proxy.m()



// const arr1 = [1,15,3]
// const arr2 = new Uint16Array([1,15,3])
//
//
// console.log(arr1.sort())
// console.log(arr2.sort())



// console.log(typeof 1..toString())
// console.log(typeof String(1))
// console.log(typeof 1 +'')


// let f =(x) => {
//   return ( x > 0 ? x * f(x - 1): 2)
// }
//
// console.log(f(f(f(1))));


// console.log(7700 / 130)


// x - 0.65x + 272 = 1.2x
// 0.85x = 272
//

// console.log(272 / 0.85)

// function f() {
//   console.log(this)
//   this.name = 'yedi'
// }
//
// f()

// let p2 = new f()

// console.log(p, p2)


//
// const sum = (args) => {
//   let f = (regs) => sum(...args, ...regs)
//   f.value = () => args.reduce((prev, curr) => prev + curr)
//   return f
// }


// let sum = (...args) => {
//   let f = (...regs) => sum(...args, ...regs)
//   f.valueOf = () => args.reduce((a, b) => a + b)
//   return f
// }
// console.log(sum(1)(2)(3).valueOf());

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function* getNext() {
  let currNum = 1

  while (currNum < 100) {
    if (isPrime(currNum)) {
      console.log(currNum)
      yield currNum
    }
    currNum++
  }
}

let g = getNext()

g.next()
g.next()
g.next()
g.next()
g.next()
g.next()
g.next()
g.next()
g.next()
