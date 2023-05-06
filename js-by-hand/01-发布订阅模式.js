function Watcher() {
    this.eventMap = {}
}

Watcher.prototype.$on = function (event, work) {
    const {eventMap} = this
    if (!eventMap[event]) {
        this.eventMap[event] = [work]
    } else {
        this.eventMap[event].push(work)
    }
}

Watcher.prototype.$emit = function (event) {
    const events = this.eventMap[event]
    events.map(event => event())
}

Watcher.prototype.$removeAll = function (event) {
    let events = this.eventMap[event]
    if (!events || events.length === 0) {
        return
    }
    delete this.eventMap[event]
}

const watcher = new Watcher()

watcher.$on("hello", () => {
    console.log("hello")
})

watcher.$emit("hello")
// watcher.$emit("hell1")

