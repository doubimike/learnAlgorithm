function cal(n) {
    var result = 0;
    for (var i = 1; i <= n; i++) {
        result += i;
    }
    console.log(result)
    return result;
}

cal(4)

function dcal(n) {
    if (n == 1) {
        return 1;
    }
    if (n == 0) {
        return 0;
    }
    return n + dcal(n - 1);
}

console.log(dcal(4))
