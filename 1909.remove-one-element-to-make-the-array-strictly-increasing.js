/*
 * @lc app=leetcode id=1909 lang=javascript
 *
 * [1909] Remove One Element to Make the Array Strictly Increasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
   var len = lis(nums);
   return nums.length - len < 2;
};

function lis(nums)
{
    var dp = new Array(nums.length);
    dp.fill(1);
    var max = 0;
    for(var i =1; i< nums.length;i++)
    {
        var num = nums[i];

        for(var j=0; j < i; j++){
            if (num > nums[j])
                dp[i] = Math.max(dp[i], dp[j]+1);
        }
        if (dp[i] > max)
            max = dp[i];
    }
    return max;
}
// @lc code=end

