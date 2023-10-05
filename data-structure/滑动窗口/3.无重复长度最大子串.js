let lengthOfLongestSubstring = function(s) {
    let window = {},
        maxLen = -Infinity

    for(let l = 0, r = 0; r < s.length; r++) {
        let rVal = s[r]
        // 进入窗口
        if (!window[rVal]) {
            window[rVal] = 1
        } else {
            window[rVal] += 1
        }
        // 左指针往右滑动，滑到没有重复元素为止
        while(window[rVal] && window[rVal] > 1) {
            window[rVal] -= s[l++] === rVal ? 1 : 0
        }
        maxLen = r - l + 1 > maxLen ? r - l + 1 : maxLen
    }

    return maxLen
};

let res = lengthOfLongestSubstring('abcabcbb')

console.log(res)