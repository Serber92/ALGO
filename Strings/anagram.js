// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// O(n) time complexity and O(1) space beacuse hash will have max 26 charactes from English Alphabet
var isAnagram = function(s, t) {
    let hash = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1;
        } else {
            hash[s[i]] += 1;
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (!hash[t[i]]) {
            return false;
        } else {
            hash[t[i]] -= 1;
        }
    }
    
    return true;
};

console.log(isAnagram('rat','car'));