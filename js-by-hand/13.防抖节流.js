let debounce = (func, timeout) => {
    let timer
    return function () {
        let that = this
        // 清除上一次的定时器
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.call(that,arguments)
        }, timeout)
    }
}

let resizeCallback = function (args) {
    console.log('resize callback', args)
}

window.addEventListener('resize', debounce(resizeCallback, 5000))


// 节流：上锁 一段时间内只能执行一次
let throttle = (func,timeout) => {
    let timer
    return function () {
        let that = this
        if (timer) {
            return
        }
        func.call(that, arguments)
        timer = setTimeout(() => {
            clearTimeout(timer)
        }, timeout)
    }
}

let btn = document.querySelector("#btn")

let clickCallback = (args) => {
    console.log('send Req', args)
}

btn.addEventListener('click', throttle(clickCallback, 5000))