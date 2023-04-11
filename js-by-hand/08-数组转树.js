let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
    {id: 6, name: '部门6', pid: 0},
]

/**
 * 转换成：
 * {
 *     id: 1,
 *     name : '部门1',
 *     pid: 1,
 *     children: [
 *      { id: 2, name: '部门2', pid: 1 },
 *      { id: 3, name: '部门3', pid: 1 },
 *      ......
 *     ]
 * }
 */
function jsonToTree(arr) {
    if (!Array.isArray(arr)) {
        return arr
    }
    // 存一个map 然后直接找爹就可以了
    const map = {},
        result = []

    arr.forEach(node => {
        const {id} = node
        map[id] = node
    })

    arr.forEach(node => {
        const {pid} = node
        const parent = map[pid]
        if (parent) {
            (parent.children || (parent.children = [])).push(node)
        }
        if (!parent) {
            result.push(node)
        }
    })

    return result
}

let tree = jsonToTree(arr)

console.log(tree)