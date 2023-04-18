/**
 * 暴力二维矩阵模拟
 * O(n^^2)
 */
let convert = function(s, numRows) {
    if (numRows <= 2)  {
        return s
    }
    let m = []
    // 二维矩阵模拟
    for (let i = 0 ; i < numRows; i++) {
        m.push([])
        for (let j = 0; j < s.length / numRows; j++) {
            m[i][j] = 0
        }
    }
    let row = 0 , col = 0 , p = 0
    while (p < s.length) {
        // 往下走到头
        while (row < numRows - 1) {
            m[row++][col] = s[p++]
        }
        while (row !== 0) {
            m[row--][col++] = s[p++]
        }
    }
    return m.map(arr => arr.filter(letter => letter && letter!==0).reduce((prev, curr) => prev + curr)).join('')
}

let convert02 = (s, numRows) => {
    if (numRows < 2) {
        return s
    }
    let m = []
    for (let i = 0; i < numRows; i++) {
        m.push('')
    }

    let i = 0 , flag = -1
    for (let j = 0; j < s.length; j++) {
        m[i] += s[j]
        // 走到头了
        if (i === 0 || i === numRows - 1) {
            flag = -flag
        }
        i += flag
    }
    return m.join('')
}


let res = convert02("PAYPALISHIRING", 3)
console.log(res)
