/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    if (x === 0) return x
    let s = x.toString().split('').reverse(),
        p = s.length - 1
    while (s[p] === '-' || s[p] === '0') {
        p--
    }

    s = parseInt(s.slice(0 , p + 1).join(''))
    s = x >= 0 ? s : -s

    return s > 2147483647 || s < -2147483648 ? 0 : s;
};