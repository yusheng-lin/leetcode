/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    const func = function(rootid, from, to)
    {
        if (from > to) return null;

        var root  = new TreeNode(preorder[rootid]);

        var p = from;

        while(p < to)
        {
            if (inorder[p] === root.val)
                break;
            p++;
        }

        root.left = func(rootid+1,from,p-1);
        root.right = func(rootid + (p - from) + 1,p+1,to);
        return root;
    }
    return func(0,0,inorder.length-1);
};


// @lc code=end

