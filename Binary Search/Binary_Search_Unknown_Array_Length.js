// Given an integer array sorted in ascending order, write a function to search target in nums.  If target exists, then return its index, otherwise return -1. However, the array size is unknown to you. You may only access the array using an ArrayReader interface, where ArrayReader.get(k) returns the element of the array at index k (0-indexed).
// You may assume all integers in the array are less than 10000, and if you access the array out of bounds, ArrayReader.get will return 2147483647.

var search = function (reader, target) {
    let start = 0;
    let end = 1;
    
    if (reader.get(start) === 2147483647) {
        return -1;
    }
    
    while (target > reader.get(end)) {
        if (target === reader.get(end)) {
            return end;
        }
        end *= 2;
    }
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (reader.get(middle) === target) {
            return middle;
        }
        else if (reader.get(middle) < target) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    
    return -1;
};