// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""

var longestCommonPrefix = function(strs) {
   let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        let p = 0;
        
        while(p < prefix.length && p < strs[i].length) {
            if (prefix[p] !== strs[i][p]) {
                break;
            }
            
            p++;
        }
        
        prefix = prefix.slice(0, p);
    }
    
    return prefix;
};