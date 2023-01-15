/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr = arr.sort((a,b) => a > b ? 1:-1);
    var result =[[arr[0],arr[1]]];
    var diff = arr[1]-arr[0];
    
    for(var i=1; i< arr.length-1;i++){
        var d = arr[i+1] - arr[i];
        if (d > diff) continue;
        if (d < diff){
            result =[];
            diff = d;
        }
        result.push([arr[i],arr[i+1]])
    }
    return result;
};
// @lc code=end

