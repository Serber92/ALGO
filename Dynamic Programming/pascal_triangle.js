// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }

    let rows = [[1]];
    let nextRow = 1;
    
    for (let i = 1; i < numRows; i++) {
        rows[nextRow] = [];
        for (let i2 = -1; i2 < rows[nextRow - 1].length; i2++) {
            let a = rows[nextRow - 1][i2];
            let b = rows[nextRow - 1][i2+1];
            
            if (a === undefined) {
                a = 0;
            }
            if (b === undefined) {
                b = 0;
            }
            
            rows[nextRow].push(a + b);
        }
        nextRow++;
    }
    
    return rows;
};