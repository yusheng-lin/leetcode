/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var cache = {};
    var m = Math.floor(nums.length/2);

    for(var num of nums)
    {
        var t = (cache[num] || 0)+ 1;
        if (t > m) return num;
        cache[num] = t;
    }
};
// @lc code=end

