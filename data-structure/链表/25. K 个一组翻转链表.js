/**
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 */

function ListNode(val, next) {
    this.val = val ? val : -1
    this.next = next ? next : null
}

let tail = new ListNode(4)
let head = new ListNode(1, new ListNode(2, tail))

let reverse = (head, tail) => {
    let prev = null,
        node = head

    while (prev !== tail) {
        let nxt = node.next
        node.next = prev
        prev = node
        node = nxt
    }

    return [tail, head]
}

// console.log(reverse(head, tail))


let reverseKGroup = function (head, k) {
    let dummy = new ListNode(-1),
        prev = dummy

    dummy.next = head

    while (head) {
        let tail = prev
        for (let i = 0; i < k; i++) {
            tail = tail.next
            if (!tail) {
                return dummy.next
            }
        }
        let nxt = tail.next;
        [head, tail] = reverse(head, tail)
        prev.next = head
        tail.next = nxt
        prev = tail
        head = tail.next
    }

    return dummy.next
}

console.log(reverseKGroup(head, 2));