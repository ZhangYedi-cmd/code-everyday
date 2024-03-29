// 异或运算：相同为0 不同为1 (无进位相加)
// 例如：10001 ^ 01110 = 11111

// 异或运算的性质
// 0 ^ N = N  （0和任何数字异或等于任何数字）
// N ^ N = 0  （相同的数字异或为0）
// a ^ b = b ^ a （交换律）
// a ^ b ^ c = a ^ (b ^ c) 结合律

// 交换两个变量的值
// 前提 两个变量的内存地址不同
let a = 1
let b = 2

a = a ^ b // 2 ^ 1
b = a ^ b // 2 ^ 1 ^ 2 = 1 ^ 0 = 1
a = a ^ b // 1 ^ 2 ^ 1 = 0 ^ 2 = 2

console.log(a, b)

