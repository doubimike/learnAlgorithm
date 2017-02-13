// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join('');
//     return reverseStr === lowRegStr;
// }


function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var len = lowRegStr.length;
    for (var i = 0, halfLen = len / 2; i < halfLen; i++) {
        if (lowRegStr[i] !== lowRegStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
