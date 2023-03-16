/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isCompleteTree = function (root) {
  // Is tree empty?
  if (root === null) return false;

  // Level traversal
  let queue = [];
  queue.push(root);
  // Is a full nodo flag
  let fullNode = true;

  while (queue.length != 0) {
    let temp = queue.shift();
    if (temp.left != null) {
      if (fullNode == false) return false;

      queue.push(temp.left);
    } else {
      fullNode = false;
    }

    if (temp.right != null) {
      if (fullNode == false) return false;
      queue.push(temp.right);
    } else {
      fullNode = false;
    }
  }

  return true;
};
