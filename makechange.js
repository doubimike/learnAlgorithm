function MinCoinChange(coins) {
    var coins = coins;
    var cache = {};
    this.makeChange = function(amount) {
        var me = this;
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            return cache[amount];
        }
        var min = [],
            newMin, newAmount;
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i];
            newAmount = amount - coin;
        }

    }
}
