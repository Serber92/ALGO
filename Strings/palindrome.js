// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        while(!s[start].match(/^[0-9a-z]$/i)) {
            start++;
            if (start > end) {
                return true
            }
        }
        while(!s[end].match(/^[0-9a-z]$/i)) {
            end--;
            if (start > end) {
                return true
            }
        }
        
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        
        start++;
        end--;
    }
    
    return true;
};