const getUrlParams = url => {
    return url.match(/([^?=&]+)(=([^&]*))/g)
}
// [^?=&] 匹配key ，不以？开头
// =[^&] 匹配value
console.log(getUrlParams('www.baidu.com?name=yedi&age=18'))