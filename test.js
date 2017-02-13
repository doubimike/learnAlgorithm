<<<<<<< Updated upstream
(function (argument) {
    var x = '',
        i = 0;
    for (i; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (j == 3) break;
            console.log('the j is ' + j)
        }

        x = 'the number is ' + i;
        console.log(x);
    }
})();
=======
// var str = 'abc';
// console.log(str.indexOf(''))
// console.log(str.indexOf('', -100))
// console.log(str.indexOf('', 100))
// console.log(str.indexOf('', 2))


var str = 'eo be, or not to be, that is the question.';
var count = 0;
var pos = str.lastIndexOf('e', -1);
console.log(pos)
    // while (pos !== -1) {
    //     count++;
    //     // pos = str.lastIndexOf('e', pos - 1);
    //     console.log(pos)
    // }

console.log(count)
>>>>>>> Stashed changes
