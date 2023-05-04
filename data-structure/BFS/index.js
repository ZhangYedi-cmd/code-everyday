/**
 * BFS 核心套路
 * BFS 广度优先搜索，主要处理的是最短路径类问题，不过空间复杂度很差
 * 四个字来回答：齐头并进，例如求二叉树的最小深度，
 */

// bfs模版
let bfs = () => {
    let q = [],
        node = {
            val : '5',
            left : {
                // ...
            },
            right : {
                // ...
            }
        }
    q.push(node)
    while (q.length > 0 ){
        const currSize = q.length
        for (let i = 0; i < currSize; i++) {
            node = q.shift() // 出队
            // 判断是否满足条件
            // if () xxxxx
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        // 遍历完一层可以做一些操作。。。
    }
}

/**
 * 双向BFS，从起点和终点同时开始搜索，直到两个队列产生交集结束
 * 前提是，你必须要直到终点在哪里
 */