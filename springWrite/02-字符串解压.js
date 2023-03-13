// /**
//  * 问题描述
//  *
//  *    给出一个仅包含小写字母和‘-’的字符串，按如下规则输出解压后的字符串。
//  *
//  * \1. 如果‘-’连接了多个相同的字符，则只输出第一个字符，‘-’和之后的相同字符不输出。例如‘a-a-a’替换为‘a’，‘a-aa-a’替换为‘aa’。
//  *
//  * \2. 如果‘-’连接了两个不同的字符，则将连接符及其前后的字符替换为递增或递减的字符串。例如‘a-c’替换为‘abc’，‘g-c’替换为‘gfedc’，‘a-e-c’替换为‘abcdedc’。
//  *
//  * \3. 其他字符原样输出。
//  *
//  * 输入描述
//  *
//  *    仅一行，表示输入的字符串，字符串长度不超过  ，保证开头和结尾是小写字母，保证不出现两个相连的‘-’。
//  *
//  * 输出描述
//  *
//  *    仅一行，代表解压后的字符串
//  *
//  * 输入样例
//  *
//  *    a-fzs-o-o-q
//  *
//  * 输出样例
//  *
//  *    abcdefzsrqpopq
//  *    abcdefzsrqpop
//  *
//  */

const strSet = [...new Set( 'a-fzs-o-o-q'.split('-'))]
const newArr = []
// a fzs o q
for (let i = 1; i < strSet.length; i++) {
    /**
     * curr: fzs  f > a => abcde
     * curr: 0    0 < s => opqr
     */
    if (strSet[i - 1] !== strSet[i]) {
        let prevStr = strSet[i - 1]
        if (strSet[i].charCodeAt(0) > strSet[i - 1].charCodeAt(strSet[i - 1].length - 1)) {
            for (let j = strSet[i - 1].charCodeAt(strSet[i - 1].length - 1) + 1; j < strSet[i].charCodeAt(0); j++) {
                prevStr += String.fromCharCode(j)
            }
        }
        //  s > o 前面的大 递减加
        if (strSet[i].charCodeAt(0) < strSet[i - 1].charCodeAt(strSet[i - 1].length - 1)) {
            for (let j = strSet[i - 1].charCodeAt(strSet[i - 1].length - 1) - 1; j > strSet[i].charCodeAt(0); j--) {
                prevStr += String.fromCharCode(j)
            }
        }
        newArr[i] = prevStr
    }
}

console.log(newArr.join(''))

