// Not finished

class Node {
    contructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.heigth = 0;
        this.balance = 0;
    }
}
class AVL {
    constructor() {
        root = null;
    }
    
    insert(val, node = this.root) {
        if (!node) {
            node = new Node(val);
            this.adjustHeight();
        }
        if (node.val > val) {
            this.insert(node.left);
        }
        if (node.val <= val) {
            this.insert(node.right);
        }
    }
    
    checkBalance(node = this.root) {
        if (node) {
            node.balance = getBalance(node);
        } else {
            return 0;
        }
    }
    
    adjustHeight(node = this.root) {
        if (node) {
           node.height = Math.max(this.adjustHeight(node.left), this.adjustHeight(node.right)) + 1;
           return node.height + 1;
        } else {
            return -1;
        }
    }
    
    rotateRight(parent) {
        let newParent = parent.left;
        parent.left = parent.left.right;
        newParent.right = parent;
        return newParent;
    }
    
    rotateLeft(parent) {
        let newParent = parent.right;
        parent.right = parent.right.left;
        newParent.left = parent;
        return newParent;
    }
    
    getBalance(node) {
        let left = -1;
        let right = -1;
        if (node.left) {
            left = node.left.height;
        }
        if (node.right) {
            left = node.right.height;
        }
        return left - right;
    }
}

var sortedArrayToBST = function(nums) {
    
};

let t = new Tree();
t.insert(5);
t.insert(10);
t.insert(8);
t.insert(6);
t.insert(4);
t.insert(3);
t.insert(2);
t.insert(1);
t.insert(15);

t.print();

