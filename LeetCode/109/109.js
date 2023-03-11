/*
    109. Convert Sorted List to Binary Search Tree
    Given the head of a singly linked list where elements are sorted in ascending order, 
    convert it to a height-balanced binary search tree.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  
  const treeHead = BST(array);
  return treeHead;
};

function BST(array) {
  // Base case
  if (array.length <= 0) return null;
  const mid = Math.floor(array.length / 2);
  const head =  new TreeNode(array[mid]);

  const arrayLeft = array.slice(0, mid);
  const arrayRight = array.slice(mid + 1, array.length);
  head.left = BST(arrayLeft);
  head.right = BST(arrayRight);

  return head;
};


console.log(Math.floor((1)/2));
