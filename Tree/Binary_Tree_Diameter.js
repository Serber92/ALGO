// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// DFS

var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    var getLongestPath = function(node) {
        if (!node) {
            return 0;
        }

        let leftPath = getLongestPath(node.left);
        let rightPath = getLongestPath(node.right);
        
        diameter = Math.max(diameter, leftPath + rightPath);
        
        return Math.max(leftPath, rightPath) + 1;
    }
    
    getLongestPath(root);
    
    return diameter;

};