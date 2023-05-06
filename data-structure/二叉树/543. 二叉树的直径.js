/**
 * 对于一个叶子节点来说，他没有左右节点，所以他的链长就是0
 * 对于非叶子节点来说，他的链长就是左子树的最大链长+ 右子树的最大链长
 * 每个非叶子节点返回给父节点的链长 实际上就是这颗子树的层高
 */
var diameterOfBinaryTree = function(root) {
    let res = 0

    let dfs = (node) => {
        if (!node) return -1
        let left = dfs(node?.left) + 1
        let right = dfs(node?.right) + 1
        res = Math.max(left + right, res)
        return Math.max(left, right)
    }

    dfs(root)
    return res
};

