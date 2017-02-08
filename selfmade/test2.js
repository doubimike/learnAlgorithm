console.log(insert([3, 2, 1, 4, 5, 7, 8, 9, 0]))

// // 插入排序 从下标1开始每增1项排序一次，越往后遍历次数越多
function insert(array) {
    var len = array.length,
        i, j, tmp, result;
    // 设置数组副本
    result = array.slice(0);
    for (i = 1; i < len; i++) {
        // 感觉tmp就是每次遍历需要排序的元素，tmp就是它的值
        tmp = result[i];
        // 这是获取已经排好序的数组
        j = i - 1;
        // 这个过程就是排tmp的过程
        while (j >= 0 && tmp < result[j]) {
            // 这里拿第一个27来分析，j = 0, tmp = 53, tmp > result[0]=27，所以并不执行而是执行下面那个
            // 把53改成27
            result[j + 1] = result[j];
            j--;
        }
        // 然后把result[1]换成53；
        result[j + 1] = tmp;
    }
    return result;
}
