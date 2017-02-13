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
