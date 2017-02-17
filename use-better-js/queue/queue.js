function Queue() {
    var items = [];
    this.enqueue = function(element) {
        items.push(element);
    }
    this.dequeue = function() {
        return items.shift();
    }
    this.front = function() {
        return items[0];
    }
    this.isEmpty = function() {
        return items.length == 0;
    }
    this.size = function() {
        return items.length;
    }
    this.print = function() {
        console.log(items.toString());
    }
    this.clear = function() {
        items = [];
    }

}

module.exports = Queue;

// test
// case
// var queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(5);
// queue.enqueue(8);
// queue.enqueue(11);
// console.log(queue.size())
// queue.print();
// console.log(queue.isEmpty());
// queue.dequeue()
// queue.dequeue()

// console.log(queue.size())
// queue.print();
