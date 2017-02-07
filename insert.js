console.log(insert([3, 44, 38, 5, 2, 34, 5, 9871234, 22, 22222]))

function insert(array) {
    if (array.length <= 1) {
        return arr;
    }
    // 第一个基准的
    var sortedArray = array.splice(0, 1);
    var unsortedArray = array;
    console.log('sortedArray', sortedArray)
    for (var i = 0; i <= unsortedArray.length - 1; i++) {
        console.log('---')
        var extractEle = unsortedArray[i];
        var lastSortedIndex = sortedArray.length - 1
        var insertIndex = lastSortedIndex;
        for (var j = lastSortedIndex; j >= 0; j--) {
            console.log('j', j)
            if (sortedArray[j] > extractEle) {
                insertIndex--;
                console.log('insertIndex', insertIndex)
            } else {

            }
        }
        sortedArray.splice(insertIndex + 1, 0, extractEle)
        console.log('sortedArray', sortedArray)
    }

    return sortedArray;

}
