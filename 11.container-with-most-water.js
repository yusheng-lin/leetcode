/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var left = 0, right = height.length-1;
    
    while(right > left)
    {
        var w = right - left;
        var h = Math.min(height[left],height[right]);
        var area = w * h;
        if (area > max) max = area;
        var move = height[right] > height[left];
        if (move) left++;
        else right --;
    }
    return max;
};
// @lc code=end

