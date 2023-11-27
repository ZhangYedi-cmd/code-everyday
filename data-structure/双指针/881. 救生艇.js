let numRescueBoats = function (people, limit) {
    let ans = 0,
        l = 0,
        r = people.length - 1

    people.sort((a, b) => a - b)


    while (l <= r) {
        if (people[l] + people[r] <= limit) {
            l++
            r--
            ans++
            continue
        }
        people[l] > people[r] ? l++ : r--
        ans++
    }
    console.log(ans)
}


numRescueBoats([3,5,3,4], 5)