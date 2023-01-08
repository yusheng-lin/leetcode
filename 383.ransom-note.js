/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map = Array.prototype.reduce.call(magazine,(col,char) =>{
        var num = col.get(char) || 0;
        col.set(char,num+1);
        return col;
    },new Map);

    for(var c of ransomNote){
        var num = map.get(c);
        if (num === undefined || num === 0) 
            return false;
        map.set(c, num-1);        
    }

    return true;
};
// @lc code=end

