// for serealize - regular depth first search

var serialize = function(root) {
    if (!root) {
        return "";
    }
    let res = [];
    DFS(root, res);
    return res.join(',');
};

var DFS = function(node, res) {
    if (node) {
        res.push(node.val);
    } else {
        res.push("None");
        return;
    }
    
    DFS(node.left, res);
    DFS(node.right, res);
}

// reverse operation for deserealize
// filling left first, if right exists then move level up back to parent
// using stack as pointer to move back to parent

var deserialize = function(data) {
    if (data.length === 0) {
        return null;
    }
    let arr = data.split(',');
    let root = new TreeNode(arr[0]);
    let stack = [root];
    let left = true;
    for (let i = 1; i < arr.length; i++) {
        let head = arr[i];
        
        if (stack[stack.length - 1].right) {
                stack.pop();
                i -= 1;
                continue;
        }
        
        if (arr[i] !== "None") {
            if (left) {
                stack[stack.length - 1].left = new TreeNode(arr[i]);
                stack.push(stack[stack.length - 1].left);
            } else {
                stack[stack.length - 1].right = new TreeNode(arr[i]);
                stack.push(stack[stack.length - 1].right);
                left = true;
            }
        } else {
            if (left) {
                left = false;
            } else {
                stack.pop();
            }
        }
    }
    
    return root;
};