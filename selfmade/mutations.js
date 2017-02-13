console.log(mutation(['mike', 'mike']));

function mutation(arr) {

    var baseStr = arr[0].toLowerCase().split('');
    var testStr = arr[1].toLowerCase().split('');
    console.log(baseStr)
    console.log(testStr)

    for (var i = 0, len = testStr.length; i < len; i++) {
        var temp = baseStr.indexOf(testStr[i]);
        if (temp === -1) {
            return false;
        }
    }

    return true;
}
