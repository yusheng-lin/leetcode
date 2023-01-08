/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    var compare = strs[0];
    while(true)
    {
        var all = true
        for(var i=1;i<strs.length;i++)
        {
            if(!strs[i].startsWith(compare))
            {
                all = false;
                break;
            }
        }
        if (all) return compare;
        compare = compare.substring(0,compare.length-1);
        if (compare === '') return '';
    }
};
// @lc code=end

