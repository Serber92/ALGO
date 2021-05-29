// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Kadane's Algorithm
var maxSubArray = function(nums) {
    let start = 0;
    let end = 1;
    let sum = nums[start];
    let maxSum = sum;
    
    while (end < nums.length) {
        if (sum < 0) {
          // reset
            start = end;
            sum = nums[start];
        } else {
          // keep
            sum += nums[end];
        }
        
        if (sum > maxSum) {
            maxSum = sum;
        }
        
        end++;
    }
    
    return maxSum;
};