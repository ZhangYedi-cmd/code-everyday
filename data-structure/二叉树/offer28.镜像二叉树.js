function func(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return left.val === right.val && func(left.right, right.left) && func(left.left, right.right);
}

/**
 * 左左 右右 / 左右 右左
 * @param root
 * @returns {boolean|*}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    return func(root.left, root.right);
};