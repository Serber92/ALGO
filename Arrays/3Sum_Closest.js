// Given an array nums of n integers and an integer target, 
// find three integers in nums such that the sum is closest to target. 
// Return the sum of the three integers. 
// You may assume that each input would have exactly one solution.

const threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let minDiff = Infinity;
    let sum;
    
    for (let i1 = 0; i1 < nums.length - 2; i1++) {
        let start = i1 + 1;
        let end = nums.length - 1;
        
        while (start < end) {
            let currSum = nums[i1] + nums[start] + nums[end];
            let currDiff = Math.abs(currSum - target);
            if (minDiff > currDiff) {
                minDiff = currDiff;
                sum = currSum;
            }
            if (currSum > target) {
                end--;
            } else {
                start++;
            }
        }
    }
    
    return sum;
};