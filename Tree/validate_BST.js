// recursion
// can be done better

var isValidBST = function(root) {
    let res = true;
    
    var DFS = function(node) {
        if (!node) {
            return;
        }
        
        DFS(node.left);
        
        if (!checkNodeLeft(node)) {
            res = false;
        }
        if (!checkNodeRight(node)) {
            res = false;
        }
        
        DFS(node.right);
    }
    
    DFS(root);
    return res;
};

var checkNodeLeft = function(mainNode) {
    let res = true;
    
    var DFS = function(node) {
        if (!node) {
            return;
        }
        
        DFS(node.left);
        
        if (mainNode.val <= node.val) {
            res = false;
        }
        
        DFS(node.right);
    }
    
    DFS(mainNode.left);
    return res;
}

var checkNodeRight = function(mainNode) {
    let res = true;
    
    var DFS = function(node) {
        if (!node) {
            return;
        }
        
        DFS(node.left);
        
        if (mainNode.val >= node.val) {
            res = false;
        }
        
        DFS(node.right);
    }
    
    DFS(mainNode.right);
    return res;
}