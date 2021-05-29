// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function(nums) {
    let firstZero = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && firstZero === -1) {
            firstZero = i;
        } 
        else if (nums[i] !== 0 && firstZero !== -1) {
            swap(i, firstZero, nums);
            firstZero++;
        }
    }
    return nums;
};

var swap = function(a,b,nums) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}