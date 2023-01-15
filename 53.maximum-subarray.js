/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    var sum =nums[0];
    var max =nums[0];
    for(var i =1; i< nums.length; i++)
    {
        var num = nums[i];
        if(num > sum+num) sum = num;
        else
        {
            sum+=num;
        }
        if (sum > max) max = sum;
    }
    return max;
};
// @lc code=end

