let search = (matrix) => {
    let visited = [] // 参考数组 防止走回头路

    let dfs = (i, j) => {
        if (i >= matrix.length || i < 0 || j >= matrix[0].length || j < 0 || visited[i][j]) {
            return
        }
        visited[i][j] = true
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }

    for (let i = 0; i < matrix.length; i++) {
        visited.push(new Array(matrix[0].length).fill(false))
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '') {  // 满足某一条件时
                dfs(i,j)
                break
            }
        }
    }
}

search([[1,2,3,4],[1,2,3,4],[1,2,3,4],])