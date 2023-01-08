/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
   var compare = image[sr][sc];
   helper(image, compare, sr, sc, color);
   return image; 
};

function helper(image, c, sr, sc, color)
{
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const rlen = image.length, clen= image[0].length;
    var p = image[sr][sc];

    if (p === color || p !== c) return;

    image[sr][sc] = color;

    for(var dir of dirs)
    {
        var x = sr + dir[0];
        var y = sc + dir[1];

        if(x >= 0 && rlen > x && y >= 0 && clen > y)
        helper(image, c, x, y, color);
    }
};


// @lc code=end

