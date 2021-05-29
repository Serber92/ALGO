// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

var searchRange = function(nums, target) {
    if (!nums.length) {
        return [-1,-1];
    }
    
    let result = [];
    let start = 0; 
    let end = nums.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (nums[middle] === target) {
            if (nums[middle - 1] === target) {
                end = middle - 1;
            } else {
                let endOfRange = findEnd(nums, middle);
                return [middle, endOfRange];
            }
        } else {
            if (nums[middle] > target) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
    }
    
    return [-1,-1];
};

var findEnd = function(nums, start) {
    let target = nums[start];
    while (nums[start] === target && start !== nums.length + 1) {
        start++;
    }
    return start - 1;
}