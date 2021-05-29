// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// << shifts bits to left 0101 << 1 = 1010
// & returns bit if match 0101 & 0100 = 8
// 0101 & 0010 = 0

var hammingWeight = function(n) {
   let count = 0;
    let mask = 1;
    
    for (let i = 0; i < 32; i++) {
        if (n & mask) {
            count++;
        }
        mask <<= 1;
    }
    
    return count;
};