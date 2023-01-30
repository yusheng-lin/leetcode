/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var col = [];
    for(var num of nums)
    {
        if(col[num] === undefined) col[num] = 0;
        col[num]+= 1;
    }
    col.reduce((idx,times,num)=>{
        while(times > 0){
            nums[idx] = num;
            times--;
            idx++;
        }
        return idx;
    },0);
};
// @lc code=end

