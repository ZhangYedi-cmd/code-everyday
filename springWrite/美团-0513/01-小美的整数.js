let meiStr = (num, k) => {
    num = num.split('')
    let temp = false,
        res = []
    for (let i = num.length - 1; i >= 0 ; i--) {
        let s = num[i]
        // 找到比他大的，插一对
        if (!temp && parseInt(s) > k) {
            temp = !temp
            res.unshift(s + k)
        } else {
            // 没有找到比他大的，直接插在前面
            res.unshift(s)
        }
    }
    if (!temp) {
        res.unshift(k)
    }
    return res.join('')
}

console.log(meiStr('76543', 4));
console.log(meiStr('1', 0));
console.log(meiStr('44', 5));
console.log(meiStr('666', 6));