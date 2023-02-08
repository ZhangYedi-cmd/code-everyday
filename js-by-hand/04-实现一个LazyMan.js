/**
 * 实现一个LazyMan
 *
 * LazyMan().sayHello("yedi").sleep(2).sayHello("wangzhao")
 *
 * output :
 *        hello yedi!
 *        wait....2s
 *        hello wangzhao!
 */

function _LazyMan() {
    this.tasks = []
    let that = this
    // 先get到所有的任务
    // 全部push完成之后，开始执行微任务队列
    Promise.resolve().then(() => {
        // 将要执行的任务，全部丢进微任务队列执行
        let p = Promise.resolve()
        that.tasks.map(t => {
            p = p.then(t)
        })
    })
}

_LazyMan.prototype.sayHello = function (name) {
    this.tasks.push(() => {
        console.log(`hello ${name}`)
    })
    return this
}

_LazyMan.prototype.wait = function (time) {
    this.tasks.push(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1)
            }, time * 1000)
        })
    })
    return this
}

function LazyMan() {
    return new _LazyMan()
}

LazyMan().sayHello('yedi').wait(2).sayHello('yedi')
