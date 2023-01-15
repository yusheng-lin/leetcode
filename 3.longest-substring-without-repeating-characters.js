/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var str = '';
    var max = 0;
    for (var c of s){
        var idx = str.indexOf(c);
        if (idx > -1){
            str = str.substring(idx+1);
        }
        str+=c;
        if (str.length > max) max = str.length;  
    }
    return max;
};
// @lc code=end

