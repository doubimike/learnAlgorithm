function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function clear() {
    var arr = Object.keys(this.datastore);
    for (var key in arr) {
        delete this.datastore[arr[key]];
    }
}

function count() {
    var n = 0;
    for (var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

hashtable
var pbook = new Dictionary();
pbook.add('mike2', '1232')
pbook.add('mike', '123')
pbook.add('b', '123')
pbook.add('a', '123')

pbook.showAll();
// pbook.clear();
console.log(pbook.count())
