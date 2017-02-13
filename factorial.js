function factorial(num) {
    if (num < 0) {
        return -1;
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}

function factorial(num) {
    var result = num;
    if (num < 0) {
        return -1;
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        while (num > 1) {
            num--;
            result * = num;
        }
    }
}
