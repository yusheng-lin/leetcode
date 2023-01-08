/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   const map = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };

    var sum = map[s[s.length-1]];
    for(var j= s.length-2;j>=0;j--)
    {
        var val = map[s[j]];
        sum += (val >= map[s[j+1]]) ? val: -val;
    }
    return sum;
};
// @lc code=end

