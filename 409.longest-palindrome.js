/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length ===1) return 1;
    var cache = {};
    var count = 0;
    for(var c of s){
        var n = cache[c];
        if (n === undefined)
            n = 1;
        else {
            if (n === 1){
                n=0;
                count++;
            }
            else n=1;
        } 
        cache[c] = n;
    }
    
    var odds = Object.values(cache).some(x => x === 1);

    return count * 2 + (odds ? 1:0);
};
// @lc code=end

