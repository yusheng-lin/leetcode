/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!!!head) return head;
    var prev = head;
    var head = head.next;
    var next = null;
    prev.next = null;
    while(head)
    {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
// @lc code=end

