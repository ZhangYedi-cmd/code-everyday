let search = (arr, target) => {
  let left = 0,
    right = arr.length - 1

  while (left < right) {
    let mid = Math.floor((right - left) / 2) + left

    if (arr[mid] === target) {
      return target
    }
    if (arr[mid] < target) {
      left = mid + 1
    }
    if (arr[mid] > target) {
      right = mid - 1
    }
  }

  return arr[left] === target || arr[right] === target ? target :-1
}

// [1,2,3,4,5,6,7,8,9,10]


console.log(search([1,2,3,4,5,6,7,8,9,10], 1))
