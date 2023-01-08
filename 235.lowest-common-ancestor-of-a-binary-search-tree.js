/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/* 
只需滿足下面條件即可
       node
    less   large
*/
var lowestCommonAncestor = function(root, p, q) {
    var temp  = p.val > q.val ? [q, p]:[p, q];
    return compare(root, temp[0], temp[1]);
};

function compare(root, less, large){
    if (!root) return root;
    if (root.val > large.val) return compare(root.left, less, large);
    if (root.val < less.val) return compare (root.right, less, large);
    return root;
}


// @lc code=end

