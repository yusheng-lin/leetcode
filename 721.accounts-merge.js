/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const lookup = new Map();
    const vists = [];
    accounts.forEach((account,idx)=>
    {
        for(var i=1;i<account.length;i++){
            var mail = account[i];
            var rows = lookup.get(mail);
            if (rows === undefined) {
                rows = [];
                lookup.set(mail,rows);
            }
            rows.push(idx);
        }
    });

    var results = [];
    for(var i=0; i< accounts.length;i++)
    {
        if(vists[i]) continue; 
        var mails = new Set();
        dfs(i,mails);
        results.push([accounts[i][0]].concat([... mails].sort()));
    }

    return results;

    function dfs(rowId, mails)
    {
        if(vists[rowId]) return;
        vists[rowId] = true;
        var account = accounts[rowId];
        for(var j=1;j<account.length;j++)
        {
            var mail = account[j];
            mails.add(mail);
            var others = lookup.get(mail);
            for(var id of others)
                dfs(id, mails);
        }
    }
};
// @lc code=end

