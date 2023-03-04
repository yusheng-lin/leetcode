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
    if (compare(root,subRoot)) return true;

    if((root.left && isSubtree(root.left, subRoot)) || (root.right && isSubtree(root.right, subRoot)))
        return true;

    return false;
};

function compare(node1, node2)
{
    if (node1 && node2) 
        return node1.val === node2.val && compare(node1.left, node2.left) && compare(node1.right,node2.right);
    return node1 === node2;
}
// @lc code=end

