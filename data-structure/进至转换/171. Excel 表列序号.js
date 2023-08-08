var titleToNumber = function(columnTitle) {
    let res = 0
    for (let i = 0; i < columnTitle.length; i++) {
        let a = 26 ** (columnTitle.length - i - 1),
            b = (columnTitle[i].charCodeAt(0) + 1) - 'A'.charCodeAt(0)
        res += a * b
    }
    return res
};


titleToNumber("AB")

