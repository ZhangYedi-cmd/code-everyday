function LRUCache(capacity) {
    this.capacity = capacity
    this.cacheMap = new Map()
}

LRUCache.prototype.get = function (key) {
    const {cacheMap} = this
    if (!cacheMap.has(key)) return -1
    const cacheVal = cacheMap.get(key)
    cacheMap.delete(key)
    cacheVal.set(key, cacheVal)
    return cacheVal
}

LRUCache.prototype.put = function (key, value) {
    if (this.cacheMap.has(key)) this.cacheMap.delete(key)
    if (this.cacheMap.size >= this.capacity) {
        this.cacheMap.delete(this.cacheMap.keys().next().value)
    }
    this.cacheMap.set(key, value)
    return null
};