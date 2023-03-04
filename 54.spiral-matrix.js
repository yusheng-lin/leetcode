/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    var dix = 0;
    var x=0,y=0;
    const results = [];
    while(matrix[x] !== undefined && matrix[x][y] !== undefined)
    {
        results.push(matrix[x][y]);
        matrix[x][y] = undefined;
        var dir = dirs[dix];
        var nx = x+dir[0], ny=y+dir[1];
        if (nx >= m || nx < 0 || ny >= n || nx < 0 || matrix[nx][ny] === undefined)
        {
            dix = (dix+1)%4;
            dir = dirs[dix];
            nx = x+dir[0]; 
            ny = y+dir[1];
        }
        x =nx;
        y =ny;
    }
    return results;
};
// @lc code=end

