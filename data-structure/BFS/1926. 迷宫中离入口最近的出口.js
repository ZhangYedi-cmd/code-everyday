/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    let q = [],
        postion = entrance,
        visited = [],
        step = 0

    for (let m = 0; m < maze.length; m++) {
        visited[m] = []
        for (let n = 0; n < maze[0].length; n++) {
            visited[m][n] = false
        }
    }

    q.push(postion)

    while (q.length > 0) {
        let currSize = q.length
        for (let i = 0; i < currSize; i++) {
            postion = q.shift() // 出队
            let [x, y] = postion
            // 出界判断 or 走过了
            if (x >= maze.length || y >= maze[0].length || x < 0 || y < 0 || maze[x][y] === '+' || visited[x][y]) {
                console.log('出界了！')
                continue
            }
            // 出口 && 不站在入口
            if (maze[x][y] === '.' && (x === 0 || y === 0) && step !== 0) {
                return step
            }
            // 向四周扩散
            q = q.concat([[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]])
        }
        step += 1
    }
    return step
};

let step = nearestExit(
    [[".","+"]], [0, 0])
console.log(step)