/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var h = grid.length, w = grid[0].length;
    var mark = 0;
    for(var i =0; i< h; i++){
        for(var j=0;j<w;j++){
            if (grid[i][j] === '1'){
                mark += 1;
                dfs(i,j,h,w,grid);
            }                
        }
    }
    return mark;
};
const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

function dfs(i,j,h,w,grid){
    grid[i][j] = -1;
    
    for(var [x,y] of dirs){
        x = i+x, y = j+y;
        if (x < 0 || y < 0 || x == h || y == w || grid[x][y] !== '1')  
            continue;
        dfs(x,y,h,w,grid);    
    }
}
// @lc code=end

