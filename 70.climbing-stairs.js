/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var cache = [1,1,2];
var climbStairs = function(n) {
    var num = cache[n];

    if(num) return num;
    num = climbStairs(n-2)+ climbStairs(n-1);
    cache[n] = num;
    return num;
};

