/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      if (n === 1) return 1;
      return search(1,n);
    };

    function search(from ,to){
        var mid = Math.floor((from + to)/2);
        var isbad = isBadVersion(mid);
        if (isbad)
        {
            if (from === mid) return from;
            return search(from, mid-1);
        }
        else
        {
            /* 走錯 */
            if (mid === to) return to+1; 
            return search(mid+1, to); 
        }
    }
};
// @lc code=end

