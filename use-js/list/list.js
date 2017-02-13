function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.contains = contains;
    this.getElement = getElement;
}


function append(element) {
    this.dataStore[this.listSize++] = element;
}


function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}


function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}


function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}


var names = new List();




function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}


function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}


function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}


function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    } else if (this.pos == 0) {
        return this.pos = 'no prev';
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos
    } else if (this.pos == this.listSize - 1) {
        this.pos = 'no next';
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}


names.append('mike');
names.append('mik2e');
names.append('mike3');
names.append('mike4');

names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
console.log(names.currPos());
console.log(names.length());
names.next();
names.next();
names.next();
names.next();
console.log(names.currPos());

// for (names.front(); names.currPos() <= names.length() - 1; names.next()) {
//     console.log(names.getElement());
// }

for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement());
}

module.exports = List;
