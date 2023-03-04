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
    const results = [];
    
    const func = function(c, other)
    {
        results.push(c);
        
        while(other.length > 0)
        {
            var next = other.shift();
            func(c.concat(next), other.slice());
        }
    };
    func([],nums);
    return results;
};
// @lc code=end

