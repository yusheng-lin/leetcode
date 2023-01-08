/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    var max = 0;
    function maxLen(node)
    {
        if (!!!node) return 0;
    
        var left = maxLen(node.left), right = maxLen(node.right);
    
        var d = left + right;
        if (d > max) max = d;
    
        return 1 + Math.max(left, right);
    }
    maxLen(root);
    return max;
};






// @lc code=end

