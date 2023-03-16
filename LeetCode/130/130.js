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
 * @return {number}
 */
var sumNumbers = function(root, val = 0) {
    if(root === null) return null;
    // update total value
    val = val*10 + root.val;
    // Is a leaf
    if(root.left === null && root.right === null) {
        return val;
    }

    return sumNumbers(root.left, val) + sumNumbers(root.right, val);
};