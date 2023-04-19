
var minDepth = function(root) {
    if (!root) return 0

    let q = [],
        node = root,
        res = 1
    q.push(node)

    while (q.length !== 0) {
        let currSize = q.length
        for (let i = 0 ; i < currSize; i++) {
            node = q.shift()
            if (!node.left && !node.right) {
                return res
            }
            if (node.left) {
                q.push(node.left)
            }
            if (node.right) {
                q.push(node.right)
            }
        }
        res++
    }
    return res
};

// 递归解法
let minDepth02 = (root) => {
    if (!root) return 0
    let left = minDepth02(root.left)
    let right = minDepth02(root.right)
    return left && right ? 1 + Math.min(left, right) : 1 + left + right
}