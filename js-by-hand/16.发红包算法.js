/**
 * 美团优选二面 ❌
 * N 分钱 分给 M 个人， 每个人至少分到1分钱，这个钱要怎么分？
 */

let dispatchMoney = (n, m) => {

    let otherMoney = n - m,
        moneys = new Array(m)

    moneys = moneys.fill(1)

    let dispatch = () => {
        if (otherMoney === 0) {
            return
        }
        for (let i = 0; i < m; i++) {
            let randomMoney = Math.random(),
                patchMoney = randomMoney < otherMoney ? randomMoney : otherMoney
            otherMoney -= patchMoney
            moneys[i] += patchMoney
        }
        dispatch()
    }
    dispatch()
    return moneys
}

let startTime = new Date().getTime()
let moneys = dispatchMoney(1000000, 1000)
let endTime = new Date().getTime()
console.log(moneys)

//
let getRandomInt = (start, end) => {
    return Math.random() * (end - start) + start
}

// let randInt = getRandomInt(1,10)
//
// console.log(randInt)


// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }


/**
 * 切线法
 */
//
// let dispatch02 = (n, m) => {
//     let diffArr = []
//     diffArr[0] = 0
//     for (let i = 1; i < m - 1; i++) {
//         diffArr[i] = getRandomInt(1, n) + 1
//     }
//     diffArr.sort((a,b) => a - b)
//
//     console.log(diffArr)
//     let moneyRes = []
//     for (let j = 0; j < m - 2; j++) {
//         moneyRes[j] = diffArr[j + 1] - diffArr[j]
//         moneyRes[j] =  moneyRes[j] > 1 ? moneyRes[j] : moneyRes[j] + 1
//         n -= moneyRes[j]
//     }
//     moneyRes.push(n)
//     return moneyRes
// }
//
// let res = dispatch02(100, 9)
// console.log(res)
// console.log(res.reduce((a,b) => a + b))