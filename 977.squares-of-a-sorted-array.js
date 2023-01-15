/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums.forEach((e,i,arr)=>{
        arr[i] = e*e;
    });

    nums.sort((a,b)=>a>b?1:-1);
    return nums;
};
// @lc code=end

