/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    var map = new Map();
    helper(node, map);
    return map.get(node.val);
};

function helper(node, map){
    if(!node || map.get(node.val)) return;
    var head = new Node(node.val);
    map.set(node.val, head);
    for(var each of node.neighbors)
    {
        var neighbor = map.get(each.val) || helper(each, map);
        head.neighbors.push(neighbor);
    }
    return head;
}
// @lc code=end

