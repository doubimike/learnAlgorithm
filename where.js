var arr = [40, 60];


function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1
    }
    if (a == b) {
        return 0;
    }
}

function where(arr, num) {
    arr.push(num);
    arr.sort(compare);
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }
    }
}

console.log(where(arr, 40))
