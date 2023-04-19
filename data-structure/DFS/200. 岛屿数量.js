let findCircleNum = function(grid) {
    let num = 0

    let dfs = (i ,j) => {
        //边界判断
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return
        }
        //当前置为0后搜
        grid[i][j] = 0
        dfs(i, j + 1)
        dfs(i, j - 1)
        dfs(i + 1, j)
        dfs(i - 1, j)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                num++
                dfs(i, j)
            }
        }
    }

    return num
};


findCircleNum([
    [1, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
])