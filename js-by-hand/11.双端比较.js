class Node {
    constructor(val, key) {
        this.val = val
        this.key = key
    }
}

let oldNodes = [],
    newNodes = []

for (let i = 0; i < 5; i++) {
    oldNodes.push(new Node(i, i))
    newNodes.push(new Node(4 - i, 4 - i))
}

console.log(oldNodes)
console.log(newNodes)

/**
 * 双端比较diff
 */
let patchNode = (oldNodes, newNodes) => {
    // 新头旧头 新尾旧尾
    let oldHeadIndex = 0,
        newHeadIndex = 0,
        oldEndIndex = oldNodes.length - 1,
        newEndIndex = oldNodes.length - 1

    let oldHeadNode = oldNodes[oldHeadIndex],
        newHeadNode = newNodes[newHeadIndex],
        oldEndNode = oldNodes[oldEndIndex],
        newEndNode = newNodes[newEndIndex]

    // 头头 尾尾 头尾 尾头 分别比较key
    if (oldHeadNode.key === newHeadNode.key) {

    } else if (oldEndNode.key === newEndNode.key) {

    } else if (oldHeadNode.key === newEndNode.key) {

    } else if (oldEndNode.key === newHeadNode.key) {

    } else { // 都没有找到
        let indexMap = makeIndexMapByKey(oldNodes),
            moveIndex = indexMap[newHeadNode?.key] // 新头在老数组中的索引值

        if (moveIndex) {
            //
        } else {

        }
    }
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
