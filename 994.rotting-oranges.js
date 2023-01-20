/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    var h = grid.length, w = grid[0].length;
    var qu = [];
    var freshes = 0;

    for(var i=0;i< h;i++)
    {
        for(var j=0;j<w;j++)
        {
            switch(grid[i][j])
            {
                case 1:freshes++;break 
                case 2:qu.push([i,j]); break;
            }
        }
    }
    var timse = 0;
    while(qu.length > 0)
    {
        var len = qu.length;
        while(len-- > 0)
        {
            var [x, y] = qu.shift();
            for(var [nx, ny] of dirs)
            {
                nx+=x; ny+=y;
                if (nx < 0 || ny < 0 || nx === h || ny === w || grid[nx][ny] !== 1)
                    continue;
                grid[nx][ny] = 2;
                freshes--;
                qu.push([nx,ny]);
            }
        }
        timse++
    }
    if (freshes > 0) return -1;
    return timse > 0 ? timse-1 : 0;
};
const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
// @lc code=end

