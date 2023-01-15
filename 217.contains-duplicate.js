/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = new Map();

    for(var num of nums){
        var c = map.get(num);
        if (c >= 1) return true;
        if (c === undefined)
            c = 0;
        map.set(num,c+1);
    }
    return false;
};
// @lc code=end

