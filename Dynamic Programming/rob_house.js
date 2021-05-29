// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


// without memoization 
// f(i) = max(f(i+1), f(i+2) + nums[i])
var rob = function(nums) {
    
    var scan = function(i) {
        if (i > nums.length - 1) {
            return 0;
        }
        return Math.max(scan(i+1), scan(i+2) + nums[i]);                       
    }
    
    return scan(0);
};

// with memoization 
// O(n) - time and space
var rob = function(nums) {
    
    let memo = {};
    
    var scan = function(i) {
        if (i > nums.length - 1) {
            return 0;
        }
        if (memo[i] === undefined) {
            memo[i] = Math.max(scan(i+1), scan(i+2) + nums[i]);
        }
        return memo[i];                     
    }
    
    return scan(0);
};

// dynamic programming
// O(n) - time and space
var rob = function(nums) {
    
    let table = [];
    table[nums.length] = 0;
    table[nums.length - 1] = nums[nums.length - 1];
    
    for (let i = nums.length - 2; i >= 0; i--) {
        table[i] = Math.max(table[i+1], table[i+2] + nums[i]);
    }
    
    return table[0]
};

// dynamic programming optimized
// O(n) - time and O(1) - space
// using pointers instead of table
var rob = function(nums) {
    
    if (nums.length < 3) {
        return Math.max(nums[0] ? nums[0] : 0, nums[1] ? nums[1] : 0);
    }
    
    let p2 = 0;
    let p1 = nums[nums.length - 1];
    let res;
    
    for (let i = nums.length - 2; i >= 0; i--) {
       res = Math.max(p1, p2 + nums[i]);
        p2 = p1;
        p1 = res;
    }
    
    return res
};