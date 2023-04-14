/**
 * 选择排序
 * 遍历元素，里层循环负责选后面最小的元素和当前元素做交换
 * */

function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        if (minIndex !== i) swap(arr, i, minIndex);
    }
    console.log(arr)
}

function swap(arr, a, b) {
    arr[a] = arr[a] ^ arr[b];
    arr[b] = arr[a] ^ arr[b];
    arr[a] = arr[a] ^ arr[b];
}


selectSort([4,3,1,3,2])