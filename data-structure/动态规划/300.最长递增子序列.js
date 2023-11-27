/**
 * 最长递增子序列
 */
let lengthOfLIS = function(nums) {
    let dp = []

    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
        // 扫描之前比当前数字小的dp结果
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    let res = 0

    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i])
    }

    return res
};

console.log(lengthOfLIS([0,1,0,3,2,3]));