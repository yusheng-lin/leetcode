/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let sum = 0;
    
    for(let i=0;i<32;i++){
       sum = sum * 2 + (n & 1);
       n = n >>> 1;
    }

    return sum;
};
// @lc code=end

