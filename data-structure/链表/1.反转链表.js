class Node {
    val
    next
    constructor(val) {
        this.val = val
    }
}

let head = new Node(0)
let node = head
for (let i = 1; i < 10; i++) {
    node.val = i
    node.next = new Node()
    node = node.next
}

console.log(head)

// 常规迭代解法
function reverseNodeList(head) {
    let node = head,
        prev = null
    while (node) {
        let next = node.next
        node.next = prev
        prev = node
        node = next
    }
    return prev
}

let newNode = reverseNodeList(head)

console.log(newNode)

// 递归解法
function reverseNodeList2(prev, curr) {
    if (!curr) {
        return prev
    }
    let next = curr.next
    curr.next = prev
    prev = curr
    return reverseNodeList2(prev, next)
}

let recursionRes = reverseNodeList2(null, newNode)
console.log(recursionRes)