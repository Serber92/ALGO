// Given an unsorted integer array nums, find the smallest missing positive integer.
// can solve with object {}
// but to have O(1) memory need to use hash map and set positive numbers to negative at index if visited
// then fist positive number in arr will be smallest missing number
// use index 0 for number === arr.length since all numbers are > 0

var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            break;
        }
        if (i === nums.length - 1) {
            return 1;
        }
    }
    
    if (nums.length === 1) {
        return 2;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 1 || nums[i] > nums.length) {
            nums[i] = 1;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) === nums.length) {
            if (nums[0] > 0) {
                 nums[0] = -nums[0];   
            }
        }
        else if (nums[Math.abs(nums[i])] > 0) {
            nums[Math.abs(nums[i])] = -1 * nums[Math.abs(nums[i])];
        }
    }
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i;
        }
        if (i === nums.length - 1) {
            if (nums[0] > 0) {
                return nums.length;
            }
            return nums.length + 1;
        }
    }
};