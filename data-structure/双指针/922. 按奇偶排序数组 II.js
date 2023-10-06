/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let odd = 0,
        even = 1,
        end = nums.length - 1

    while (odd < nums.length && even < nums.length) {
        if (nums[end] % 2 === 0) {
            swap(nums, odd, end)
            odd += 2
        } else {
            swap(nums, even, end)
            even += 2
        }
    }
    return nums
};

var swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
