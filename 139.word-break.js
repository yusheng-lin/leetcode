/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp =[-1];

    for(var i=0;i<s.length;i++)
    {
        for(var j=dp.length-1;j >=0;j--)
        {
            var sub = s.substring(dp[j]+1,i+1);
            if (wordDict.includes(sub)){
                dp.push(i);
                break;
            }
        }
    }
    return dp.pop() === (s.length -1);
};
// @lc code=end

