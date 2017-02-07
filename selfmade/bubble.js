console.log(bubble([3, 2, 1, 4, 7, 2345, 2345, 0, 43, 5]));

function bubble(array) {
    var timeStamp1 = new Date();
    var checkLenth = array.length;
    var swapped;
    var complex = 0;
    do {
        swapped = false;
        for (var index = 0; index < checkLenth - 1; index++) {
            complex++;
            if (array[index] > array[index + 1]) {
                var temp = array[index + 1];
                array[index + 1] = array[index];
                array[index] = temp;
                swapped = true;
            };
        }
        //没经过一轮就会确定冒泡一个，所以checklength-1
        checkLenth--;
    } while (swapped && checkLenth != 1)
    var timeStamp2 = new Date();
    console.log('耗时', timeStamp2 - timeStamp1)
    console.log('complex', complex);
    return array;
}
