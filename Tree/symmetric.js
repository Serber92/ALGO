// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

var isSymmetric = function(root) {
    let leftTree = root.left;
    let rightTree = root.right;
    let res = true;
    
    var DFSdouble = function(node1, node2) {
        if (!node1 && !node2) {
            return;
        }
        if (res === false) {
            return;
        }
        if ((!node1 && node2) || (node1 && !node2)) {
            res = false;
            return;
        }
        if (node1 && node2) {
            if (node1.val !== node2.val) {
                res = false;
                return;
            }
        }
        
        if (node1.left || node2.right) {
            DFSdouble(node1.left, node2.right)
        }
        if (node1.right || node2.left) {
            DFSdouble(node1.right, node2.left)
        }
    }
    
    DFSdouble(leftTree, rightTree);
    return res;
    
};