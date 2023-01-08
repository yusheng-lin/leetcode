/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    const records = [0];
    records.length = amount + 1;
    coins.sort((a,b) => a > b ? 1:-1);
    for(var i=1;i <= amount;i++)
    {
        for(var coin of coins)
        {
            if(i < coin) break;
            var step = records[i-coin];
            if(step === undefined) continue;
            step +=1;
            var min = records[i];
            if(min === undefined || min > step)
                records[i] = step;   
        }
    }
    return records[amount] || -1;
};
// @lc code=end

