let singleNumbers = function(nums) {
    let eor = 0
    for (let i = 0; i < nums.length; i++) {
        eor ^= nums[i]
    }
    // a ^ b != 0
    // a 和 b 上必然有一位是不同的
    // 拿到最右侧的1
    let rightOne = eor & (~eor + 1)
    let onlyOne = 0
    for (let j = 0; j < nums.length; j++) {
        if ((rightOne & nums[j]) === 0) {
            onlyOne ^= nums[j]
        }
    }
    return [onlyOne, onlyOne ^ eor]
};