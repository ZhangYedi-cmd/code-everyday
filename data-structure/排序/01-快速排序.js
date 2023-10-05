/**
 * 快速排序
 * 时间复杂度：nlogn
 */
const quickSort = (arr) => {
  const midIndex = parseInt(arr.length / 2),
    midVal = arr[midIndex],
    left = [],
    right = []

  if (!midVal) return []

  arr.forEach(item => {
    if (item > midVal) {
      right.push(item)
    }
    if (item < midVal) {
      left.push(item)
    }
  })
  return quickSort(left).concat(midVal,quickSort(right))
}

// const arr = quickSort([3,4,7,5,6])
// console.log(arr)



let quickSort02 = (arr, low, height) => {
  if (low < height) {
    let pivotIndex = partition(arr, low, height)
    quickSort02(arr, low, pivotIndex - 1)
    quickSort02(arr, pivotIndex + 1, height)
  }
}

let partition = (arr, low, height) => {
  let pivot = arr[height],
      i = low - 1

  for (let j = low; j < height; j++) {
    if (arr[j] < pivot) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  [arr[i + 1], arr[height]] = [arr[height], arr[i + 1]]
  return i + 1
}

let arr = [5,7,1,2,6,8]
quickSort02(arr, 0, arr.length - 1)

console.log(arr)