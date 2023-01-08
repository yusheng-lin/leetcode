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
var cache = [];
var countBits = function(n) {
    var result = [];
    for(var i=0; i <=n; i++)
    {
        var num = cache[i];
        if (num == undefined) 
        {
            num = help(i);
            cache[i] = num;
        }
        result.push(num)
    }
    return result;
};

function help(n){
    var sum = 0;
    while(n > 0){
        var r = n%2;
        sum+=r;
        n = n >> 1;
    }
    return sum;
}
// @lc code=end

