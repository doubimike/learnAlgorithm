function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.betterHash = betterHash;
    this.put = put;
    this.get = get;
}

function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
}


function get(key) {
    return this.table[this.betterHash(key)];
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }

    return total % this.table.length;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            console.log(i + ': ' + this.table[i]);
        }
    }
}

function betterHash(string) {

    var total = 0;
    for (var i = 0; i < string.length; i++) {
        total += 37 * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.talbe.length - 1;
    }
    return parseInt(total);
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; i++) {
        var num = '';
        for (var j = 1; j <= 9; j++) {
            num += Math.floor(Math.random()) * 10
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}
