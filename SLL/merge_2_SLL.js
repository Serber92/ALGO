// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// recursion
// time and space O(n+m)
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }
    
    let p1 = l1;
    let p2 = l2;
    let res;
    let head;
    
    while (p1 && p2) {
        if (p1.val < p2.val) {
            if (res) {
               res.next = p1;
                res = res.next;
            } else {
                res = p1;
                head = res;
            }
            p1 = p1.next;
        } else {
            if (res) {
               res.next = p2;
                res = res.next;
            } else {
                res = p2;
                head = res;
            }
            p2 = p2.next;
        }
    }
    
    if (p1) {
        if (res) {
            res.next = p1;
        } else {
            res = p1;
            head = res;
        }
    }
    if (p2) {
        if (res) {
            res.next = p2;
        } else {
            res = p2;
            head = res;
        }
    }
    
    return head;
}