/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var memo = new Map();
    var fn = function(i){
        if (i === 0) return nums[0];
        if (i === 1) return Math.max(nums[0],nums[1]);
        var val = memo.get(i);
        if (val === undefined) {
            val = Math.max(nums[i] + fn(i-2), 0 + fn(i-1));
            memo.set(i,val);
        }
        return val;
    }

    return fn(nums.length-1);
};
// @lc code=end

