function truncateString(str, num) {
    // var truncd = ''
    // if (str.length <= num) {
    //     truncd = str;
    // } else if (num <= 3) {
    //     truncd = str.slice(0, num).trim() + '...';
    // } else {
    //     truncd = str.slice(0, num - 3).trim() + '...';
    // }
    // return truncd;

    return str.length <= num ? str : num <= 3 ? str.slice(0, num).trim() + '...' : str.slice(0, num - 3).trim() + '...';
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11))
