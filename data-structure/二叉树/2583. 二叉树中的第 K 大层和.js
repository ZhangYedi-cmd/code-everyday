/**
 * 给你一棵二叉树的根节点 root 和一个正整数 k 。
 *
 * 树中的 层和 是指 同一层 上节点值的总和。
 *
 * 返回树中第 k 大的层和（不一定不同）。如果树少于 k 层，则返回 -1 。
 *
 * 注意，如果两个节点与根节点的距离相同，则认为它们在同一层。
 *
 * 输入：root = [5,8,9,2,1,3,7,4,6], k = 2
 * 输出：13
 * 解释：树中每一层的层和分别是：
 * - Level 1: 5
 * - Level 2: 8 + 9 = 17
 * - Level 3: 2 + 1 + 3 + 7 = 13
 * - Level 4: 4 + 6 = 10
 * 第 2 大的层和等于 13 。
 *
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    // 层序遍历秒掉
    let q = [root] , res = []
    while (q.length > 0) {
        const currSize = q.length
        let currSum = 0
        for (let i = 0 ; i < currSize; i ++) {
            const curr = q.shift()
            currSum += curr.val
            if (curr.left) {
                q.push(curr.left)
            }
            if (curr.right) {
                q.push(curr.right)
            }
        }
        res.push(currSum)
    }
    res = res.sort((a, b) => a - b)
    return res[res.length - k] ? res[res.length - k] : -1
};
