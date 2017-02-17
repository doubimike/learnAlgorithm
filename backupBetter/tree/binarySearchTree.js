function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    var inOrderTraverse = function (node, callback) {
        if (node !== null) {
            inOrderTraverse(node.left, callback);
            callback(node.key);
            inOrderTraverse(node.right, callback);
        }
    };
    this.inOrderTraverse = function (callback) {
        inOrderTraverse(root, callback);
    };
    var preOrderTraverse = function (node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverse(node.left, callback);
            preOrderTraverse(node.right, callback);
        }
    };
    this.preOrderTraverse = function (callback) {
        preOrderTraverse(root, callback);
    };
    var postOrderTraverse = function (node, callback) {
        if (node !== null) {

            postOrderTraverse(node.left, callback);
            postOrderTraverse(node.right, callback);
            callback(node.key);
        }
    };
    this.postOrderTraverse = function (callback) {
        postOrderTraverse(root, callback);
    };

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };

    this.min = function () {
        return minNode(root);
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };

    this.max = function () {
        return maxNode(root);
    };

    this.search = function (key) {
        return searchNode(root, key);
    };

    var searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    this.remove = function (key) {
        root = removeNode(root, key);
    };

    var removeNode = function (node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux, key);
            return node;
        }
    };


}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(10);
tree.insert(11);
tree.insert(11);
tree.insert(123);
tree.insert(11123);
tree.insert(111);
tree.insert(12341);
tree.insert(1231);
tree.insert(121);

function printNode(value) {
    console.log(value);
}

tree.preOrderTraverse(printNode);

console.log(tree.search(1201))
