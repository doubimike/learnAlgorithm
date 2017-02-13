function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element) {
    return this.dataStore[this.top++] = element;

}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

// var s = new Stack();
// s.push('david');
// s.push('raymond')
// s.push('bryan')
// console.log('length', s.length())
// console.log(s.peek())
// var popped = s.pop();

// console.log("The popped element is: " + popped);
// console.log(s.peek());
// s.push("Cynthia");
// console.log(s.peek());
// s.clear();
// console.log("length: " + s.length());
// console.log(s.peek());
// console.log(s.dataStore);
// // s.push("Clayton");
// // console.log(s.peek());


function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}


var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum)
