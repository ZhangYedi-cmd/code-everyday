/**
 * 1100001 => 1,100,001
 */
const sliceNum = (target) => {
    let num = target.toString(),
        res = [],
        p = num.length - 1

    if (num.length < 4) {
        return num
    }

    while (p >= 0 && p >= 2) {
        let curr = ''
        for (let i = p; i > p - 3 ; i--) {
            curr = num[i] + curr
        }
        p -= 3
        res.unshift(curr)
    }

    if (p > -1) {
        res.unshift(num.slice(0, p + 1))
    }

    return res.join(',')
}

let res = sliceNum(12345)
console.log(res)