// has cycle
// hare and tortois

var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    
    let h = head;
    let t = head;
    
    while (h) {
        if (h.next) {
           h = h.next.next; 
        } else {
            return false;
        }
        
        t = t.next;
        
        if (h) {
            if (h === t) {
                return true;
            } 
        }
    }
    
    return false;
};