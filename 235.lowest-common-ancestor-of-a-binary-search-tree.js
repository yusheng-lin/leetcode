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
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return root;
    
    const [big, small] = p.val > q.val ? [p,q] : [q,p];

    function func(node, big, small)
    {
        if (node.val > big.val)
            return func(node.left,big,small);
        if (node.val < small.val)
            return func(node.right,big,small);

        return node;
    }
    return func(root,big,small);
};
// @lc code=end

