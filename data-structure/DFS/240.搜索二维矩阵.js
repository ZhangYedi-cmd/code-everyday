/**
 * 二分查找
 */
const searchMatrix = function (matrix, target) {
    for (const row of matrix) {
        const index = search(row, target);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

const search = (nums, target) => {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const num = nums[mid];
        if (num === target) {
            return mid;
        }
        if (num > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}


/**
 * 无脑递归：直接超时
 */
let searchMatrix02 = function (matrix, target) {
    let dfs = (i, j) => {
        if (i >= matrix.length || j >= matrix[0].length) {
            return false
        }
        if (matrix[i][j] === target) {
            return true
        }
        if (matrix[i][j] < target) {
            return dfs(i, j + 1) || dfs(i + 1, j)
        }
        if (matrix[i][j] === -1) {
            return false
        }
        matrix[i][j] = -1
        return false
    }
    return dfs(0, 0)
};

/**
 * 看成一个BST（二叉搜索树）
 */
let searchMatrix03 = function (matrix, target) {
    let check = (x, y) => {
        return  x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length;
    }

    let i = 0, j = matrix[0].length - 1

    while (check(i, j) && matrix[i][j] !== target) {
        if (matrix[i][j] > target) {
            j -= 1
        } else {
            i += 1
        }
    }

    return check(i, j) && target === matrix[i][j]
};


// let res = searchMatrix03(
//     [
//         [1, 6, 10, 13, 14, 16, 21],
//         [3, 10, 12, 18, 22, 27, 29],
//         [3, 15, 19, 20, 23, 29, 34],
//         [8, 15, 19, 25, 27, 29, 39],
//         [12, 17, 24, 25, 28, 29, 41],
//         [16, 22, 27, 31, 31, 33, 44],
//         [20, 26, 28, 35, 39, 41, 45],
//         [25, 31, 34, 39, 44, 45, 47]
//     ]
//     , 12)


let res = searchMatrix03(
    [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ]
    , 5)

console.log(res)
