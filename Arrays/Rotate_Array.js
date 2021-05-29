// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Optimization time O(n), space O(1)
var rotate = function(nums, k) {
    if (nums.length < 2) {
        return nums;
    }
    
    k = k % nums.length;
    
    myReverse(nums, 0, nums.length - 1);
    myReverse(nums, 0, k - 1);
    myReverse(nums, k, nums.length - 1);
    return nums;
};

var myReverse = function(arr, start, end) {
    while (start < end) {
        swap(arr, start, end);
        start++;
        end--;
    }
}

var swap = function(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}