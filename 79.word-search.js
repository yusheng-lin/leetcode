/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const h = board.length, w = board[0].length;
    var found = false;
    const dfs = function(x,y,id){
        if (id === word.length-1)
        {
            found = true;
            return;
        }
        board[x][y]=''; 
        for(var dir of dirs)
        {
            var nx = x+ dir[0], ny = y + dir[1];
            if (nx < 0 || ny < 0 || nx === h || ny === w)
                continue;
            if (board[nx][ny] === word[id+1])
            {
               dfs(nx,ny,id+1);
            }
        }
        board[x][y]=word[id];
    };
    
    for(var i=0;i<h;i++)
    {
        for(var j=0;j<w;j++)
        {
            if(board[i][j]===word[0])
            {
                dfs(i,j,0);
                if (found) return true;
            }       
        }
    }
    return false;
};
// @lc code=end

