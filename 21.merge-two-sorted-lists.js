/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var ancor = head = new ListNode();
    while(list1 && list2)
    {
        if (list1.val > list2.val){
            head.next = list2;
            list2 = list2.next;
        }
        else {
            head.next = list1;
            list1 = list1.next;
        }
        head = head.next;
    }

    head.next = list1 || list2;
    return ancor.next;
};
// @lc code=end

