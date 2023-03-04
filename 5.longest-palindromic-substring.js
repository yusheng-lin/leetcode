/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var from=0,to=0;
    
    for(var i=0;i < s.length;i++)
    {
        for(var j=0;j < i-(to - from);j++)
        {
            if(isPalindrome(j,i,s) && (i-j) > (to -from))
            {
                to = i;
                from = j;
            }
        }
    }
    return s.substring(from,to+1);    
};
function isPalindrome(f,e,s)
{
    for(;f <= e;f++,e--)
    {
        if(s[f] !== s[e]) return false
    }
    return true;
}

// @lc code=end

