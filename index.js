function getAns(s) {
    let success = 'Accept', fail = 'Wrong'
    // 要包含数字和字母，长度至少为2
    if (s.length < 2) return fail
    // 判断首字母是否包含数字
    let numsReg = new RegExp(/^[0-9]*$/),
        bigReg = new RegExp(/[a-z]/),
        smallReg = new RegExp(/[A-Z]/)
    // 大小写字母都没找到  返回false
    if (s[0].search(bigReg) === -1 && s[0].search(smallReg) === -1) {
        return fail
    }
    // 首字母是字母，只需要判断以下部分有没有数字即可
    for (var i = 1; i < s.length; i++)  {
        if (s[i].search(numsReg) === 0) {
            return success
        }
    }
    return fail
}


console.log(getAns('Apple'))
console.log(getAns('Hhhh666'))
console.log(getAns('6pple1'))
