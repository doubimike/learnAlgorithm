function LinkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }
    var length = 0;
    var head = null;
    this.append = function(element) {
        var node = new Node(element),
            current;
        if (head == null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }
    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous, index = 0;
            if (position == 0) {
                head = node;
                node.next = current;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            var current = head,
                previous, index = 0;
            if (position == 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }

    }
    this.remove = function(element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    }
    this.isEmpty = function() {
        return length === 0;
    }
    this.size = function() {
        return length;
    }
    this.toString = function() {
        var current = head,
            string = '';
        while (current) {
            string += ',' + current.element;
            current = current.next;
        }

        return string.slice(1);
    }

    this.indexOf = function(element) {
        var current = head,
            index = -1;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
}

var list = new LinkedList();
list.append(15);
list.append(10);

console.log(list.toString())
console.log(list.indexOf(10))
