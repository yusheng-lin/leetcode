/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const results = [];
    helper(root,0,results);
    return results;
};

function helper(node,i,results){
    if (!node) return;
    if(results[i] === undefined) results[i] = [];
    results[i].push(node.val); 
    helper(node.left,i+1,results);
    helper(node.right,i+1,results);
}
// @lc code=end

