
// Process the first k elements separately to initiate the deque.

// Iterate over the array. At each step :

// Clean the deque :

// Keep only the indexes of elements from the current sliding window.

// Remove indexes of all elements smaller than the current one, since they will not be the maximum ones.

// Append the current element to the deque.

// Append deque[0] to the output.

// Return the output array.


class DQ {
    constructor(nums, k){
        this.dq = [];
        this.nums = nums;
        this.k = k;
    }
    
    cleanQ(index) {
        if (this.dq.length) {
            if (this.dq[0] === index - this.k) {
                this.dq.shift();
            }

            while(this.nums[this.dq[this.dq.length - 1]] < this.nums[index] ) {
                this.dq.pop();
            }
        }
    }
}

var maxSlidingWindow = function(nums, k) {
   if (!nums.length) {
       return [];
   }
    if (nums.length === 1) {
        return nums;
    }
    
    let dq = new DQ(nums, k);
    let max = 0;
    let result = [];
    
    for (let i = 0; i < k; i++) {
        dq.cleanQ(i);
        dq.dq.push(i);
        if (nums[i] > nums[max]) {
            max = i;
        }
    }
    result.push(nums[max]);
    
    for (let i = k; i < nums.length; i++) {
        dq.cleanQ(i);
        dq.dq.push(i);
        result.push(nums[dq.dq[0]]);
    }
    
    return result;
};