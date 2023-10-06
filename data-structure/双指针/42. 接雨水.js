// 1.0 trap 辅助空间解法
// timer: O(N) space: O(N)

let trap = (height) => {
    let lMax = [],
        rMax = []

    lMax[0] = height[0]
    for (let i = 1; i < height.length; i++) {
        lMax[i] = Math.max(lMax[i - 1], height[i])
    }

    rMax[height.length - 1] = height[height.length - 1]
    for (let j = height.length - 2; j >= 0; j--) {
        rMax[j] = Math.max(rMax[j + 1], height[j])
    }
    let ans = 0
    for (let m = 1; m < height.length - 1; m++) {
        ans += Math.max(Math.min(lMax[m - 1], rMax[m + 1]) - height[m], 0)
    }
    return ans
}


// trap([0,1,0,2,1,0,1,3,2,1,2,1])

// trap2: 双指针解法，降低空间复杂度为O(1)

let trap02 = (height) => {
    let n = height.length,
        lMax = height[0],
        l = 1,
        rMax = height[n - 1],
        r = n - 2,
        ans = 0

    while (l <= r) {
        if (lMax <= rMax) {
            ans += Math.max(lMax - height[l], 0)
            lMax = Math.max(lMax, height[l++])
        } else {
            ans += Math.max(rMax - height[r], 0)
            rMax = Math.max(rMax, height[r--])
        }
    }

    return ans
}

// trap02([0,1,0,2,1,0,1,3,2,1,2,1])
