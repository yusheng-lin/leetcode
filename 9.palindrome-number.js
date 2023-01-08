/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = String(x);
    
    for(var i=0,j=str.length-1; i<=j;i++,j--)
    {
        if(str[i]!==str[j]) return false;
    }
    return true;
};
// @lc code=end

