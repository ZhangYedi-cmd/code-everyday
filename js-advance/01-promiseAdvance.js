
new Promise(resolve => {
    resolve(1)
}).then(a => {
    console.log(a)
    return new Promise((resolve, reject) => {
        reject(2)
    })
}).then(b => {
    console.log(b)
    return b
}).catch(e => {
    console.log(e)
})