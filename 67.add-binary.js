/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var [l,s] = a.length > b.length ? [a,b]: [b,a];
    var jump = false;
    var arr = l.split('');
    for(var i=s.length-1,j= l.length-1; i >=0 ;i--,j--)
    {
        var sum = Number(arr[j])+ Number(s[i]) + (jump ? 1:0);
        if (sum >= 2){
            jump = true;
            arr[j] = sum -2;
        }
        else
        {
            arr[j]=sum;
            jump = false;  
        }     
    }

    for(;j >=0; j--)
    {
        if(!jump) break;
        else
        {
            if(arr[j] === '1')
                arr[j]='0';
            else{
                arr[j]='1';
                jump = false;
            }
        }
    }

    var l = arr.join('');
    return jump ? '1'+ l : l;
};
// @lc code=end

