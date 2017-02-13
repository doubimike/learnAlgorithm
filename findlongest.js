Array.prototype.max = function() {
    return Math.max.apply(null, this);
}


var arr = [1, 2, 3]
console.log(arr.max())


function findLongestWord(str) {
    var array = str.split(' ');
    var longest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (array[i].length > longest) {
            longest = array[i].length;
        }
    }

    return longest;
}
