// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// using bit manipulation XOR
var singleNumber = function(nums) {
    let res;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};