// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where: 

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// WATCH THIS ---> https://www.youtube.com/watch?v=l3hda49XcDE&t=781s

// Dynamic Programming

var isMatch = function(s, p) {
    if (p === ".*") {
        return true;
    }
    
    let grid = [...Array(s.length + 1)].map(e => Array(p.length + 1));
    
    
    for (let i = 0; i < s.length + 1; i++) {
        for (let i2 = 0; i2 < p.length + 1; i2++) {
            if (i === 0 && i2 === 0) {
                grid[i][i2] = true;
            } else {
                if (s[i-1] === p[i2-1] || p[i2-1] === ".") {
                    if (grid[i-1]) {
                        grid[i][i2] = grid[i-1][i2-1];
                    } else {
                        grid[i][i2] = false;
                    }
                }
                else if (p[i2-1] === "*") {
                    let check = p[i2-2] === s[i-1] || p[i2-2] === ".";
                    let upper = false;
                    if (check) {
                        if (grid[i-1]) {
                            upper = grid[i-1][i2]            
                        }
                    }
                    grid[i][i2] = grid[i][i2-2] || upper;
                }
                else {
                    grid[i][i2] = false;
                }
            }
        }
    }
    
    return grid[s.length][p.length];
};