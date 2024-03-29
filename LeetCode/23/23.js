/*
23. Merge k Sorted Lists    

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
import MinHeap from "../../DS/MinHeap.mjs";

var mergeKLists = function(lists) {
    const heap = new MinHeap;
    // Insert all lists heads on MinHeap
    for (let i = 0; i < lists.length; i++) {
        const head = lists[i];
        while (head) {
            heap.insert(head.val);
            head = head.next;
        }
    }

    return heap.toArray();
};