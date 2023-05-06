let ladderLength = function(beginWord, endWord, wordList) {
    // bfs
    let q = []
    q.push({
        word: beginWord,
        path: [beginWord]
    })
    while (q.length) {
        let { word, path } = q.shift()
        // 拓宽
        for (let i = 0 ; i < wordList.length; i++) {
            let target = wordList[i]
            // 不走回头路
            if (path.indexOf(target) !== -1) continue
            // 能否变换
            let letterNum = 0
            for (let j = 0 ; j < target.length; j++) {
                letterNum += target[j] === word[j] ? 1 : 0
            }
            // 能通过变化一个字母 get到数组中的单词
            if (letterNum === word.length - 1) {
                path.push(target)
                if (target === endWord) {
                    console.log(path)
                    // return path.length
                }
                q.push({
                    word: target,
                    path: JSON.parse(JSON.stringify(path))
                })
            }
        }
    }
    return 0
};


console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))