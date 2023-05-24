let closedIsland = function(grid) {
    let res = 0
    // 先把边界所有相连的土地变成水
    for (let i = 0; i < grid.length; i++) {
        dfs(grid, i, 0)
        console.log(i, grid[0].length - 1)
        dfs(grid, i, grid[0].length - 1)
    }
    for (let j = 0; j < grid[0].length; j++) {
        dfs(grid,0, j)
        dfs(grid,grid.length - 1, j)
    }
    for (let m = 0; m < grid.length; m++) {
        for (let n = 0; n < grid[0].length; n++) {
            if (grid[m][n] === 0) {
                res += 1
                dfs(grid, m, n)
            }
        }
    }

    return res
};

let dfs = (grid, i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 1) return
    grid[i][j] = 1
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
}


closedIsland([[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]])