/**
 * 堆 用数组的前缀元素抽象成的一颗完全二叉树
 * [1,2,3,4,5,6,7]
 *  树中的任意一个节点都可以用以下公式来找到关联节点
 *  父亲节点：(i - 1) / 2
 *  左子节点：(i * 2) + 1
 *  右子节点：(i * 2) + 2
 *
 *  大根堆：任何一个子树的最大值在这颗子树的顶部
 *  小根堆：任何一个子树的最小值在这颗子树的顶部
 *
 *  堆的两个重要方法：上浮和下沉，以大根堆举例
 *  上浮：变更一个元素，变更后的值比原来的元素大，所以需要往上浮才能保持大根堆的性质
 *  下沉：变更一个元素，变更后的值比原来的元素小，当前元素往下沉，子节点的最大值往上浮才能保持大根堆的性质
 */
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function Heap() {
    this.arr = []
}

Heap.prototype.insert = function(val) {
    this.arr.push(val)
    this.heapUp(this.arr.length - 1)
}

Heap.prototype.update = function (i, val) {
    // 判断变大还是变小 变大了往上飘 变小了往下沉
    let func = this.arr[i] < val ? this.heapUp.bind(this) : this.heapDown.bind(this)
    this.arr[i] = val
    func(i)
}

/**
 * 上浮元素：变更的值比原来的大
 * @param i
 */
Heap.prototype.heapUp = function (i)  {
    let { arr } = this,
        fIndex = Math.floor((i - 1) / 2)

    while (arr[i] > arr[fIndex]) {
        // 交换父子元素
        swap(arr, i, fIndex)
        i = fIndex
        fIndex = Math.floor((i - 1) / 2)
    }
}

/**
 * 下浮元素：找到左右子节点中最大的与之做交换
 * @param i
 * @param size
 */
Heap.prototype.heapDown = function(i, size) {
    let { arr } = this,
        l = (i * 2) + 1
    size = size || arr.length

    while (l < size) {
        // 两个子节点找一个最大的
        let best = l + 1 < size && arr[l] < arr[l + 1] ? l + 1 : l
        best = arr[best] > arr[i] ? best : i
        if (best === i) {
            break
        }
        swap(arr, i, best)
        i = best
        l = (i * 2) + 1
    }

}

Heap.prototype.sort = function () {
    let { arr, heapDown } = this
    let size = arr.length - 1

    while (size) {
        swap(arr, 0, size)
        heapDown.call(this, 0, size)
        size--
    }
}

let h = new Heap()

h.insert(5)
h.insert(7)
h.insert(1)
h.insert(2)
h.insert(6)
h.insert(8)


console.log(h.arr)


// h.update(0, 2)

h.sort()

console.log(h.arr)