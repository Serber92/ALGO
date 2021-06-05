// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {

    let collection = {}
    
    for (let i1 = 0; i1 < nums.length; i1++) {
        let hash = {};
        for (let i2 = i1 + 1; i2 < nums.length; i2++) {
            let target3 = ((-1) * (nums[i1])) - nums[i2];
            if (hash[target3] !== undefined) {
                let a = nums[i1];
                let b = nums[i2];
                let c = nums[hash[target3]];
                let hashString = [a,b,c].sort((a,b) => a - b);
                hashString.join("");
                collection[hashString] = [a,b,c];
            } else {
               hash[nums[i2]] = i2;
            }
        }
    }
    
    return Object.values(collection);
}