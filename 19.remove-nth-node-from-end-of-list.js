/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var f = s =  head , pre =null;
    
    while(n > 0){
        f = f.next;
        n--;
    }

    if (!!!f) return head.next;

    while(f){
        f = f.next;
        pre = s;
        s = s.next;
    }

    pre.next = s.next;
    s.next = null;
    return head;
};
// @lc code=end

