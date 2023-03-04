/*
 * @lc app=leetcode id=1371 lang=javascript
 *
 * [1371] Find the Longest Substring Containing Vowels in Even Counts
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const vowels = {
        'a':1,
        'e':2,
        'i':4,
        'o':8,
        'u':16
    };

    let max = 0;
    let status = 0;
    const dp = new Map();
    dp.set(0,-1);
    for(var i=0;i < s.length; i++)
    {
        let c = s[i];
        let num = vowels[c];
        if(num){
            status^=num;
            let fisrt = dp.get(status);
            if(fisrt === undefined){
                dp.set(status,i)
            }
        }
        max = Math.max(i-dp.get(status),max);
    }

    return max;
};
// @lc code=end

