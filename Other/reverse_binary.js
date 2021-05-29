// Reverse bits of a given 32 bits unsigned integer.

var reverseBits = function(n) {
    let reversed = 0;
    let power = 31;
    
    while (n) {
        console.log('reversed - ', dec2bin(reversed))
        console.log('n - ', dec2bin(n))
        reversed += (n & 1) << power;
        n >>>= 1;
        power--;
    }
    
    console.log('reversed final - ', dec2bin(reversed))
    return reversed;
};


// convert int to binary
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

reverseBits(0b10010110111001001101001111110101)

