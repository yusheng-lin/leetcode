/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var jump = true;

    for(var i=digits.length-1;i>=0;i--){
        if (jump){
            var d = digits[i];
            d = d+1;
            if (d >= 10)
                digits[i]=0;
            else
            {
                digits[i] = d;
                jump = false;
                break;
            }  
        }
    }

    return jump ? [1].concat(digits) : digits;
};
// @lc code=end

