// function quick(array, pivotIndex, baseIndex) {
//     var length = array.length;


//     if (length == 1) {
//         return array;
//     }

//     // 选择一个基准值做比较对象，进行分支
//     var pivotIndex = pivotIndex;
//     // 为了更方便的表示交换的index，定义一个变量
//     var baseIndex = pivotIndex + 1;

//     // 剩下的未排序的分别与基准值进行比较,i表示次数，所以为了理解的方便，直接从1开始，它并不涉及到数组下标
//     for (var i = baseIndex; i <= length; i++) {
//         if (array[i] < array[pivotIndex]) {
//             // 还需要处理更加一般的情况
//             swap(array, baseIndex, i);
//             baseIndex++;
//         }

//     }
//     swap(array, pivotIndex, baseIndex - 1);
//     pivotIndex++;

//     // 接下来进行递归调用
//     // 分组的
//     // quick()
//     console.log(array);
//     // quick(array, 0, baseIndex - 2)
//     // quick(array, baseIndex, length - 1)

//     function swap(array, baseIndex, swapIndex) {
//         var temp = array[baseIndex];
//         array[baseIndex] = array[swapIndex];
//         array[swapIndex] = temp;
//         return array;
//     }
// }

// quick([4, 5, 1, 3, 2])
// quick([2, 1, 3, 4, 5])
// quick([1, 2, 3, 4, 5])
//     // quick([4, 5, 1, 3, 2])


// // 思路
// // 根据基准值分组，然后递归
// // 如何分组，如果遇到小的，放在他后面，又遇到小的，索引+1，继续换
// // 遇到重复的功能就抽象出来
// // 当分割数组长度为1的时候退出


// 实在弄不出来啊，先抄一遍

var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = 0;
    var pivot = arr.splice(0, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}



// console.log(quickSort([2, 1, 3, 4, 6, 3, 2]))
// 上面的算法还可以更加优化

function QuickSort(arr, func) {
    if (!arr || !arr.length) return [];
    if (arr.length === 1) return arr;
    var pivot = arr[0];
    var smallSet = [];
    var bigSet = [];
    for (var i = 1; i < arr.length; i++) {
        if (func(arr[i], pivot) < 0) {
            smallSet.push(arr[i]);
        } else {
            bigSet.push(arr[i]);
        }
    }
    console.log('smallSet', smallSet)
    console.log('bigSet', bigSet)
    return QuickSort(smallSet, func).concat([pivot], QuickSort(bigSet, func));
}

console.log(QuickSort([2, 1, 3, 4, 6, 3, 2], function (a, b) {
    return a - b;
}));


// 来一个带原地排序的快速排序
function swap(arr, from, to) {
    if (from == to) return;
    var temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
}


function QuickSortWithPartition(arr, func, from, to) {
    if (!arr || !arr.length) return [];
    if (arr.length === 1) return arr;
    from = from === void 0 ? 0 : from;
    to = to === void 0 ? 0 : to;
    var pivot = arr[from];
    var smallIndex = from;
    var bigIndex = from + 1;
    for (; bigIndex <= to; bigIndex++) {
        if (func(arr[bigIndex], pivot) < 0) {
            smallIndex++;
            swap(arr, smallIndex, bigIndex);
        }
    }
    swap(arr, smallIndex, from);
    QuickSortWithPartition(arr, func, from, smallIndex - 1);
    QuickSortWithPartition(arr, func, smallIndex + 1, to);
    return arr;
}
