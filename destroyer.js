function destroyer(arr) {
    var args = arguments;
    console.log('args', args)
    for (var i = 0, len = arguments.length; i < len; i++) {
        console.log(arguments[i]);
    }

}

destroyer([1, 2, 3, 31, 34, 1234], 1, 2)
