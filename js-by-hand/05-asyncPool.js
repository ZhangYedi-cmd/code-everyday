async function asyncPool(poolLimit, array, doFn) {
    let finish = [];
    let executing = [];
    for (let param of array) {   //并发核心
        let p = doFn(param);  //返回一个promise
        finish.push(p);   //加入all名单
        if (poolLimit <= array.length) {
            p = p.then(() => {  //腾出一个空位
                executing.splice(executing.indexOf(p), 1);
            });
            executing.push(p);  //加入正在操作的队列
            // 池子满了，race执行，等有空了再push
            if (executing.length >= poolLimit) {
                console.log("stop")
                await Promise.race(executing);  //等待有空缺之后在进入下次循环
            }
        }
    }
    return Promise.all(finish);  //所有任务完成之后all方法返回res
}

asyncPool(
    2,   //参数一,同时并发的格式
    [1000, 3000, 2000, 5000, 6000],  //参数二,每个请求传入的参数组成的数组
    (param) => 	//参数三,返回值被Promise包裹的异步执行函数
        new Promise((reslove) => {
            setTimeout(() => {
                console.log(param);
                reslove(param);
            }, param);
        })
).then((res) => {
    console.log(res);
});
