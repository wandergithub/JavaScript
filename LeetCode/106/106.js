/**
 Given two integer arrays inorder and postorder where inorder is the 
 inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, 
 construct and return the binary tree.

    geeksforgeeks: https://www.geeksforgeeks.org/construct-a-binary-tree-from-postorder-and-inorder/
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/* JavaScript program to construct tree using inorder and
      postorder traversals */
/* A binary tree node has data, pointer to left
      child and a pointer to right child */
class Node {
  constructor() {
    this.data = 0;
    this.left = null;
    this.right = null;
  }
}

// Utility function to create a new node
/* Helper function that allocates a new node */
function newNode(data) {
  var node = new Node();
  node.data = data;
  node.left = node.right = null;
  return node;
}

/* Recursive function to construct binary of size n
      from Inorder traversal in[] and Postorder traversal
      post[]. Initial values of inStrt and inEnd should
      be 0 and n -1. The function doesn't do any error
      checking for cases where inorder and postorder
      do not form a tree */
function buildUtil(init, post, inStrt, inEnd) {
  // Base case
  if (inStrt > inEnd) {
    return null;
  }

  /* Pick current node from Postorder traversal
          using postIndex and decrement postIndex */
  var curr = post[index];
  var node = newNode(curr);
  index--;

  /* If this node has no children then return */
  if (inStrt == inEnd) {
    return node;
  }

  /* Else find the index of this node in Inorder
          traversal */
  var iIndex = mp[curr];

  /* Using index in Inorder traversal, con
          left and right subtrees */
  node.right = buildUtil(init, post, iIndex + 1, inEnd);
  node.left = buildUtil(init, post, inStrt, iIndex - 1);
  return node;
}
var mp = {};
var index;

// This function mainly creates an unordered_map, then
// calls buildTreeUtil()
function buildTree(init, post, len) {
  // Store indexes of all items so that we
  // we can quickly find later
  for (var i = 0; i < len; i++) {
    mp[init[i]] = i;
  }

  index = len - 1; // Index in postorder
  return buildUtil(init, post, 0, len - 1);
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
var root = buildTree(init, post, n);
console.log("Preorder of the constructed tree : <br>");
preOrder(root);
