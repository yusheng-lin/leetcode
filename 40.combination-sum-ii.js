/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function( candidates, target ){
    var results = [];
    candidates = candidates.sort((a,b)=> a>b? 1:-1);
    helper(candidates,[],target,0,0,results);
    return results;
};

function helper(candidates, combination, target, sum, index, results)
{
    if (sum === target)
    {
        results.push(combination);
        return;
    }

    var rest = target - sum;

    for(var i=index;i<candidates.length;i++)
    {
        var candidate = candidates[i];
        if (rest < candidate) return;
        if (i !== index && candidate === candidates[i-1]) continue;
        helper(candidates, combination.concat(candidate), target, sum+candidate, i+1, results);
    }
}
// @lc code=end

