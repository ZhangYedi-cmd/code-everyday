/**
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 *
 * 示例 1：
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 *
 * 示例 2：
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 */

/**
 * 双指针
 * @param s1
 * @param s2
 */
// var checkInclusion = function(s1, s2) {
//     let left = 0 , right = s1.length,
//         need = {}
//
//     for (let i = 0; i < s1.length; i++) {
//         need[s1[i]] = need[s1[i]] ? need[s1[i]] + 1 : 1
//     }
//     let res = false
//     while (right <= s2.length) {
//         // 判断当前子串 是否是s1的排列
//         let curr = s2.slice(left, right)
//         console.log(curr)
//         let window = {}
//         var valid = 0
//         for (let j = 0 ; j < curr.length; j++) {
//             window[curr[j]] = window[curr[j]] ? window[curr[j]] + 1 : 1
//             if (window[curr[j]] === need[curr[j]]) {
//                 valid++
//             }
//         }
//         if (valid === Object.keys(need).length) {
//             res = true
//         }
//         console.log(window, need)
//         console.log(valid)
//         right++
//         left++
//     }
//     console.log(res)
// };
//
// checkInclusion("abcdxabcde", "abcdxabcde")
//
// const obj = {a: 1, b:2}
// console.log(obj.length)


var checkInclusion = function (s1, s2) {
    let left = 0, right = 0,
        need = {}, window = {}
    for (let i = 0; i < s1.length; i++) {
        need[s1[i]] = need[s1[i]] ? need[s1[i]] + 1 : 1
    }
    let valid = 0
    while (right < s2.length) {
        let a = s2[right]
        right++
        if (need[a]) {
            window[a] = window[a] ? window[a] + 1 : 1
            if (window[a] === need[a]) {
                valid++
            }
        }
        // 长度满足
        while (right - left === s1.length) {
            if (valid === Object.keys(need).length) {
                return true
            }
            // 不满足条件 出窗口
            let b = s2[left]
            if (need[b]) {
                if (need[b] === window[b]) {
                    valid--
                }
                window[b]--
            }
        }
    }
    return false
};

console.log(checkInclusion("abcdxabcde", "abcdxabcde"));
