// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

var levelOrder = function(root) {
    let res = [];
    
    let DFS = function(node, level = 0) {
        if (!node) {
            return;
        }
        if (node.left) {
            DFS(node.left, level + 1);
        }
        if (res[level] === undefined) {
            res[level] = [node.val];
        } else {
            res[level].push(node.val);
        }
        if (node.right) {
            DFS(node.right, level + 1);
        }
    }
    
    DFS(root);
    return res;
};