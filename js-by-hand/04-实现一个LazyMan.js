let _LazyMan = function (name) {
    this.taskQueue = []
    let that = this
    // 全部push完成之后，开始执行微任务队列
    Promise.resolve().then(() => {
        // 将要执行的任务，全部丢进微任务队列执行
        let p = Promise.resolve()
        that.taskQueue.map(t => {
            p = p.then(t)
        })
    })
    setTimeout(async () => {
        for (let t of that.taskQueue) {
            await t()
        }
    })
}

_LazyMan.prototype.hold = function (time) {
    this.taskQueue.push(() => {
        return new Promise((resolve, reject) => {
            console.log(`sleep start`)
            setTimeout(() => {
                console.log(`sleep end`)
                resolve()
            }, time * 1000)
        })
    })
}

_LazyMan.prototype.sleep = function (time) {
    this.hold(time)
    return this
}

_LazyMan.prototype.sayHello = function (name) {
    this.taskQueue.push(() => {
        console.log(`hello ${name}`)
    })
    return this
}

let LazyMan = (name) => new _LazyMan(name)

LazyMan('yedi')
    .sleep(1)
    .sayHello("yedi")
    .sleep(5)
    .sayHello("h")
