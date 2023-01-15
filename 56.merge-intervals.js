/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0] > b[0]? 1:-1);
    var result = [];
    var prev = intervals[0]
    
    for(var i=1;i < intervals.length;i++)
    {
        var interval = intervals[i];        
        if(prev[1] >= interval[0])
            var interval = [prev[0], Math.max(prev[1], interval[1])];
        else
            result.push(prev);
        prev = interval;
    }
    result.push(prev);
    return result;
};
// @lc code=end

