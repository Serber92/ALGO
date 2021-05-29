// Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.
// with heap too much memory ...
// optimization https://www.geeksforgeeks.org/k-th-smallest-absolute-difference-two-elements-array/

var smallestDistancePair = function(nums, k) {
    nums.sort((a,b) => a -b);
    let lowDiff = nums[1] - nums[0];
    let highDiff = nums[nums.length - 1] - nums[0];
    
    for (let i = 0; i < nums.length - 1; i++) {
        lowDiff = Math.min(lowDiff, nums[i+1] - nums[i]);
    }
    
    while(lowDiff < highDiff) {
        let middle = Math.floor((lowDiff + highDiff) / 2);
        let lessDiffThanMiddle = countLessDiffThanMiddle(nums, middle);
        if (lessDiffThanMiddle < k) {
            lowDiff = middle + 1;
        } else {
            highDiff = middle;
        }
    }
    
    return lowDiff;
};

var upperBound = function(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (arr[middle] === target) {
            while(arr[middle] === arr[middle + 1]) {
                middle++;
            }
            return middle;
        }
        else if (arr[middle] > target) {
            end = middle - 1;
        }
        else if (arr[middle] < target) {
            start = middle + 1;
        }
    }
    
    if (end === -1) {
        return 0;
    }
    return end;
}

var countLessDiffThanMiddle = function(arr, middle) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += upperBound(arr.slice(i), middle + arr[i]);
    }
    return total;
}