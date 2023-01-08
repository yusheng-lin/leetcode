/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var h=0;
    
    for(var num of nums)
    {
        if (num !== val){
            nums[h] = num;
            h++;
        }
    }
    return h;
};
// @lc code=end

