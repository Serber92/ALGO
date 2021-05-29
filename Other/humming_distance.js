// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

var hammingDistance = function(x, y) {
    let count = 0;
    let mask = 1;
    
    for (let i = 0; i < 32; i++) {
        if ((x & mask) !== (y & mask)) {
            count++;
        }
        mask <<= 1;
    }
    
    return count;
};