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
    const masks = {
        'a':1,
        'e':2,
        'i':4,
        'o':8,
        'u':16
    };
    
    var maxlen=0, status=0;
    const states = { 0: -1};
    for(var i=0;i<s.length;i++)
    {
        var c = s[i];
        var mask = masks[c];

        if (mask !== undefined)
        {
            status^=mask;
            
            if (states[status] === undefined)
                states[status] = i;
        }
            
        var len = i - states[status];
        if(len > maxlen) maxlen =len;
    }

    return maxlen;
};
// @lc code=end

