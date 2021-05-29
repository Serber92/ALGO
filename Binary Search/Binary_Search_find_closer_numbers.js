// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

var findClosestElements = function(arr, k, x) {
    let start = 0;
    let end = arr.length - 1;
    let middle;
    
    while (start < end) {
        middle = Math.floor((start + end) / 2);
        
        if(end === start || end - start === 1) {
            if (Math.abs(arr[start] - x) <= Math.abs(arr[end] - x)) {
                middle = start;
            } else {
                middle = end;
            }
            break;
        }
        else if (arr[middle] === x) {
            break;
        }
        else if (arr[middle] < x) {
            start = middle;
        }
        else if (arr[middle] > x) {
            end = middle;
        }
    }
    
    if (!middle) {
        middle = Math.floor((start + end) / 2);
    }
    
    let left = middle;
    let right = middle;
    for (let i = 0; i < k - 1; i++) {
        if (left > 0 && right < arr.length - 1) {
            if (Math.abs(arr[left - 1] - x) <= Math.abs(arr[right + 1] - x)) {
                left--;
            } else {
                right++;
            }
        }
        else if (left === 0 && right < arr.length - 1) {
            right++;
        }
        else if (left > 0 && right === arr.length -1){
            left--;
        }
    }
    
    if (left === right) {
        return [arr[left]];
    }
    return arr.slice(left, right + 1);
};