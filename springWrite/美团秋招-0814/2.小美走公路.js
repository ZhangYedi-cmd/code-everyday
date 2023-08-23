let roadMock = (sites, start, end) => {
  let p1 = start - 1,
    p2 = start - 1

  let path1 = 0, // 正着走
    path2 = 0  // 反着走

  while (true) {
    if (p1 + 1 === end - 1) {
      path1 += sites[p1]
      break
    }
    if (p1 >= sites.length){
      p1 = 0
      continue
    }
    path1 += sites[p1]
    p1++
  }

  while (true) {
    if (p2 + 1 === end) {
      path2 += sites[p2]
      break
    }
    if (p2 <= 0){
      p2 = sites.length - 1
      continue
    }
    path2 += sites[p2]
    p2--
  }

  return Math.min(path1, path2)
}


roadMock([1,2,2], 2, 3)
