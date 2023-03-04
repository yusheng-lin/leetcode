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
    var vists = [-1];

    for (var i = 0; i < s.length;i++)
    {
        for(var j=vists.length-1; j>=0;j--)
        {
            var str = s.substring(vists[j]+1,i+1);

            if (wordDict.includes(str)){
                vists.push(i);
                break;
            }
        }
    }
    return vists[vists.length-1] === s.length-1;
};
// @lc code=end

