/**
 * 实现一个前缀树
 * {
      app: {
        apple: {
            appleWatch: {
                appleWatchSeries: {},
                appleWatchSE: {},
            }
        }
      }
 * }
 */

var Trie = function(val) {
    this.children = []
    this.val = val
};

/**
 * @param {string} word
 * @return {void}
 */
/**
 * {
 *    val: '',
 *    children: [
 *        {
 *            val: 'app',
 *            children : [
 *                {
 *                    val: 'apple',
 *                    children: [
 *                        {
 *                            val: 'appleWatch',
 *                            children: []
 *                        }
 *                    ]
 *                },
 *            ]
 *        }
 *    ]
 * }
 */
Trie.prototype.insert = function(word) {
    let hasPrefix = false
    if (this.children.length === 0) {
        hasPrefix = true
    }
    // app
    this.children.map(node => {
        if (word.indexOf(node.val) === 0) {
            node.insert(word)
            hasPrefix = true
        }
    })
    if (hasPrefix) {
        this.children.push(new Trie(word))
    }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

};

/**
 递归搜索
 */
// Trie.prototype.recursionSearch = function(word,obj) {
//     Object.keys(obj).map(key => {

//     })
// };

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
};


const t = new Trie()
t.insert('app')
t.insert('apple')
t.insert('appStore')
t.insert('appleWatch')
console.log(JSON.stringify(t.children));


