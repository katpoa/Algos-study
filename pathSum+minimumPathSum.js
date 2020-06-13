// Path Sum
// edge cases 
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
 * @param {number} sum
 * @return {boolean}
 */
// 1. assume recursive calls work
// 2. use answers to subproblems (which are recursive calls) to solve curr problem
// 3. base cases for simplest version of problems
// 4. don't unwind the stack
/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/
// Working solution

var hasPathSum = function(root, sum) {
  if (root == null) {
    return false
  }
  if (root.left == null && root.right == null && sum - root.val === 0) {
      return true
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}

// Aaron's solution - edge case of [] sum = 0 || sum = 1, and when [1, 2] sum = 1
var hasPathSum = function(root, sum) {
  if (root == null) {
    return sum === 0
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
  
}

// Joe's solution, edge case of [] sum = 0 || sum = 1
var hasPathSum = function(root, sum) {
    if (root == null) {
      return false;
    }
    // i am a leaf
    if (root.left == null && root.right == null) {
        return sum  - root.val === 0;
    }
    
    // let goLeft = false
    // if (root.left != null) {
    let goLeft = hasPathSum(root.left, sum - root.val)
    // }
    
    // let goRight = false
    // if (root.right != null) {
    let goRight = hasPathSum(root.right, sum - root.val)
    // }
    return goLeft || goRight
}
    
/*
Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// similar to house robber, needs a helper function to sum
var minPathSum = function(grid) {    
    
    var minSum = function(m, n) {
        
        if (m === grid.length - 1 && n === grid[m].length - 1 ) {
          return grid[m][n];
        } // keep this the same

       if (grid[m + 1] == undefined) {
          let goRight = grid[m][n] + minSum(m, n + 1);
          return goRight; 
        } else if (grid[m][n + 1] == undefined) {
          let goDown = grid[m][n] + minSum(m + 1, n);
          return goDown;
        } else {
          let goDown = grid[m][n] + minSum(m + 1, n);
          let goRight = grid[m][n] + minSum(m, n + 1);
          return Math.min(goDown, goRight);
        }
    }
    return minSum(0, 0);
}

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {
  if (grid.length === 0) {
    return 0;
  }
  let rows = grid.length - 1;
  let cols = grid[0].length - 1;
  
  //bottom right corner
  var findMinSum = function(grid, rows, cols) {
    if (rows < 0 || cols < 0) {
      return 0; 
    } else if (rows === 0 && cols !== 0) {
        return grid[rows][cols] + findMinSum(grid, rows, cols - 1);
    } else if (cols === 0 && rows !== 0) {
        return grid[rows][cols] + findMinSum(grid, rows - 1, cols);
    } else {
      return grid[rows][cols] + Math.min(findMinSum(grid, rows - 1, cols), findMinSum(grid, rows, cols - 1));
    }
  }
  return findMinSum(grid, rows, cols);
}

