class Node {
    constructor(val, key, child) {
        this.val = val
        this.key = key
        this.child = child || []
    }
}

let oldNodes = [],
    newNodes = []

for (let i = 0; i < 5; i++) {
    oldNodes.push(new Node(i, i))
    newNodes.push(new Node(4 - i, 4 - i))
}

/**
 * 双端比较diff
 */
let updateChild = (oldNodes, newNodes) => {
    // 新头旧头 新尾旧尾
    let oldHeadIndex = 0,
        newHeadIndex = 0,
        oldEndIndex = oldNodes.length - 1,
        newEndIndex = oldNodes.length - 1

    let oldHeadNode = oldNodes[oldHeadIndex],
        newHeadNode = newNodes[newHeadIndex],
        oldEndNode = oldNodes[oldEndIndex],
        newEndNode = newNodes[newEndIndex]

    /**
     * 头插
     * @param currNodeIndex 当前要移动的节点
     * @param targetNodeIndex 目标节点
     */
    let insertBefore = (currNodeIndex, targetNodeIndex) => {
        let insertNode = oldNodes[currNodeIndex] // 要插入的元素
        let beforeArr = oldNodes.slice(0, targetNodeIndex),
            afterArr = oldNodes.filter((_,i) => i !== currNodeIndex).slice(targetNodeIndex)
        beforeArr.push(insertNode)
        oldNodes = beforeArr.concat(afterArr)
    }

    /**
     * 尾插
     * @param currNodeIndex
     * @param targetNodeIndex
     */
    let insertAfter = (currNodeIndex, targetNodeIndex) => {
        let insertNode = oldNodes[currNodeIndex] // 要插入的元素
        let beforeArr = oldNodes.filter((_,i) => i !== currNodeIndex).slice(0, targetNodeIndex -1),
            afterArr = oldNodes.slice(targetNodeIndex)
        afterArr.push(insertNode)
        oldNodes = beforeArr.concat(afterArr)
    }

    while (oldHeadIndex <= oldEndIndex && newHeadIndex <= newEndIndex) {
        // 头头 尾尾 头尾 尾头 分别比较key
        if (oldHeadNode.key === newHeadNode.key) {
            // 更新两个节点
            // patchNode(oldHeadNode, newHeadNode)
            oldHeadNode = oldNodes[++oldHeadIndex]
            newHeadNode = newNodes[++newHeadIndex]
        } else if (oldEndNode.key === newEndNode.key) {
            // patchNode(oldEndNode, newEndNode)
            oldEndNode = oldNodes[--oldEndIndex]
            newEndNode = newNodes[--newEndIndex]
        } else if (oldHeadNode.key === newEndNode.key) {
            // patchNode(oldHeadNode, newEndNode)
            // 旧头和新尾一样
            insertAfter(oldHeadIndex, oldEndIndex)
            oldHeadNode = oldNodes[++oldHeadIndex]
            newEndNode = newNodes[--newEndIndex]
        } else if (oldEndNode.key === newHeadNode.key) {
            // patchNode(oldEndNode, newHeadNode)
            // 旧尾和新头一样
            insertBefore(oldHeadIndex, oldEndIndex)
            oldEndNode = oldNodes[--oldEndIndex]
            newHeadNode = newNodes[++newHeadIndex]
        } else { // 都没有找到
            let indexMap = makeIndexMapByKey(oldNodes),
                moveIndex = indexMap[newHeadNode?.key] // 新头在老数组中的索引值
            if (moveIndex) {
                // 头插
                let moveNode = indexMap[moveIndex]
                insertBefore(moveIndex, oldHeadIndex)
                indexMap[moveIndex] = undefined // 表明这个元素已经被移动走了
                // patchNode(moveNode, newHeadNode))
            } else {
                // let newInsertNode = createNode(newHeadNode)
                // insertBefore(newInsertNode, oldHeadIndex)
            }
        }
    }
    console.log(oldNodes)
}

/**
 * 根据key值构造一个map
 * 作用是双端比较之后，还不能找到key相同的node时
 * 根据新元素的key值返回新元素在老的子数组中的索引值
 */
let makeIndexMapByKey = (oldNodes) => {
    let map = {}
    oldNodes.forEach((node, index) => map[node?.key] = index)
    return map
}

/**
 * 更新新老节点
 * @param oldNode
 * @param newNode
 */
let patchNode = (oldNode, newNode) => {
    if (oldNode.val !== newNode.val) {
        oldNode.val = newNode.val
    }
}

updateChild( [
    new Node('a', 0),
    new Node('b', 1),
    new Node('c', 2),
    new Node('d', 3),
], [
    new Node('a', 0),
    new Node('c', 2),
    new Node('b', 1),
    new Node('d', 3),
] )