/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = [];
    dp.length = coins.length+1;
    dp.fill(new Uint32Array(amount+1));
    dp[0][0]=1;

    for(let i=1;i<=coins.length;i++)
    {
        dp[i][0]=1;
        for(var j=1;j<= amount;j++)
        {
            var diff = j - coins[i-1];
            dp[i][j]=dp[i-1][j]+( diff < 0 ? 0: dp[i][diff]);
        }
    }
    return dp[coins.length][amount];
};
// @lc code=end

