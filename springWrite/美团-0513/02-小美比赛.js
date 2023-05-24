
/**
 * 不同颜色 能力大获胜
 * 相同颜色，能力小获胜
 * 求每个人能赢多少场比赛
 *
 * 输入示例：
 * 3  （总共3个人）
 * 0 0 1 （0和1代表颜色不一样）
 */


/**
 * 暴力
 */
let meiCom = (mem) => {
    let res = new Array(mem.length).fill(0)

    for (let i = 0; i < mem.length; i++) {
        let ability1 = i,
            color1 = mem[i]
        for (let j = i + 1; j < mem.length; j++) {
            let ability2 = j,
                color2 = mem[j]
            if (color1 === color2) {
                res[i] += ability1 < ability2 ? 1 : 0
                res[j] += ability1 < ability2 ? 0 : 1
            }
            if (color1 !== color2) {
                res[i] += ability1 < ability2 ? 0 : 1
                res[j] += ability1 < ability2 ? 1 : 0
            }
        }
    }

    return res
}


console.log(meiCom([1, 0, 1, 0]));
