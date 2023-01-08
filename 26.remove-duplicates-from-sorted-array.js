/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var h = 1, val = nums[0];
    
    for (var i = 1; i < nums.length;i++){
        var num = nums[i];
        if (num !== val)
        {
            nums[h] = num;
            val = num;
            h++;
        }
    }
    return h;
};
// @lc code=end

