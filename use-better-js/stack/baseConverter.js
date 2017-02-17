var Stack = require('./stack.js');

function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem, binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem, binaryString = '',
        digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()];
    }
    return binaryString;
}

// testCase

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
