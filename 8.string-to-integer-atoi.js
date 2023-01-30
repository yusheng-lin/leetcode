/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const large = Math.pow(2,31)-1;
    const small = -(large +1);
    s = s.trim();
    var from = 0;
    var isNegtive = false;
    var h = s[0];
    if(!isNum(h))
    {
        if (h === '-') 
        {
            isNegtive = true;
            from = 1;
        }
        else if(h === '+')
            from = 1;
    }

    for(var to = from;to<s.length;to++)
    {
        if(!isNum(s[to]))
            break;
    }
    var final = (isNegtive ? -1 :1) * Number(s.substring(from,to));

    if(final > large) return large;
    if(final < small) return small;
    return final;
};

function isNum(c){
    return c >= '0' && c <= '9';
}
