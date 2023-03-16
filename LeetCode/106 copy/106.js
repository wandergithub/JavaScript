/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// Global
var index;
var buildTree = function (inorder, postorder) {
  index = inorder.length - 1;
  let m = {};
  for (let i = 0; i < inorder.length; i++) {
    m[inorder[i]] = i;
  }
  return helper(inorder, postorder, 0, index, m);
};

function helper(inorder, postorder, inStart, inEnd, m) {
  // Base case
  if (inStart > inEnd) return null;

  let currentNode = new TreeNode(postorder[index]);
  let inIndex = m[currentNode.val];
  index--;

  if (inStart == inEnd) return currentNode;

  // Add left side and right side
  currentNode.right = helper(inorder, postorder, inIndex + 1, inEnd, m);
  currentNode.left = helper(inorder, postorder, inStart, inIndex - 1, m);

  return currentNode;
}

/* This function is here just to test */
function preOrder(node) {
  if (node == null) {
    return;
  }
  console.log(node.data + " ");
  preOrder(node.left);
  preOrder(node.right);
}

// Driver code
var init = [4, 8, 2, 5, 1, 6, 3, 7];
var post = [8, 4, 5, 2, 6, 7, 3, 1];
var n = init.length;
var root = buildTree(init, post);
console.log("Preorder of the constructed tree : <br>");
preOrder(root);
