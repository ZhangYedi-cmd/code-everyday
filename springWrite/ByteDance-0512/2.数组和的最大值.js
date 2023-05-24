let maxArrSon = (arrSize, arr) => {
    let minValIndex = 0, // 记录最小值索引
        preSum = [0] // 前缀和

    for (let i = 0; i < arr.length; i++) {
        minValIndex = arr[minValIndex] > arr[i] ? i : minValIndex
    }

    arr.splice(minValIndex,1)

    for (let i = 0; i < arr.length; i++) {
        preSum[i + 1] = preSum[i] + arr[i]
    }

    console.log(preSum)

    let start = 0 ,
        end = arrSize - 1,
        res = 0

    while (end < arr.length) {
        console.log(start, end)
        // 用前缀和降低复杂度至O(n)
        let currSum = preSum[end + 1] - preSum[start]
        // 统计子数组和 复杂度上升到O(n**2)
        // for (let i = start; i <= end; i++) {
        //     currSum += arr[i]
        // }
        res = currSum > res ? currSum : res
        ++start
        ++end
    }

    console.log(res)
}

maxArrSon(3, [2,1,3,-1,4])