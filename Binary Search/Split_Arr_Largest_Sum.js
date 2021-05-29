/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    if (m === 1) {
        return arrTotalSum(nums);
    }
    
    let arrs = [nums];
    
    for (let i = 1; i < m; i++) {
        let maxArrIndex = findMaxArr(arrs);
        let arrToSplit = arrs[maxArrIndex];
        let avoidIndexes = [];
        while(arrToSplit.length === 1) {
            avoidIndexes.push(maxArrIndex);
            maxArrIndex = findMaxArr(arrs, avoidIndexes);
            arrToSplit = arrs[maxArrIndex];
        }
        let middle = findMiddle(arrToSplit);
        let arrLeft = arrToSplit.slice(0, middle + 1);
        let arrRight = arrToSplit.slice(middle + 1, nums.length);
        arrs.splice(maxArrIndex, 1, arrLeft, arrRight);
        
        if (i === m - 1) {
            maxArrIndex = findMaxArr(arrs);
            return arrTotalSum(arrs[maxArrIndex])
        }
    }
};

var findMaxArr = function(arrs, avoidIndex = []) {
    let maxSum = - Infinity;
    let maxLength = - Infinity;
    let index = 0;
    for (let i = 0; i < arrs.length; i++) {
        let currSum = arrTotalSum(arrs[i]);
        if (currSum > maxSum) {
            if (avoidIndex.length) {
                if (!avoidIndex.includes(i)) {
                    maxSum = currSum;
                    maxLength = arrs[i].length;
                    index = i;
                }
            } else {
                maxSum = currSum;
                maxLength = arrs[i].length;
                index = i;
            }
        }
        if (currSum === maxSum) {
           if (maxLength < arrs[i].length) {
               if (avoidIndex.length) {
                    if (!avoidIndex.includes(i)) {
                        index = i;
                    }
                } else {
                    index = i;
                }
           }
        }
    }
    return index;
}

var findMiddle = function(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (true) {
        let middle = Math.floor((start + end) / 2);
        
        let middleSum = maxSum(arr, middle);
        let leftSum = maxSum(arr, middle - 1);
        let rightSum = maxSum(arr, middle + 1);
        
        if (middleSum <= leftSum && middleSum <= rightSum) {
            return middle;
        }
        else if (leftSum < middleSum && leftSum < rightSum) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }
}

var maxSum = function(arr, middle) {
    let leftSum = arrSum(arr, 0, middle);
    let rightSum = arrSum(arr, middle + 1, arr.length - 1);
    return Math.max(leftSum, rightSum);
}

var arrSum = function(arr, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += arr[i];
    }
    return sum;
}

var arrTotalSum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

