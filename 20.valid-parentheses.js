/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map(
        [[')','('],[']','['],['}','{']]
    );
    var stack = [];

    for(var c of s)
    {
        var open = map.get(c);
        
        if (open === undefined)
            stack.push(c);
        else {
            if (open !== stack.pop())
                return false;
        }
    }

    return stack.length === 0;
};
// @lc code=end

