// Given the head of a singly linked list, reverse the list, and return the reversed list.

//solved with recursion and closure

var reverseList = function(head) {
    if (!head) {
        return null;
    }
    
    let newHead;
    
   var reverseListHelp = function(node) {
        if (node.next) {
           reverseListHelp(node.next).next = node;
       } else {
           newHead = node;
       }
        node.next = null;
        return node;
    }
   
   reverseListHelp(head);
   
   return newHead;
};