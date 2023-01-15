/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (root && subRoot)
    {
        if (compare(root, subRoot)) return true;
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
    return root === subRoot;
};

function compare(root,subRoot)
{
    if (root && subRoot)
    {
        return root.val === subRoot.val
        && compare(root.left,subRoot.left)
        && compare(root.right,subRoot.right);
    }
    return root === subRoot;
}

// @lc code=end

