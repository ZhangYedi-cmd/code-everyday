const mexArr = [ 1, 4, 0, 2, 3]

function mex(arr, target) {
    arr = arr.filter(i => i !== target)
    arr = arr.sort((a,b) => a - b)
    if (arr[0] !== 0) {
        return 0
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] > 0 && arr[i] - arr[i - 1] !== 1) {
            return arr[i - 1] + 1
        }
    }
    return arr[arr.length - 1] + 1
}

console.log(mex(mexArr, 1))
console.log(mex(mexArr, 4))
console.log(mex(mexArr, 0))
console.log(mex(mexArr, 2))
console.log(mex(mexArr, 3))



// function getMexValues(nums) {
//     const results = []; // 用于存储结果的数组
//
//     for (let i = 0; i < nums.length; i++) {
//         const set = new Set(nums.slice(0, i).concat(nums.slice(i + 1))); // 构建新集合
//         let mex = 0; // 初始化mex值为0
//
//         while (set.has(mex)) {
//             mex++; // 如果在集合中找到了当前mex值，就继续搜索下一个
//         }
//
//         results[i] = mex; // 将mex值加入结果数组
//     }
//
//     return results;
// }
// console.log(getMexValues([1, 4, 0, 2, 3]));
