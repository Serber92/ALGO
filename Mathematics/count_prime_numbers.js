// Count the number of prime numbers less than a non-negative number, n.

var countPrimes = function(n) {
    let hash = {};
    
    for (let i = 2; i < Math.sqrt(n); i++) {
        let mult = 2;
        while (i * mult < n) {
            hash[i*mult] = true;
            mult++;
        }
        mult++;
    }
    
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!hash[i]) {
            count++;
        }
    }
    
    return count;
};