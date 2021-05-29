// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        
        while(start < end) {
            let middle = Math.floor((start + end)/2);
            if (isBadVersion(middle)) {
                end = middle;
            } else {
               start = middle + 1; 
            }
        }
        
        // start === end
        return start;
    };
};



// A peak element is an element that is strictly greater than its neighbors.
// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞.

var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        
        if (nums[middle] > nums[middle + 1] || nums[middle + 1] === undefined) {
            end = middle;
        }
        else {
            start = middle + 1;
        }
    }
    
    // start === end
    return start;
};


// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    
    if (nums.length === 1) {
        return nums[0];
    }
    
    if (nums[end] > nums[start]) {
        return nums[start];
    }
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (nums[middle] > nums[middle + 1]) {
            return nums[middle + 1];
        }
        else if (nums[middle - 1] > nums[middle]) {
            return nums[middle];
        }
        else if (nums[middle] > nums[0]) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    
};