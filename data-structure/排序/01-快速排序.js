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

const arr = quickSort([3,4,7,5,6])
console.log(arr)
