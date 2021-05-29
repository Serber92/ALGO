// Given the head of a singly linked list, return true if it is a palindrome.

// recursion
// https://leetcode.com/problems/palindrome-linked-list/

var isPalindrome = function(head) {
    let start = head;
    let res = true;
    let count = 1;
    let middle;
    
    var checkEnd = function(node) {
        if (node.next) {
            count++;
            checkEnd(node.next);
        } else {
           middle = Math.floor((count + 1) / 2); 
        }

        if (node.val !== start.val) {
            if (count > middle) {
                res = false;
            }
        }
        start = start.next;
        count--;
    }
    
    checkEnd(head);
    
    return res;
};