var romanToInt = function(s) {
    let hash = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let currNum = hash[s[i]];
        if (i < s.length - 1) {
            let nextNum = hash[s[i+1]];
            if (currNum < nextNum) {
                currNum *= -1;
            }
        }
        sum += currNum;
    }
    
    return sum;
};