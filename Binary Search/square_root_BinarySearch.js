var mySqrt = function(x) {
    if (x < 2) {
        return x;
    };
    
    let start = 2;
    let end = Math.floor(x/2);
    
    while (start <= end) {
        let middle = start + Math.floor((end - start) / 2);
        let num = middle * middle;
        
        if (num > x) {
            end = middle - 1;
        }
        else if (num < x) {
            start = middle + 1;
        }
        else {
            return middle;
        }
    }
    
    return end;
};