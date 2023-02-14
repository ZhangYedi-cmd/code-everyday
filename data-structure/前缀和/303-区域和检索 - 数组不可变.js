/**
 * 数列的前n项: Sn = a1 + a2 + a3 + a4 + .... + an
 * Sn - Sn-1 = an
 * 检索区间[m,n]上的和：Sn - Sn-1
 * 可以构造前缀和数组：[S1, S2, S3, S4 ,......Sn]
 * 时间复杂度O(1)
 */

const arr = [1, 2, 3, 4, 5]
const fn = (m, n) => {
    const preSum = []
    preSum[0] = 0
    arr.map((num,index) => {
        preSum[index + 1] = preSum[index] + num
    })
    return preSum[n + 1] - preSum[m]
}

const sum = fn(1,3)
console.log(sum)
