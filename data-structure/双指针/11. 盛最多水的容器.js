/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = 0,
        l = 0,
        r = height.length - 1

    while (l < r) {
        let currRange = (height[l] <= height[r] ? height[l++] : height[r--]) * ((r - l) + 1)
        ans = Math.max(ans, currRange)
    }

    return ans
};

let res = maxArea([1,1])

console.log(res)