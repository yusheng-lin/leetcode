/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    var sum = nums.reduce((a,b) => a+b);
    if (sum%2 === 1) return false;
    var target = sum/2;
    var dp = new Array(target+1);
    dp[0]= true;

    for(var num of nums)
    {
        for(var i=target;i >= num;i--)
        if (dp[i] === undefined && dp[i-num])
            dp[i] = true;   
        if(dp[target]) return true;
    }
    return !!dp[target];
};
// @lc code=end

