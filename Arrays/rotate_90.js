// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


var rotate = function(matrix) {
    let circles = Math.floor(matrix.length / 2);
    let startRow = 0;
    let startColumn = 0;
    let max = matrix.length - 1;
    let min = 0;
    let tempGlobal;
    
    for (let circle = 0; circle < circles; circle++) {
        for (let i = min; i < max; i++) {
            // reset
            tempGlobal = undefined;
            let row = startRow;
            let column = startColumn;
            
            while(true) {
                let nextIndex = getNextIndex(row, column, max, min);
                row = nextIndex[0];
                column = nextIndex[1];
                
                if (row === startRow && column === startColumn) {
                     matrix[nextIndex[0]][nextIndex[1]] = tempGlobal
                    break;
                }

                let temp = matrix[nextIndex[0]][nextIndex[1]]; 
                if (tempGlobal !== undefined) {
                    matrix[nextIndex[0]][nextIndex[1]] = tempGlobal;
                } else {
                    matrix[nextIndex[0]][nextIndex[1]] = matrix[startRow][startColumn];
                }
                tempGlobal = temp;
            }
            
        }
        
        startRow++;
        startColumn++;
        max--;
        min++; 
    }
    
    return matrix;
};

var getNextIndex = function(row, column, max, min) {
    if (row === min && column < max) {
        return [row, column+1];
    }
    else if (row < max && column === max) {
        return [row + 1, column];
    }
    else if (row === max && column !== min) {
        return [row, column - 1];
    }
    else {
        return [row - 1, column]
    }
}



// more elehant solution
// transpose matrix and then reverse matrix

var rotate = function(matrix) {
    transpose(matrix);
    reverse(matrix);
    return matrix;
};

var transpose = function(matrix) {
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let column = row + 1; column < matrix.length; column++) {
            swap(row,column,column,row,matrix);
        }
    }
}

var reverse = function(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let startColumn = 0;
        let endColumn = matrix.length - 1;
        
        while(startColumn < endColumn) {
            swap(row,startColumn,row,endColumn,matrix);
            startColumn++;
            endColumn--;
        }
    }
}

var swap = function(a1,b1,a2,b2,arr) {
    let temp = arr[a1][b1];
    arr[a1][b1] = arr[a2][b2];
    arr[a2][b2] = temp;
}