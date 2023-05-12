const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";


function MyPromise(executor) {
    let self = this // 缓存自身实例
    self.status = PENDING
    self.onFulFilledQueue = []  // 成功式的回调队列
    self.onRejectedQueue = []  // 失败时的回调队列
    self.value = null
    self.error = null

    let resolve = function (value) {
        if (self.status !== PENDING) return
        setTimeout(() => {
            self.status = FULFILLED
            self.value = value
            self.onFulFilledQueue.map(callback => callback(self.value))
        })
    }

    let reject = function (error) {
        if (self.status !== PENDING) return
        setTimeout(() => {
            self.status = REJECTED
            self.error = error
            self.onRejectedQueue.map(callback => callback(self.error))
        })
    }
    // 同步执行构造函数
    executor(resolve, reject)
}

function resolvePromise(bridgePromise, x, resolve, reject) {
    //如果x是一个promise
    if (x instanceof MyPromise) {
        // 拆解这个 promise ，直到返回值不为 promise 为止
        if (x.status === PENDING) {
            x.then(y => {
                resolvePromise(bridgePromise, y, resolve, reject);
            }, error => {
                reject(error);
            });
        } else {
            x.then(resolve, reject);
        }
    } else {
        // 非 Promise 的话直接 resolve 即可
        resolve(x);
    }
}

MyPromise.prototype.then = function (onFulFilled, onRejected) {
    // 成功回调不传给它一个默认函数
    onFulFilled = typeof onFulFilled === "function" ? onFulFilled : value => value;
    // 对于失败回调直接抛错
    onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };

    let bridgePromise;
    let self = this;
    if (self.status === PENDING) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            self.onFulFilledQueue.push((value) => {
                try {
                    // 看到了吗？要拿到 then 中回调返回的结果。
                    // 如果他是一个promise, 那么就一直递归调用then方法，直到返回值不是promise
                    let x = onFulFilled(value);
                    // 这里传入当前返回给下一个then函数的promise的状态 也就是bridgePromise
                    resolvePromise(bridgePromise, x, resolve, reject)
                } catch (e) {
                    reject(e);
                }
            });
            self.onRejectedQueue.push((error) => {
                try {
                    let x = onRejected(error);
                    resolve(x);
                } catch (e) {
                    reject(e);
                }
            });
        })
    }
    if (self.status === REJECTED) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            try {
                // 状态变为失败，会有相应的 self.error
                let x = onRejected(self.error);
                resolvePromise(bridgePromise, x, resolve, reject);
            } catch (e) {
                reject(e);
            }
        });
    }
    else if (this.status === FULFILLED) {
        onFulFilled(this.value)
    } else {
        onRejected(this.error)
    }
}

MyPromise.prototype.catch = function (onRejected) {
    onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };
    return this.then(null, onRejected);
}


// resolve -> 执行then方法 -> 改变状态 -> 执行回调
// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 300)
// }).then(res => {
//     console.log(res)
// }).then(res => {
//     console.log(res)
// })

new MyPromise((resolve, reject) => {
    setTimeout(() => resolve(1))
}).then(res => {
    console.log("第1次")
    console.log(res)
    return new MyPromise(resolve => {
        resolve(new MyPromise(resolve => resolve(++res)))
    })
}).then(res => {
    console.log("第2次")
    console.log(res)
    return new MyPromise(resolve => resolve(++res) )
}).then(res => {
    console.log("第3次")
    console.log(res)
})


// setTimeout(() => {
//     console.log('timer')
//     new Promise(resolve => {
//         resolve("promise")
//     }).then(res => {
//         console.log(res)
//     })
// },300)