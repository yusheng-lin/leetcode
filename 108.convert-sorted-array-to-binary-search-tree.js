/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return makeNode(nums, 0, nums.length-1);
};

function makeNode(nums, from, to)
{
    if (to < from) return null;

    if (from === to) return new TreeNode(nums[from]);

    var mid = Math.floor((from+to)/2);
    return new TreeNode(
        nums[mid],
        makeNode(nums,from,mid-1),
        makeNode(nums,mid+1,to)
    );
}

// @lc code=end

