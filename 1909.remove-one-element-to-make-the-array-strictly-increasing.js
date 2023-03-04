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
    var maxlen = lis(nums);
    return nums.length - maxlen < 2;
};

function lis(nums){
    let max = 0;
    const dp = new Array(nums.length);
    dp.fill(1);

    for(let i=1;i<nums.length;i++)
    {
        const num = nums[i];

        for(let j=0;j<i;j++)
        {
            if (num > nums[j])
                dp[i] = Math.max(dp[j] + 1 , dp[i]);
        }

        if(dp[i] > max) max = dp[i];
    }
    return max;
}

// @lc code=end

