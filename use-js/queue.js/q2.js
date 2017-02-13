function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

}

function count() {
    return this.dataStore.length;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue(element) {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry, 1);
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i].name + 'code: ' + this.dataStore[i].code + '\n';
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    return false;
}



module.exports = Queue;
