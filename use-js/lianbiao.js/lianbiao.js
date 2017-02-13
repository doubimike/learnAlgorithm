function Node(element) {
    this.element = element;
    this.next = null;
}


function LList() {
    this.head = new node('head')
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
}
