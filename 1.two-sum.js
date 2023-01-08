/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = {
    };
    cache[nums[0]] = 0;
    
    for(var i=1;i< nums.length;i++){
        var rest = target - nums[i];
        var idx = cache[rest];
        if (idx !== undefined){
            return [idx, i];
        }else {
            cache[nums[i]] = i;
        }
    }
};


