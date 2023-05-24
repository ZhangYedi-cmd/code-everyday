let judgeTree = (oldTree, newTree) => {
    let start = oldTree.length
    for (let i = start; i < newTree.length; i++){
        // 判断一下父亲节点去年长出来了没有; 没长出来直接返回false
        if (!oldTree[newTree[i] - 1]) {
            return false
        }
    }
    return true
}

console.log(judgeTree([1, 1, 1, 2], [1, 1, 2, 2, 4]));