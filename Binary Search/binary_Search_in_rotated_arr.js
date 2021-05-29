// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

var search = function(nums, target) {
    let peak = findPeak(nums);
    let start;
    let end;
    
    if (target === nums[peak]) {
        return peak;
    }
    
    if (target < nums[0] && peak !== nums.length) {
        start = peak + 1;
        end = nums.length - 1;
    } else {
        start = 0;
        end = peak -1;
    }
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    
    return -1;
};

var findPeak = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if ((nums[middle] > nums[middle + 1] && nums[middle + 1] !== undefined) || (middle === nums.length - 1)) {
            return middle;
        } else {
            if (nums[middle] < nums[start]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
    }
}