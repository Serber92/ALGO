// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// 1) Fast Pow
// (x^n)^2 = x^2n

var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    return fastPow(x, n);
    
};

var fastPow = function(x,n) {
    if (n === 0) {
        return 1;
    }
    
    let half = fastPow(x, Math.floor(n / 2));
    
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}