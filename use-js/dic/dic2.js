function Dictionary() {
    var items = {};
    this.has = function(key) {
        return key in items;
    };
    this.set = function(key, value) {
        items[key] = value;
    };
    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };
    this.values = function() {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
    this.getItems = function() {
        return items;
    };
}

// var dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@ email. com');
// dictionary.set(' John', 'johnsnow@ email. com');
// console.log(dictionary.has('Gandalf'))

module.exports = Dictionary;
