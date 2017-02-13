var numbers = new Array();
console.log(Array.isArray(numbers));
console.log(numbers);
console.log(Array.isArray(Array.prototype));

if (!Array.isArray) {
    Array.isArray = function (args) {
        return Object.prototype.toString.call(args) === '[object Array]';
    }
}


var nums = [];
for (var i = 0; i < 10; ++i) {
    console.log(i)
    nums[i] = i + 1;
}

console.log(nums)
