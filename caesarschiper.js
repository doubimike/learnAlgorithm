function rot13(str) {
    var newString = [];
    for (var i = 0; i < str.length; i++) {
        var temp = str.charCodeAt(i);
        if (temp < 65 || temp > 91) {
            newString.push(str.charAt(i));
            // continue;
        } else if (temp > 77) {
            newString.push(String.fromCharCode(temp - 13));
        } else {
            newString.push(String.fromCharCode(temp + 13));
        }
    }

    return newString.join('');

}

console.log(rot13('I LOVE YOU!'))
