// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

// using single linked list and tortoise and hare approach
// traverse array like t = nums[t]
// if h catches t then it's a loop
// phase 2 is to find loop entrance which will be dulicate number

var findDuplicate = function(nums) {
    let t = 0;
    let h = 0;
    let phase1 = true;
    
    while (true) {
      t = nums[t];
        
        if (phase1) {
            h = nums[nums[h]];
        } else {
            h = nums[h];
        }
      
      if (t === h && phase1) {
          phase1 = false;
          t = 0;
      }
        
        if (t === h && !phase1) {
            return t;
        }
    }
};