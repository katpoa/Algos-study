/* Sum and Invert
https://leetcode.com/problems/invert-binary-tree/
* 1) we need to be able to express the current problem in terms of smaller version of the current problem
*    in particular how do you use smaller versions to solve current problem
* 2) write base case
* 3) assume the recursive call gives you what you want
* 
* sort of like proof by induction -- prove something works for the first case, then
* it should work for all other cases
*/

// Sum all the values in a binary search tree

class root {
  constructor() {
    value
    left
    right
  }
}

var sumBST = function(root) {
  if (root == null) {
    return 0;
  }
  let rightSum = sumBST(root.right)
  let leftSum = sumBST(root.left)

  return root.value + rightSum + leftSum;
  // being careful with += w/ recursion note scoping
}

//Invert Binary Tree

var invertTree = function(root) {
  if (root == null) {
    return null;
  }
  
  let left = invertTree(root.left);
  let right = invertTree(root.right);
    
  // let temp = root.left;
  root.left = right;
  root.right = left;
  return root; //technically don't need the output, to return 

}


