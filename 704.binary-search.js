/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return helper(nums,0, nums.length-1, target);
};

function helper(nums, from, to, target){
    var mid = Math.floor((from+to)/2);

    if (nums[mid] === target) return mid;

    if (mid > from && nums[from] <= target && nums[mid] >= target)
        return helper(nums, from, mid-1, target);

    if (to > mid && nums[mid] <= target && nums[to] >= target)
        return helper(nums, mid+1, to, target);
    return -1;
}

// @lc code=end

