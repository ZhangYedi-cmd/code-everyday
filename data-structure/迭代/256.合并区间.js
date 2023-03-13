/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 过33%左右
 */
function merge02(intervals) {
    if (intervals.length == 0) {
        return [];
    }
    // 按照区间的左端点大小排列
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        let last = res[res.length - 1];
        if (curr[0] <= last[1]) {
            // 有重叠，合并区间
            last[1] = Math.max(curr[1], last[1]);
        } else {
            // 无重叠，添加新的区间
            res.push(curr);
        }
    }
    return res;
}

// console.log(merge02([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    for (var i = 1; i < intervals.length; i++) {
        let prevArr = intervals[i - 1]
        let currArr = intervals[i]
        let temp = []
        // 什么时候不需要合并？
        if (prevArr[0] < currArr[0] && prevArr[1] < currArr[1] && prevArr[1] < currArr[0]) {
            continue
        }
        if (prevArr[0] > currArr[1] && prevArr[0] > currArr[1]) {
            intervals[i] = prevArr
            intervals[i - 1] = currArr
            continue
        }
        // 左 小
        if (currArr[0] <= prevArr[0]) {
            temp[0] = currArr[0]
        } else {
            temp[0] = prevArr[0]
        }
        // 右 大
        if (currArr[1] > prevArr[1]) {
            temp[1] = currArr[1]
        } else {
            temp[1] = prevArr[1]
        }
        intervals[i] = temp
        delete intervals[i - 1]
    }
    console.log(intervals.filter(item => item !== null))
    return intervals.filter(item => item !== null)
};

merge([[1,3],[2,6],[8,10],[15,18]])
merge([[1,4],[0,4]])
merge([[1,4],[4,5]])
merge([[1,4],[0,0]])
merge([[1, 10], [2, 3], [4, 5], [6, 7], [8, 9]])
