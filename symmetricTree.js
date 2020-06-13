// https://leetcode.com/problems/symmetric-tree/
// first try to do it recursively
// then with while loop and Queue (bfs)

// BFS
/*
function bfs(startNode) {
  collection = new Queue(startNode)
  while (collection.length > 0) {
    nextNode = collection.pop() //or .shift()
    child_arr = get_children(nextNode)
    for child_node in child_arr) {
      collection.unshift(child_node); //or .push()
    }
  }
}
*/

/*
Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Follow up: Solve it both recursively and iteratively.
*/

// Recursive solution
var isSymmetric = function(root) {
  if (root == null) {
    return root;
  }
  var isMirrored = function(a, b) {
    if (a == null && b == null) {
      return true;
    } else if (a == null || b == null || a.val !== b.val) {
      return false;
    }
    return isMirrored(a.left, b.right) && isMirrored(a.right, b.left);
  }
  return isMirrored(root.left, root.right);
}
// Time O(n) Space O(h)

// Iterative solution
var isSymmetric = function(root) {
  let q1 = [root], q2 = [root];
  
  while (q1.length > 0 && q2.length > 0) {
    let chop1 = q1.shift();
    let chop2 = q2.shift();
    if (chop1 == null && chop2 == null) {
      continue;
    } else if (chop1 == null || chop2 == null || chop1.val !== chop2.val) {
      return false;
    }
    q1.push(chop1.left);
    q2.push(chop2.right);
    q1.push(chop1.right);
    q2.push(chop2.left);
  }
  return true;
}
// Time O(n*2) bc using list but O(n) for proper queue 
// Space O(n)

// another method is to traverse one from left and one from right and move all the elements to new lists, then compare them

// var isSymmetric = function(binaryTree) {
//   let mirror = 1;
//   let mirrored = true;
//   for (let i = 1; i < binaryTree.length;) {
//     console.log(mirror)
//     if (binaryTree[i] !== binaryTree[i * 2]) {
//       mirrored = false;
//     }
//     mirror *= 2;
//     i += mirror;
//   }
//   return mirrored;
// }

isSymmetric([1,2,2,null,3,null,3])
