var Queue = require('./queue.js')

function hotPotato(nameList, num) {

    var queue = new Queue();
    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    console.log(queue.size())
    var eliminated = '';
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '在击鼓传花游戏中被淘汰。');
    }

    return queue.dequeue();
}

var names = ['mike', 'jon'];
var winner = hotPotato(names, 2);
console.log('胜利者：' + winner);
