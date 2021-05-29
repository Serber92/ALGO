// time 0(n), space O(1)
// as long as we have max and min we can be sure that level_water = min - current_level


var trap = function(height) {
    let sum = 0;
    let p_left = 0;
    let p_right = height.length - 1;
    
    let right_max = 0;
    let left_max = 0;
    
    while (p_left < p_right) {
        if (height[p_left] < height[p_right]) {
            if (left_max < height[p_left]) {
                left_max = height[p_left];
            } else {
                sum += left_max - height[p_left];
            }
            p_left++;
        } else {
            if (right_max < height[p_right]) {
                right_max = height[p_right];
            } else {
                sum += right_max - height[p_right];
            }
            p_right--;
        }
    }
    
    return sum;
};