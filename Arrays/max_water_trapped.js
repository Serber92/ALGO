// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.


var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let max = - Infinity;
    
    while (start < end) {
        
        let h = Math.min(height[start], height[end]);
        let x = end - start;
        let area = h * x;
        
        max = Math.max(max, area);
        
        // next step
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    
    return max;
};