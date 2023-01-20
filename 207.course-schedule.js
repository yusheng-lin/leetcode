/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var indegree = new Array(numCourses);
    indegree.fill(0);

    for(var prerequisite of prerequisites)
    {
        var idx = prerequisite[0];
        indegree[idx]++;
    }

    var qu = indegree.reduce((col,s,idx) =>
    {
        if(s === 0) col.push(idx);
        return col;
    },[]);

    while(qu.length > 0)
    {
        var c = qu.shift();
        
        for(var p of prerequisites)
        {
            if (p[1] == c)
            {
                if (--indegree[p[0]] === 0)
                    qu.push(p[0]);
            }
        }
    }

    return indegree.every(x => x === 0);
};
// @lc code=end

