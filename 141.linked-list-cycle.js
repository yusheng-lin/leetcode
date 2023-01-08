/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var fast = slow = head;

    while(fast && slow)
    {
        fast = fast.next;
        if (fast)
           fast = fast.next;
        slow = slow.next;

        if (!!fast && !!slow && fast === slow)
            return true;
    }
    return false;
};
// @lc code=end

