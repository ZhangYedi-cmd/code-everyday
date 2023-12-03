/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 *
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 * 示例 2：
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 示例 3：
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 */


/**
 * 暴力回溯
 * @param coins
 * @param amount
 * @returns {number|number}
 */
// let coinChange = function(coins, amount) {
//     let res = Infinity
//
//     let dfs = (preSum) => {
//         let coinCount = preSum.length
//         if (preSum[coinCount - 1] > amount) {
//             return
//         }
//         if (preSum[coinCount - 1] === amount) {
//             res = Math.min(res, coinCount)
//             return
//         }
//         for (let i = 0; i < coins.length; i++) {
//             let coin = coins[i]
//             preSum.push(preSum[coinCount - 1] + coin)
//             dfs(preSum)
//             preSum.pop()
//         }
//     }
//     dfs([0])
//
//     return res === Infinity ? 0 : res - 1
// };

// coinChange([5,5,1], 11)


/**
 * 记忆化搜索
 * @param coins
 * @param amount
 */
let coinChange = function(coins, amount) {
    let cache = {}
    let dp = (needMoney) => {
        if (needMoney === 0) return 0
        if (needMoney < 0) return -1
        if (cache[needMoney]) return cache[needMoney]
        let res = Infinity
        coins.map(coin => {
            let temp = dp(needMoney - coin)
            if (temp === -1) return
            res = Math.min(res, temp + 1)
        })
        cache[needMoney] = res
        return res
    }

    let res = dp(amount)
    return res === Infinity ? -1 : res
}