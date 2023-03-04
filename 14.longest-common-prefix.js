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
    let first = strs[0];

    while(first.length > 0)
    {
        let matches = 0;

        for(let i=1;i<strs.length;i++)
        {
            const str = strs[i];
            if (str.startsWith(first))
                matches++;
        }
        if (matches === strs.length-1)
            return first;
        first =first.substring(0,first.length-1);
    }

    return '';
};
// @lc code=end

