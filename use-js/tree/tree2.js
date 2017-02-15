function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.findFather = findFather;
    this.update = update;
}

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function find(data) {
    var current = this.root;
    while (current != null && data !== current.data) {
        if (data < current.data) {
            current = current.left;
        } else if (data > current.data) {
            current = current.right;
        }
    }
    return current;
}

function getMin() {
    var node = this.root;
    // while (true) {
    //     if (node.left != null) {
    //         node = node.left;
    //     }
    //     if (node.left == null) {
    //         break;
    //     }
    // }
    while (node.left != null) {
        node = node.left;
    }
    return node;
}


function getMax() {
    var node = this.root;
    while (true) {
        if (node.right != null) {
            node = node.right;
        }
        if (node.right == null) {
            break;
        }
    }
    return node.show();
}

function insert(data) {
    // 自己写一遍啊
    var newNode = new Node(data, null, null);
    if (this.root == null) {
        return this.root = newNode;
    } else {
        var current = this.root;
        while (true) {
            var parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = newNode;
                    // 结束
                    break;
                }
                // 如果不等于，就继续执行这整个过程，怎么用编程语言实现呢？

            } else if (data > current.data) {
                current = current.right;
                if (current == null) {
                    parent.right = newNode;
                    // 结束
                    break;
                }
            }
        }
    }





    // var n = new Node(data, null, null);
    // if (this.root == null) {
    //     this.root = n;
    // } else {
    //     var current = this.root;
    //     var parent;
    //     while (true) {
    //         parent = current;
    //         if (data < current.data) {
    //             current = current.left;
    //             if (current == null) {
    //                 parent.left = n;
    //                 break;
    //             }
    //         } else {
    //             current = current.right;
    //             if (current == null) {
    //                 parent.right = n;
    //                 break;
    //             }
    //         }
    //     }
    // }
}


function inOrder(node) {
    // if (node == null) {
    //     return console.log('null');
    // }
    // if (node.left != null) {
    //     inOrder(node.left);
    // }
    // console.log(node.show())
    // if (node.right != null) {
    //     inOrder(node.right);
    // }

    // 官方
    if (node != null) {
        inOrder(node.left);
        console.log(node.show())
        inOrder(node.right);
    }
}

// function inOrder(node) {
//     console.log('--node', node);
//     if (!(node == null)) {
//         console.log('---node is not null')
//         inOrder(node.left);
//         console.log('---node show' + node.show() + ' ');
//         inOrder(node.right);
//     }
// }

function preOrder(node) {
    if (node != null) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

// function preOrder(node) {
//     if (!(node == null)) {
//         console.log('---node is not null')
//         console.log('---node show' + node.show() + ' ');
//         preOrder(node.left);

//         preOrder(node.right);
//     }
// }

function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}
// function postOrder(node) {
//     if (!(node == null)) {
//         postOrder(node.left);
//         postOrder(node.right);
//         console.log('---node show' + node.show() + ' ');
//     }
// }

// function getMin() {
//     var current = this.root;
//     while (!(current.left == null)) {
//         current = current.left;
//     }
//     return current.data;
// }

// function getMax() {
//     var current = this.root;
//     while (!(current.right == null)) {
//         current = current.right;
//     }
//     return current.data;
// }

// function find(data) {
//     var current = this.root;
//     while (current !== null) {
//         if (current.data = data) {
//             return current;
//         } else if (data < current.data) {
//             current = current.left;
//         } else {
//             current = current.right;
//         }
//     }
//     return null;
// }

// function remove(data) {
//     removeNode(this.root, data);
// }

// function removeNode(node, data) {
//     if (node == null) {
//         return null;
//     }
//     if (data == node.data) {

//     }
// }
function findFather(data) {
    var node = this.root;
    var parent;
    // 不是根节点的情况
    while (true) {
        console.log('tt')
        if (node != null) {
            console.log('111', node)
            if (data == node.data) {
                console.log('ppp')
                return parent;
            }
            if (data < node.data) {
                parent = node;
                node = node.left;
            }
            if (data > node.data) {
                parent = node;
                node = node.right;
            }
        } else {
            console.log('222')
            break;
        }
    }
    return parent;
}


function remove(data) {

    return removeNode(this.root, data);

}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        if (node.left == null && node.right == null) {
            return null;
        }
        if (node.left == null) {
            return node.right;
        }
        if (node.right == null) {
            return node.left;
        }

        var tempNode = node.right;
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

var nums = new BST();
nums.insert(20)
nums.insert(30)
nums.insert(40)
nums.update(20)
console.log(nums)


function getArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 101)
    }
    return arr;
}

function printArr(arr) {
    console.log(arr[0].toString() + ' ');
    for (var i = 1; i < arr.length; i++) {
        console.log(arr[i].toString() + ' ');
        if (i % 10 == 0) {
            console.log('\n');
        }
    }
}

var grades = getArray(100);
var gradedistro = new BST();
for (var i = 0; i < grades.length; i++) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if (grade == null) {
        gradedistro.insert(g);
    } else {
        gradedistro.update(g);
    }
}

console.log()
