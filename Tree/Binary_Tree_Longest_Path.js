// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
// The path sum of a path is the sum of the node's values in the path.
// Given the root of a binary tree, return the maximum path sum of any path.

var maxPathSum = function(root) {
    let sum = - Infinity;
    
    let DFS = function(node) {
        if (node.left) {
            DFS(node.left);
        }
        let currSum = getLongestPath(node);
        if (sum < currSum) {
            sum = currSum;
        }
        if (node.right) {
            DFS(node.right)
        }
    }
    
    DFS(root);
    return sum;
};

var getBiggestOneSideSum = function(node) {
    if (node.BiggestOneSideSum) {
        return node.BiggestOneSideSum;
    }
    
    let left = 0;
    let right = 0;
    if (node.right) {
        let currRight = getBiggestOneSideSum(node.right);
        if (currRight < 0) {
            currRight = 0;
        }
        right = currRight + node.val;
    }
    if (node.left) {
        let currLeft = getBiggestOneSideSum(node.left);
        if (currLeft < 0) {
            currLeft = 0;
        }
        left = currLeft + node.val;
    }
    if (!node.right && !node.left) {
        return node.val;
    }
    
    let BiggestOneSideSum = Math.max(left, right);
    node["BiggestOneSideSum"] = BiggestOneSideSum;
    
    return BiggestOneSideSum;  
}

var getLongestPath = function(node) {
    let left = 0;
    let right = 0;
    
    if (node.right) {
        right = getBiggestOneSideSum(node.right);
        if (right < 0) {
            right = 0;
        }
    }
    if (node.left) {
        left = getBiggestOneSideSum(node.left);
        if (left < 0) {
            left = 0;
        }
    }
    
    return node.val + left + right;
}