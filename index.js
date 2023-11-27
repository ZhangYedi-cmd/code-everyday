/**
 * 实现一个sleep 函数
 */
// let sleep = async (timer) => {
//     let promiseFunc = (i) => new Promise((resolve) => setTimeout(() => {
//         resolve(i)
//         console.log(i)
//     },i * 1000))
//
//     for (let i = 0; i < timer; i++) {
//         promiseFunc(i)
//     }
// }
//
// sleep(5)


/**
 * 冒泡排序
 */
// let boolingSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length - i; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//
//     return arr
// }
//
// console.log(boolingSort([2,1,5,4,6]))


/**
 * 归并排序
 */
// let mergeSort = (arr,l, r) => {
//     if (l === r) return
//     let midIndex = parseInt((l + r)/ 2)
//     // 先保证左右两侧有序
//     mergeSort(arr,l, midIndex)
//     mergeSort(arr, midIndex + 1, r)
//     merge(arr, l, midIndex, r)
// }
//
// let merge = (arr, l, m, r) => {
//     let help = [],
//         i = 0,
//         p1 = l,
//         p2 = m + 1
//
//     while (p1 <= m && p2 <= r) {
//         help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
//     }
//     while (p1 <= m) {
//         help[i++] = arr[p1++]
//     }
//     while (p2 <= r) {
//         help[i++] = arr[p2++]
//     }
//     for (let j = 0; j < help.length; j++) {
//         arr[l + j] = help[j]
//     }
//     console.log(arr)
// }
//
// let arr = [2,1,5,4,0,7]
// mergeSort(arr, 0, arr.length - 1)


/**
 * 快速排序
 */
// let quickSort = (arr, low, high) => {
//     if (low < high) {
//         let pivotIndex = partition(arr, low, high)
//         quickSort(arr, low, pivotIndex - 1)
//         quickSort(arr, pivotIndex + 1, high)
//     }
// }
//
// let partition = (arr, low, high) => {
//     let pivotVal = arr[high],
//         i = low - 1
//
//     for (let j = low; j < high; j++) {
//         if (arr[j] < pivotVal) {
//             i++
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//
//     [arr[high], arr[i + 1]] = [arr[i + 1], arr[high]]
//
//     return i + 1
// }
// let arr = [2,1,3,6,4]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)
//


/**
 * LRU Cache
 */

let LRUCache = function (limit) {
    this.map = new Map()
    this.limit = limit
}

LRUCache.prototype.put = function (key,val) {
    let {map, limit} = this
    if (map.has(key)) {
        map.delete(key)
    }
    if (map.size >= limit) {
        map.delete(map.keys().next().value)
    }
    map.set(key, val)
}
let lru = new LRUCache(2)

lru.put('1', '1')
lru.put('2', '2')
lru.put('3', '3')
lru.put('4', '4')
lru.put('5', '5')

console.log(lru.map)