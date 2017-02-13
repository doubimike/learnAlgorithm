var str = 'He has to give me a new name',
    target = 'mea';
console.log(str.substr(-target.length));
console.log(str.substr(str.length - target.length));
console.log(str.substr(str.length - target.length, target.length));

console.log(end(str, target));

function end(str, target) {
    var endingPart = str.substr(-target.length);
    return target === endingPart;
}



function end(str, target) {
    var endingPart = str.slice(-target.length);
    return target === endingPart;
}


function end(str, target) {
    return str.indexOf(target, str.length - target.length) != -1;
}
