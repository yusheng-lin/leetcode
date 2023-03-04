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
    const results = [0];

    for(var i=1;i<=n;i++){
        var t = i;
        var sum = 0;
        while(t !== 0){
            if (t & 1) sum++
            t = t >> 1;
        }
        results.push(sum);
    }
    return results;
};
// @lc code=end

