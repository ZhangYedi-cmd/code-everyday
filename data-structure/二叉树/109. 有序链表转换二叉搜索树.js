function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let
    nums = [-10, -3, 0, 5, 9]
// [-10,-3,0,5,9]
let createListNode = (nums) => {
    let head = new ListNode(),
        curr = head,
        i = 0
    while (i < nums.length) {
        curr.val = nums[i++]
        curr.next = new ListNode()
        curr = curr.next
    }
    return head
}

let head = createListNode(nums);

let sortedListToBST = function (head) {
    if (!head) return null
    // 快慢指针 快指针走到末尾，慢指针走到中间
    let f = head,
        s = head,
        ps = null

    while (f && f.next) {
        ps = s
        f = f.next.next
        s = s.next
    }
    let root = new TreeNode(s.val)
    if (ps !== null) {
        ps.next = null
        root.left = sortedListToBST(head)
    }
    // 慢指针往左是左子树， 往右的是右子树， 分别构造即可
    root.right = sortedListToBST(s.next)
    return root
};

console.log(sortedListToBST(head));