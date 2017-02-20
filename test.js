function changeStuff(num, obj1, obj2) {
    num *= 10;
    obj1.item = 'changeed';
    obj2 = { item: 'cha' };
}

var num = 10;
var obj1 = {
    item: 'uncha'
}

var obj2 = {
    item: 'uncha'
}

changeStuff(num, obj1, obj2);

console.log(num) //10
console.log(obj1) //changed
console.log(obj2) //uncha
