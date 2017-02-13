var fs = require('fs');
var Queue = require('./queue')
console.log(Queue)

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = fs.readFileSync('dancers.txt').toString().split('\n');
    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
    }
    console.log(names)

    for (var j = 0; j < names.length; j++) {
        var dancer = names[j].split(' ');
        var sex = dancer[0];
        var name = dancer[1];
        if (sex === 'F') {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}


function dance(males, females) {
    console.log('The dance partners are:  \n');
    while (!females.empty() && !males.empty()) {
        var person = females.dequeue();
        console.log('Female dancer is ' + person.name);
        person = males.dequeue();
        console.log('Male dancer is ' + person.name);
    }
}

var m = new Queue();
var f = new Queue();
getDancers(m, f);
dance(m, f);
if (!f.empty()) {
    console.log(f.front().name + 'is waiting')
}
if (!m.empty()) {
    console.log(m.front().name + 'is waiting')
}

console.log(m)
if (m.count() > 0) {
    console.log('there r ' + m.count() + 'male waiting')
}
if (f.count() > 0) {
    console.log('there r ' + f.count() + 'fmale waiting')
}
