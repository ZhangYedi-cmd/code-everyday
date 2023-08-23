function Koa() {
  this.middlewareList = []
}

Koa.prototype.addMiddleware = function (fn) {
  this.middlewareList.push(fn)
}

Koa.prototype.compose = function () {
  let {middlewareList} = this
  return () => {
    let dispatch = (i) => {
      let middleware = middlewareList[i]
      if (i === middlewareList.length) {
        return
      }
      return middleware(() => dispatch(i + 1))
    }
    return dispatch(0)
  }
}

let k = new Koa()

k.addMiddleware(async (next) => {
  console.log('1')
  await next()
})
k.addMiddleware(async (next) => {
  console.log('2')
  await next()
})
k.addMiddleware(async (next) => {
  console.log('3')
  // await next()
})

k.compose()()
