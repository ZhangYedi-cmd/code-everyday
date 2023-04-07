function underlineToHump(str) {
    str = str.replace(/_+/g, '#');
    console.log(str)
}

console.log(underlineToHump("helloWorld"));