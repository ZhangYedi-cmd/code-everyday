/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 */


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length < 3) return 0;
    // 双指针
    let sum = 0
    let left = 0, right = height.length - 1
    let leftMax = 0, rightMax = 0
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left])
            sum += leftMax - height[left]
            left++
        } else {
            rightMax = Math.max(rightMax, height[right])
            sum += rightMax - height[right]
            right--
        }
    }
    return sum
}


/**
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function (height) {
    var stack = [];
    var res = 0;
    for (var i = 0; i < height.length; i++) {
        // if 当前元素大于栈顶元素
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            // 找top左边比当前元素小的元素
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            res += currWidth * currHeight;
        }
        stack.push(i);
    }
    return res;
};
