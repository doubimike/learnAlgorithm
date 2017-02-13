// function chunk(arr, size) {
//     var tempArr = [],
//         newArr = [],
//         len = arr.length;
//     if (len < size || size <= 0) {
//         return arr;
//     } else {
//         for (var i = 0; i < len; i += size) {
//             tempArr = arr.slice(i, i + size);
//             newArr.push(tempArr);
//         }
//     }
//     return newArr;
// }


// function chunk(arr, size) {
//     var tempArr = [],
//         newArr = [];
//     for (var i in arr) {
//         if (i % size !== size - 1) {
//             tempArr.push(arr[i]);
//         } else {
//             tempArr.push(arr[i]);
//             newArr.push(tempArr);
//             tempArr = [];
//         }
//     }
//     if (tempArr.length !== 0) {
//         newArr.push(tempArr);

//     }
//     return newArr;
// }



// function chunk(arr, size) {
//     var tempArr = [],
//         newArr = [];
//     for (var i in arr) {
//         if (i !== 0 && i % size = 0) {
//             newArr.push(tempArr);
//             tempArr = [];
//         }
//         tempArr.push(arr[i]);
//     }
//     if (tempArr.length) {
//         newArr.push(tempArr);
//     }

//     return newArr;
// }


function chunk(arr, size) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % size === 0) {
            newArr.unshift([]);
            console.log(newArr)
        }

        newArr[0].push(arr[i]);
    }
    newArr.reverse();
    return newArr;
}

function chunk(arr, size) {
    var newArr = [],
        tempArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        tempArr.push(arr[i]);
        if ((i + 1) % size === 0 || i === len - 1) {
            newArr.push(tempArr);
            tempArr = [];
        }
    }

    return newArr;
}


function chunk(arr, size) {
    var tempArr = [],
        newArr = [],
        len = arr.length,
        i = 0;
    while (i < len) {
        tempArr = arr.splice(0, size);
        newArr.push(tempArr);
        i += size;

    }
    return newArr;
}
console.log(chunk([1, 2, 3, 4, 4, 5, 6, 2, 45, 2345, 245, 1], 4))
