/*
142. Linked List Cycle II

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

*/



function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // Traverse linked list
    let slow = head;
    let fast = head;
    while (fast !== null &&  fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // cycle meeting point
        if (slow === fast) break;
    }
    if (fast === null ||  fast.next === null) return null;
    while (head !== slow) {
        head = head.next;
        slow = slow.next;
    }
    return slow;
};

/*
Time complexity: O(n) Because slow pointer will have to traverse the linkedlist entirely.
Space complexity: O(1) Because we save linear element variable.
*/

const head = new ListNode(-1);
const n1 = new ListNode(-7);
const n2 = new ListNode(7);
const n3 = new ListNode(-4);
const n4 = new ListNode(19);
const n5 = new ListNode(6);
const n6 = new ListNode(-9);
const n7 = new ListNode(-5);
const n8 = new ListNode(-2);
const n9 = new ListNode(-5);
head.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;
n9.next = n6;

console.log(detectCycle(head));