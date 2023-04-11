async function asyncPool(limit, arr, task) {
    let executing = [],
        finished = []

    for (let params of arr) {
        let p = task(params)
        finished.push(p)
        if (limit <= arr.length) {
            p = p.then(res => {
                // 执行完成之后腾出一个空位
                executing.splice(executing.indexOf(p), 1)
            })
            executing.push(p)
            if (executing.length >= limit) {
                await Promise.race(executing)
            }
        }
    }

    return Promise.all(finished)
}

asyncPool(
    2,
    [1000, 3000, 2000, 5000, 6000],
    (params) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(params)
            resolve(params)
        },params)
    })
})
