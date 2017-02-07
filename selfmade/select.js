console.log(select2([3, 2, 1, 4, 7, 2345, 2345, 0, 43, 5, 3, 7, 8]));
// 从0开始总是会弄出混乱来，所以我们对数组进行加工
function select2(array) {
    var timeStamp1 = new Date();
    var complex = 0;

    array.unshift(0);
    var length = array.length - 1;
    var min;
    var minIndex;

    for (var j = 1; j <= length - 1; j++) {
        min = array[j];

        // 下面是每一次和最小的进行比较
        // 剩下的所有unsort元素都要和min作比较，所以次数是  length-j
        for (var i = 1; i <= length - j; i++) {
            complex++;
            // 从哪个下标开始比较
            var beginIndex = j + i;
            if (array[beginIndex] < min) {
                min = array[beginIndex];
                minIndex = beginIndex;
            }
        }
        // 与初始的最小进行交换
        var t = array[j];
        array[j] = array[minIndex];
        array[minIndex] = t;
    }
    array.shift(0);

    var timeStamp2 = new Date();
    console.log('耗时', timeStamp2 - timeStamp1);
    console.log('complex', complex);
    return array;
}
