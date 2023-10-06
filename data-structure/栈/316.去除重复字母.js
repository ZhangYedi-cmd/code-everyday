/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let map = {}

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]] += 1
        } else {
            map[s[i]] = 1
        }
    }

    let stack = []
    for (let j = 0; j < s.length; j++) {
        // 入栈后减1
        map[s[j]] -= 1

        if (stack.indexOf(s[j]) !== -1) {
            continue
        }

        while (stack.length !== 0 && stack[stack.length - 1].charAt(0) > s[j].charAt(0) && map[stack[stack.length - 1]]) {
            map[stack[stack.length - 1]] -= 1
            stack.pop()
        }

        stack.push(s[j])
    }

    return stack.join('')
};


removeDuplicateLetters('cbacdcbc')