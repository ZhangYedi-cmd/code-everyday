var arr = [1, 3, 6, 5, 2, 1]


function mergeSort(arr, l, r) {
  if (l === r) return 0;
  let midIndex = parseInt((l + r) / 2);
  mergeSort(arr, l, midIndex);
  mergeSort(arr, midIndex + 1, r);
  merge(arr, l, midIndex, r);
}

function merge(arr, l, m, r) {
  // 初始化一个新数组
  let help = [];
  let i = 0;
  let p1 = l; // 左指针
  let p2 = m + 1;// 右指针

  while (p1 <= m && p2 <= r) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  // // 剩余的数全部移入数组中
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }
  // 拷贝
  for (let j = 0; j < help.length; j++) {
    arr[l + j] = help[j];
  }
  console.log(arr)
}


mergeSort(arr, 0, arr.length - 1);
