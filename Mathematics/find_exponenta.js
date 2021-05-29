// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

var isPowerOfThree = function(n) {
    let num = Math.log10(n) / Math.log10(3);
    return numIsInteger(num);
};

var numIsInteger = function(n) {
    return n === parseInt(n, 10);
}


// or 

var isPowerOfThree = function(n) {
    return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};