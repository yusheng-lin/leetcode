/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") return [];
    const map = new Map(
        [
            ['2','abc'],
            ['3','def'],
            ['4','ghi'],
            ['5','jkl'],
            ['6','mno'],
            ['7','pqrs'],
            ['8','tuv'],
            ['9','wxyz'],
        ]
    );

    const results = [];
    
    const fn = function(c, id){
        if (id === digits.length)
        {
            results.push(c);
            return;
        }

        var d = digits[id];
        
        for(var e of map.get(d))
        {
            fn(c + e, id+1);
        }
    }

   fn('',0);
   return results;
};
// @lc code=end

