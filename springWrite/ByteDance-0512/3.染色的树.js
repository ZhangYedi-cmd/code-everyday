let colorTree = (count, treeArr) => {
    // 1. 叶子节点肯定是蓝色
    // 2. 非叶子节点的颜色要根据子节点的数量决定
    let treeMap = {}
    treeArr.forEach(node => {
        let [m , n] = node,
            fNode = m > n ? n : m,  // 取父亲节点
            sNode = fNode ^ m ^ n
        if (!treeMap[fNode]) {
            treeMap[fNode] = []
        }
        treeMap[fNode].push(sNode)
    })

    let res = []
    for (let i = 0; i < count; i++) {
        res.push('')
    }

    let dfs = node => {
        // 叶子节点
        if (!treeMap[node]) {
            res[node] = "B"
            return
        }
        // 拿到儿子节点的数目 & 染色叶子节点
        let sonSum = treeMap[node].length
        // 儿子节点是奇数个
        if (sonSum % 2 === 0) {
            res[node] = "B"
        } else {
            res[node] = "R"
        }
        // 染色子节点
        for (let i = 0; i < sonSum; i++) {
            dfs(treeMap[node][i])
        }
    }

    dfs(1)
    return res.join('')
}

colorTree(6,[
    [1, 2],
    [6, 3],
    [5, 2],
    [2, 4],
    [3, 1],
])