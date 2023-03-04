/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   const set = new Set(nums);
   let sum = 0;
   for(let num of set) sum+=num;
   return (sum * 3 - nums.reduce((a,b)=>a+b))/2; 
};
// @lc code=end

