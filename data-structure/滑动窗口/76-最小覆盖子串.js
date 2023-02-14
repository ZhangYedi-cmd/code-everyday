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

const fn = (s, t) => {
    let left = 0, right = 0, need = {}, window = {}
    // 统计needs
    for (let i = 0; i < t.length; i++) {
        need[t[i]] = need[t[i]] ? need[t[i]]++ : 1
    }
    let valid = 0, start = 0, len = Infinity
    while (right < s.length) {
        let c = s[right]
        right++;
        if (need[c]) {
            window[c]++
            if (window[c] === need[c]) {
                valid++
            }
        }
        while (valid === Object.keys(need).length) {
            if (right - left < len) {
                start = left
                len = right - left
            }
            let d = s[left]
            left++
            if (need[d]) {
                if (window[d] === need[d]) {
                    valid--
                }
                window[d]--
            }
        }
    }
    return len === Infinity ? "" : t.slice(start, len)
}

fn('ADOBECODEBANC', "ABC")


//
// string minWindow(string s, string t) {
//     unordered_map<char, int> need, window;
//     for (char c : t) need[c]++;
//     int left = 0, right = 0;
//     int valid = 0;
//     // 记录最小覆盖子串的起始索引及长度
//     int start = 0, len = INT_MAX;
//     while (right < s.size()) {
//         // c 是将移入窗口的字符
//         char c = s[right];
//         // 扩大窗口
//         right++;
//         // 进行窗口内数据的一系列更新
//         if (need.count(c)) {
//             window[c]++;
//             if (window[c] == need[c])
//                 valid++;
//         }
//
//         // 判断左侧窗口是否要收缩
//         while (valid == need.size()) {
//             // 在这里更新最小覆盖子串
//             if (right - left < len) {
//                 start = left;
//                 len = right - left;
//             }
//             // d 是将移出窗口的字符
//             char d = s[left];
//             // 缩小窗口
//             left++;
//             // 进行窗口内数据的一系列更新
//             if (need.count(d)) {
//                 if (window[d] == need[d])
//                     valid--;
//                 window[d]--;
//             }
//         }
//     }
//     // 返回最小覆盖子串
//     return len == INT_MAX ?
//         "" : s.substr(start, len);
// }
