/**
 * 单向BFS
 * @param deadends
 * @param target
 * @returns {number|number}
 */
let openLock = function(deadends, target) {
    let count = 0,
        q = [],
        num = '0000',
        // 不走回头路
        visited = new Set(),
        hasFind = false

    q.push(num)

    let handleLock = (num, option) => {
        let numArr = []
        for (let i = 0; i < num.length; i++) {
            let s = option === 'up' ? parseInt(num[i]) + 1 : parseInt(num[i]) - 1
            if (s > 9 && option === 'up') {
                s = 0
            }
            if (s < 0 && option === 'down') {
                s = 9
            }
            let tempNum = num.split('')
            tempNum[i] = s.toString()
            tempNum = tempNum.join('')
            // 判断在不在死锁列表里面
            if (deadends.indexOf(tempNum) !== -1 || numArr.indexOf(tempNum) !== -1) {
                continue
            }
            if (target === tempNum) {
                hasFind = true
                return numArr
            }
            if (!visited.has(tempNum)) {
                numArr.push(tempNum)
                visited.add(tempNum)
            }
        }
        return numArr
    }

    while (q.length > 0) {
        let currSize = q.length
        for (let i = 0; i < currSize; i++) {
            num = q.shift() // 出队
            let upArr = handleLock(num, 'up')
            let downArr = handleLock(num, 'down')
            q = q.concat(upArr)
            q = q.concat(downArr)
        }
        count += 1
        if (hasFind) {
            return count
        }
    }
    return hasFind ? count : -1
};

let depth = openLock(["0201","0101","0102","1212","2002"], '0202')
console.log(depth)

// let upList = handleLock('0000', 'up');
// console.log(handleLock('1000'))

/**
 * 双向BFS
 * @param deadends
 * @param target
 * @returns {number|number}
 */
function openLock02(deadends, target) {
    let deads = new Set(deadends);
    let q1 = new Set();
    let q2 = new Set();
    let visited = new Set();
    let step = 0;

    q1.add("0000");
    q2.add(target);

    while (q1.size > 0 && q2.size > 0) {
        /*<extend down -200>
        <figure><img src="/images/BFS/2.jpeg"
     class="shadow myimage"/>
</figure>
        */
        let temp = new Set();

        /* 将 q1 中的所有节点向周围扩散 */
        for (let cur of q1) {
            /* 判断是否到达终点 */
            if (deads.has(cur)) {
                continue;
            }
            if (q2.has(cur)) {
                return step;
            }
            visited.add(cur);

            /* 将一个节点的未遍历相邻节点加入集合 */
            for (let j = 0; j < 4; j++) {
                let up = plusOne(cur, j);
                if (!visited.has(up)) {
                    temp.add(up);
                }
                let down = minusOne(cur, j);
                if (!visited.has(down)) {
                    temp.add(down);
                }
            }
        }
        /* 在这里增加步数 */
        step++;
        // temp 相当于 q1
        // 这里交换 q1 q2，下一轮 while 就是扩散 q2
        q1 = q2;
        q2 = temp;
    }
    return -1;
}

/**
 * @param {string} s
 * @param {number} j
 * @return {string}
 */
function plusOne(s, j) {
    let ch = s.split('');
    if (ch[j] === '9') {
        ch[j] = '0';
    } else {
        ch[j] = '' + (ch[j].charCodeAt() - 48 + 1);
    }
    return ch.join('');
}

/**
 * @param {string} s
 * @param {number} j
 * @return {string}
 */
function minusOne(s, j) {
    let ch = s.split('');
    if (ch[j] === '0') {
        ch[j] = '9';
    } else {
        ch[j] = '' + (ch[j].charCodeAt() - 48 - 1);
    }
    return ch.join('');
}

let depth02 = openLock02(["0201","0101","0102","1212","2002"], '0202')
console.log(depth02)
