// 4 3 2 5 1
// 4 往左数比4小的数字 0个

// 4 0
// 3 0
// 2 0
// 5 3
// 1 0

// 数组的小和为3
// 暴力 O(n^^2)

/**
 * 对归并排序进行改造，排序的过程中的每一项都会和后面的数进行比较，不重复，不遗漏
 * 例如
 *    [1, 3, 4, 2, 5]
 * 递归树：
 *          1  3  4  2  5
 *      1 3 4        2 5
 *    13  4             2   5
 * 1 3
 */

const mergeSort = (arr, l, r) => {
    if (l === r) return 0
    const midIndex = Math.floor((l + r) / 2)
    return merge(arr, l, midIndex, r) + mergeSort(arr, l, midIndex)
        + mergeSort(arr, midIndex + 1, r)
}

const merge = (arr, l, mid, r) => {
    let help = [],
        i = 0,
        p1 = l,
        p2 = mid + 1,
        res = 0

    while (p1 <= mid && p2 <= r) {
        res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0
        help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
    }

    while (p1 <= mid) {
        help[i++] = arr[p1++]
    }

    while (p2 <= mid) {
        help[i++] = arr[p2++]
    }

    for (let j = 0; j < help.length; j++) {
        arr[l + j] = help[j];
    }

    return res
}

let arr = [2, 1, 3, 4, 6]
let merArr = mergeSort(arr, 0, arr.length - 1)

console.log(merArr)