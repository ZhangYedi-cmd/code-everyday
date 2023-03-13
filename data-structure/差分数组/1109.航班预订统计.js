/**
 * 航班预订统计
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const seats = []
    for (let i = 0 ; i <= n ; i++) {
        seats[i] = 0
    }
    // 构造差分
    bookings.map(book => {
        const start = book[0]
        const end = book[1]
        const num = book[2]
        seats[start - 1] += num
        seats[end] -= num
    })
    const arr =[]
    arr[0] = seats[0]
    // 复原
    for (let i = 1 ; i < seats.length - 1 ; i++) {
        arr[i] = arr[i - 1] + seats[i]
    }
    return arr
};
