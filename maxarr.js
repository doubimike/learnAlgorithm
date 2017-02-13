function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
        var largestNumber = 0;

        for (var sb = 0; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
                largestNumber = arr[n][sb];
            }
        }
        results[n] = largestNumber;
    }



    return results;
}

console.log(largestOfFour([
    [1, 34],
    [456, 2, 3, 44, 234],
    [4567, 1, 4, 5, 6],
    [34, 78, 23, 1]
]))


function l(arr) {
    return arr.map(function(subArr) {
        return subArr.reduce(function(prev, current) {
            return (prev > current) ? prev : current;
        })
    })
}
