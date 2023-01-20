/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var from =0, to = nums.length-1;
    var pivot = getPivot(nums);
    var max = nums[pivot];
    
    if (target > max) return -1;
    if (target === max) return pivot;
    if (to >= pivot+1 && target <= nums[to]) return helper(nums,pivot+1,to,target);
    if (pivot-1 >= from && target >= nums[from]) return helper(nums,from,pivot-1,target);
    return -1;
};

function helper(nums,from,to,target)
{
    if(from > to) return -1; 
    var mid = Math.trunc((from + to)/2);
    var num = nums[mid];
    if(num === target) return mid;
    return target > num ? helper(nums,mid+1,to,target) : helper(nums,from,mid-1,target);
}

function getPivot(nums){
   if (nums.length === 1) return 0; 
   
   for(var i=1;i<nums.length;i++)
   {
      if(nums[i] < nums[i-1]) return i-1;
   }

   return i-1;
}

// @lc code=end

