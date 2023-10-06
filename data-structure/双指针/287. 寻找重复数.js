let findDuplicate = (arr) => {
    let s = arr[0],
        f = arr[arr[0]]

    while (f !== s) {
        s = arr[s]
        f = arr[arr[f]]
    }

    f = 0
    while (f !== s) {
        f = arr[f]
        s = arr[s]
    }
    return s
}

findDuplicate([2,5,9,6,9,3,8,9,7,1])