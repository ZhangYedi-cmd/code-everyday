/**
 * 数列: a1 , a2 , a3 , a4 ..... an
 *
 * 构造差分数组：a0 , a1 - a0 , a2 - a1, a3 - a2 ...... , an - an+1
 *
 */

function DiffArr(arr) {
    const diff = []
    diff[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        diff[i] = arr[i] - arr[i - 1]
    }
    this.diffArr = diff
}

DiffArr.prototype.computed = function (m, n, num) {
    this.diffArr[m] += num
    this.diffArr[n + 1] -= num
}

DiffArr.prototype.resetArr = function () {
    const arr = []
    arr[0] = this.diffArr[0]
    for (let i = 1; i < this.diffArr.length; i++) {
        arr[i] = arr[i - 1] + this.diffArr[i]
    }
    return arr
}

const a = new DiffArr([1, 3, 2, 5, 6])

console.log(a.diffArr)

a.computed(0, 2, 3)

console.log(a.diffArr)

console.log(a.resetArr());

/**
 * [ 1, 2, -1, 3, 1 ]
 * [ 4, 2, -1, 0, 1 ]
 * [ 4, 6, 5, 5, 6 ]
 */
