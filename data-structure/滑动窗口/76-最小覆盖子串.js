// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
//
// 注意：
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

/**
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 */

let minWindow = function(s, t) {
    let window = {},
        needs = {},
        valid = 0,
        len = Infinity,
        start = 0

    for (let i = 0 ; i < t.length; i++) {
        let curr = t[i]
        needs[curr] = needs[curr] ? needs[curr] + 1 : 1
    }

    for (let l = 0, r = 0; r < s.length; r++) {
        let curr = s[r]
        if (needs[curr]) {
            window[curr] = window[curr] ? window[curr] + 1 : 1
            valid += window[curr] === needs[curr] ? 1 : 0
        }
        // 长度满足 左指针往右滑动
        while (Object.keys(needs).length === valid) {
            if (r - l < len) {
                len = r - l
                start = l
            }
            // 收缩的值是不是needs中的？
            let d = s[l]
            l++
            valid -= needs[d] && window[d] === needs[d] ? 1 : 0
            window[d] -= needs[d] ? 1 : 0
        }
    }

    return len === Infinity ? "" : s.slice(start, len + start + 1)
};