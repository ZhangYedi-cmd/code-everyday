//hello_world -> helloWorld
let transformLetter = (s) => s.replace(/_(\w)/g, (all, char) => char.toUpperCase())

let res = transformLetter('hello_world')
console.log(res)


// helloWorld -> hello_word
let transformCame = (s) => s.replace(/([A-Z])/g, (all, char) => "_" + char.toLowerCase())
let res01 = transformCame('helloWorld')
console.log(res01)