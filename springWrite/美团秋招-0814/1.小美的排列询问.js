let isNeighbor = (nums, x, y) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === x && nums[i - 1] === y) return true
    if (nums[i] === y && nums[i - 1] === x) return true
  }

  return false
}


console.log(isNeighbor([1,4,2,3], 1,3));
