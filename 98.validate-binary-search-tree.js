/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return false;

    function fn(node, max ,min)
    {
        if (!node) return true;
        
        var val = node.val;
        
        return (max === undefined || val < max) 
                && (min === undefined || val > min) 
                && fn(node.left, val, min)
                && fn(node.right, max, val);
    }

    return fn(root);
};

// @lc code=end

