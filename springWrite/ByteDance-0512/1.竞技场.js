/**
 * mar：矩阵
 * m: 矩阵长度
 * n: 矩阵宽度
 * UDLR 表示上下左右的传送带，强制传送
 * . 表示空地
 * O 表示出口
 * 问： 站在哪些点上永远出不去，这些点有多少个？
 */
// 统计能出去的点


let func = mar => {
    let res = 0,
        visited = []

    for (let i = 0; i < mar.length; i++) {
        visited.push(new Array(mar[0].length).fill(false))
    }

    let search = (mar, visited, i, j) => {
        console.log(i, j)
        res += 1
        // 四个方向
        let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]],
            dirsMap = {
                "L": [0, -1],
                "R": [0, 1],
                "U": [-1, 0],
                "D": [1, 0],
            }
        // 先往四个方向扩散
        for (let k = 0; k < dirs.length; k++) {
            let dir = dirs[k]
            let ni = i + dir[0]
            let nj = j + dir[1]
            // 是否越界
            if (ni >= mar.length || ni < 0 || nj >= mar[0].length || nj < 0 || visited[ni][nj]) continue
            // 是否是强制滑动
            if (dirsMap[mar[ni][nj]]) {
                let [x, y] = dirsMap[mar[ni][nj]]
                // 强制滑动后，能否到达原来的点
                if (ni + x === i && nj + y === j) {
                    visited[ni][nj] = true
                    search(mar, visited, ni, nj)
                }
            } else {
                visited[ni][nj] = true
                search(mar,visited,ni,nj)
            }
        }
    }

    for (let i = 0; i < mar.length; i++) {
        for (let j = 0; j < mar[0].length; j++) {
            if (mar[i][j] === 'O') {
                visited[i][j] = true
                search(mar, visited, i, j, res)
                break
            }
        }
    }

    return res
}

// let res = func(
//     '....\n' +
//     '.RRD\n' +
//     '.U.D\n' +
//     '.ULL\n' +
//     '...O')
//
let res = func([
    ['R','R', 'D'],
    ['.','U', 'L'],
    ['.','R', 'O'],
])

console.log(--res)



