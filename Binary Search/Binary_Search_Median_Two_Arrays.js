// Brute force - merge arrays and then find median

// optiomized O(log(n))
// https://www.youtube.com/watch?v=LPFhl65R7ww&t=357s

var findMedianSortedArrays = function(nums1, nums2) {
    let totalHalf = Math.floor((nums1.length + nums2.length + 1) / 2);
    
    if (nums1.length < nums2.length) {
        let start = 0;
        let end = nums1.length - 1;
        
        while (start <= end) {
            let partition1;
            if (nums1.length === 1) {
                partition1 = 1;
            } else {
                partition1 = Math.floor((start + end) / 2);
            }
            let partition2 = totalHalf - partition1;
            
            let left1Index = partition1 - 1;
            let right1Index = partition1;
            
            let left2Index = partition2 - 1;
            let right2Index = partition2;
            
            let left1;
            let right1;
            let left2;
            let right2;
            
            if (nums1[left1Index] === undefined) {
                left1 = -Infinity;
            } else {
                left1 = nums1[left1Index];
            }
            if (nums1[right1Index] === undefined) {
                right1 = Infinity;
            } else {
                right1 = nums1[right1Index];
            }
            if (nums2[left2Index] === undefined) {
                left2 = -Infinity;
            } else {
                left2 = nums2[left2Index];
            }
            if (nums2[right2Index] === undefined) {
                right2 = Infinity;
            } else {
                right2 = nums2[right2Index];
            }
            
            if ((left1 <= right2) && (right1 >= left2)) {
                // this is the partition
                if ((nums1.length + nums2.length) % 2 === 0) {
                    return (Math.max(left1, left2) + Math.min(right1, right2)) / 2
                } else {
                    return Math.max(left1, left2);
                }
            }
            else if (left1 > right2) {
                end = partition1 - 1;
            }
            else {
                start = partition1 + 1;
            }
        }
    } else {
        let start = 0;
        let end = nums2.length - 1;
        
        while (start <= end) {
            let partition2;
            if (nums2.length === 1) {
                partition2 = 1;
            } else {
                partition2 = Math.floor((start + end) / 2);
            }
            let partition1 = totalHalf - partition2;
            
            let left2Index = partition2 - 1;
            let right2Index = partition2;
            
            let left1Index = partition1 - 1;
            let right1Index = partition1;
            
            let left1;
            let right1;
            let left2;
            let right2;
            
            if (nums1[left1Index] === undefined) {
                left1 = -Infinity;
            } else {
                left1 = nums1[left1Index];
            }
            if (nums1[right1Index] === undefined) {
                right1 = Infinity;
            } else {
                right1 = nums1[right1Index];
            }
            if (nums2[left2Index] === undefined) {
                left2 = -Infinity;
            } else {
                left2 = nums2[left2Index];
            }
            if (nums2[right2Index] === undefined) {
                right2 = Infinity;
            } else {
                right2 = nums2[right2Index];
            }
            
            if ((left2 <= right1) && (right2 >= left1)) {
                // this is the partition
                if ((nums1.length + nums2.length) % 2 === 0) {
                    return (Math.max(left1, left2) + Math.min(right1, right2)) / 2
                } else {
                    return Math.max(left1, left2);
                }
            }
            else if (left2 > right1) {
                end = partition2 - 1;
            }
            else {
                start = partition2 + 1;
            }
        }
    }
};