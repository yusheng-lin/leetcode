/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = [0];
    for(let i = 1; i <=n; i++) 
    {
        var t = i;
        var c = 0;
        while(t){
            if (t & 1 === 1) c++;
            t = t >>> 1;            
        }
        arr[i] = c;    
    }
    return arr;
};
// @lc code=end

