function rev(str) {
    var splitStr = str.split('');
    var revArr = splitStr.reverse();
    return revArr.join('')
}
console.log(rev('hellow'))
