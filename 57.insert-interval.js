/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    var result = [];

    for(var i=0; i< intervals.length;i++)
    {
        var interval = intervals[i];
        if (interval[1] < newInterval[0])
            result.push(interval)
        else
            break;
    }

    for(;i < intervals.length;i++)
    {
        var interval = intervals[i];

        if (interval[0] <= newInterval[1])
        {
            newInterval[0] = Math.min(interval[0],newInterval[0]);
            newInterval[1] = Math.max(interval[1],newInterval[1]);
        }
        else{
            break;
        }
    }

    result.push(newInterval);

    for(;i < intervals.length;i++)
    {
        result.push(intervals[i]);
    }

    return result;
};
// @lc code=end

