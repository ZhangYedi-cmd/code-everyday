/**
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 *
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 *
 *
 *
 * 示例 1：
 *
 * 输入：n = 12
 * 输出：3
 * 解释：12 = 4 + 4 + 4
 * 示例 2：
 *
 * 输入：n = 13
 * 输出：2
 * 解释：13 = 4 + 9
 */
var numSquares = function(n) {
    let q = [],
        map = {}
    q.push([n, 0])
    map[n] = true
    while(q.length !== 0) {
        let [num, step] = q.shift()
        for (var i = 1; ; i++) {
            let nextNum = num - i * i
            if (nextNum < 0) break
            if (nextNum === 0) return step + 1
            // 如果被标记了 一定访问过  本质就是层序遍历 找树的最小层数
            if (!map[nextNum]) {
                q.push([nextNum, step + 1])
                map[nextNum] = true
            }
        }
    }
};