// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

var intersection = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let set = {};
    let res = [];
    
    if (nums1.length < nums2.length) {
        for (let i = 0; i < nums1.length; i++) {
            set[nums1[i]] = true;
        }
        
        for (let key in set) {
            if (BS(nums2, parseInt(key))) {
                res.push(parseInt(key));
            }
        }
    } else {
        for (let i = 0; i < nums2.length; i++) {
            set[nums2[i]] = true;
        }
        
        for (let key in set) {
            if (BS(nums1, parseInt(key))) {
                res.push(parseInt(key));
            }
        }
    }
    
    return res;
};

var BS = function(arr,t) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (arr[middle] === t) {
            return true;
        }
        else if (arr[middle] < t) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    
    return false;
}