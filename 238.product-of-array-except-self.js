/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var backs =[];
    var sum = 1;
    for(var i=nums.length-1;i>=0;i--)
    {
        sum *= nums[i];
        backs[i]=sum; 
    }

    sum = 1
    for(var i=0;i<nums.length;i++)
    {
        backs[i] = sum * (i < nums.length-1 ? backs[i+1] : 1);
        sum *= nums[i];
    }
    return backs;
};
// @lc code=end

