// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function(s) {
    let stack = [];
    let hash = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let i = 0; i < s.length; i++) {
        if (!stack.length) {
            stack.push(s[i]);
        } else {
            if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
                if (hash[stack[stack.length - 1]] !== s[i]) {
                    return false;
                }
            }
            if (hash[stack[stack.length - 1]] === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    
    if (stack.length) {
        return false;
    } else {
        return true;
    }
};