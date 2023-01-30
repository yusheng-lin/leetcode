/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const results =[];
    helper([],nums,results);
    return results;
};

function helper(each, rest ,results)
{
    results.push(each);
    
    while(rest.length > 0)
    {
        helper(each.concat(rest.shift()), rest.slice(), results);
    }
}
// @lc code=end

