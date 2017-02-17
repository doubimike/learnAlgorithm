function changeStuff(num, obj1, obj2) {
    num *= 10;
    obj1.item = 'changeed';
    obj2 = { item: 'uncha' };
}

var num = 10;
var obj1 = {
    item: 'uncha'
}

var obj2 = {
    item: 'uncha'
}

changeStuff(num, obj1, obj2);

console.log(num)
console.log(obj1)
console.log(obj2)
