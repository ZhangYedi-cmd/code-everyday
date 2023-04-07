function decimalToHex(decimalNumber) {
    if (decimalNumber === 0) {
        return "00";
    } else if (decimalNumber === 1) {
        return "A";
    } else if (decimalNumber === 2) {
        return "B";
    } else if (decimalNumber === 3) {
        return "C";
    } else if (decimalNumber === 4) {
        return "D";
    } else if (decimalNumber === 5) {
        return "E";
    } else if (decimalNumber === 6) {
        return "F";
    } else {
        return decimalToHex(decimalNumber - 1);
    }
}

console.log(decimalToHex(36));


// 1000 0001
// 1 2 4 8 16 32 64 128
// 1 + 128 = 129