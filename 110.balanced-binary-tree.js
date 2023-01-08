/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function(root) {
    return helper(root).ok;
};

function helper(root){
    if (!root) return { ok: true, len:0};

    var left = helper(root.left);
    
    if (!left.ok) return left;
    left.len += 1;
    
    var right = helper(root.right);

    if (!right.ok) return right;
    
    right.len += 1;

    if (Math.abs(left.len - right.len) > 1) 
        return { ok: false }

    return left.len > right.len ? left: right;
}

// @lc code=end

