// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// O(m + n) time and O(1) space
// start merging from the end not to preserve nums1 so no memory usage

var merge = function(nums1, m, nums2, n) {
    let p = nums1.length - 1;
   while (m > 0 && n > 0) {
      if (nums1[m - 1] > nums2[n - 1]) {
          nums1[p] = nums1[m - 1];
          m--;
          p--;
      }  else {
          nums1[p] = nums2[n - 1];
          n--;
          p--;
      }
   }
    
    while (m > 0) {
      nums1[p] = nums1[m - 1];
          m--;
          p--;
   }
    
    while (n > 0) {
      nums1[p] = nums2[n - 1];
          n--;
          p--;
   }
};