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
const dirs= [[1,0],[-1,0],[0,1],[0,-1]];
var numIslands = function(grid) {
    const h = grid.length, w = grid[0].length;
    let counts = 0;

    for(let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            if(grid[i][j]==='1'){
                counts++;
                dfs(i,j);
            }
        }
    }

    return counts;

    function dfs(x,y){
        grid[x][y] = '0';
        for(let dir of dirs){
            let nx = x+dir[0], ny = y+dir[1];
            if(nx < 0 || ny < 0 || nx === h || ny === w || grid[nx][ny] !=='1')
                continue;
            dfs(nx,ny);        
        }
    }
};
// @lc code=end

