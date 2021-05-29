// Iterate over ii from 11 to nn incrementing by 1010 each time:

// Add (n/(i*10))*i(n/(i∗10))∗i to \text{countr}countr representing the repetition of groups of ii sizes after each (i*10)(i∗10) interval.

// Add {\min(\max((\text{n mod (i*10)} )-i+1,0),i)}min(max((n mod (i*10))−i+1,0),i) to \text{countr}countr representing the additional digits dependant on the digit in iith place as described in intuition.


var countDigitOne = function(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i *= 10) {
        let div = i*10
        count += (Math.trunc(n/div))*i + Math.min(Math.max(n%div - i + 1, 0), i);
    }
    
    return count;
};