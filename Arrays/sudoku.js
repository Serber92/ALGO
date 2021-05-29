// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

var isValidSudoku = function(board) {
    let rows = [];
    let columns = [];
    
    let boxesCount = board.length / 3;
    let boxes = [...Array(boxesCount)].map(e => Array(boxesCount));
    for (let i = 0; i < boxesCount; i++) {
      for (let i2 = 0; i2 < boxesCount; i2++) {
        boxes[i][i2] = {};
      }
    }
    
    for (let row = 0; row < board.length; row++) {
        rows.push({});
        for (let column = 0; column < board[row].length; column++) {
            if (board[row][column] !== ".") {
                if (columns[column] === undefined) {
                    columns[column] = {};
                }
                if (!columns[column][board[row][column]]) {
                    columns[column][board[row][column]] = true;
                } else {
                    return false;
                }


                if (!rows[row][board[row][column]]) {
                    rows[row][board[row][column]] = true;
                } else {
                    return false;
                }

                let rowIndex = row + 3;
                let columnIndex = column + 3;
                let boxRowIndex = Math.floor(rowIndex / 3) - 1;
                let boxColumnIndex = Math.floor(columnIndex / 3) - 1;
                if (!boxes[boxRowIndex][boxColumnIndex][board[row][column]]) {
                    boxes[boxRowIndex][boxColumnIndex][board[row][column]] = true
                } else {
                    return false;
                }
            } 
        }
    }
    
    return true;
};

let input = [
              ["5","3",".",".","7",".",".",".","."],
              ["6",".",".","1","9","5",".",".","."],
              [".","9","8",".",".",".",".","6","."],
              ["8",".",".",".","6",".",".",".","3"],
              ["4",".",".","8",".","3",".",".","1"],
              ["7",".",".",".","2",".",".",".","6"],
              [".","6",".",".",".",".","2","8","."],
              [".",".",".","4","1","9",".",".","5"],
              [".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(input))