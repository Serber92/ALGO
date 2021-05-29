// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
var missingNumber = function(nums) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i];
    }
    sum2 = nums.length * (nums.length + 1) / 2; // Gauss Formula
    
    return sum2 - sum1;
};