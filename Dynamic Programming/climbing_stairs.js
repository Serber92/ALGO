// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// whithout memorization using Fibonachi
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return climbStairs(n-1) + climbStairs(n-2);
};

// with memorization using Fibonachi

var climbStairs = function(n) {
    if (n < 2) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    
    let p1 = 1;
    let p2 = 2;
    let s = 2;
    
    for (let i = 2; i < n; i++) {
        if (s === p2) {
            s += p1;
            p1 = s;
        } else {
            s += p2;
            p2 = s;
        }
    }
    
    return s;
};