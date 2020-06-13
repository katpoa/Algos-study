// Binary search tree print all nodes

// depth first - exhaust each full path root-to-leaf, more often recursive
// breadth first - level by level, only iteratively

// Depth-first search
var visitAll = function(root) {
  if (root == null) {
    return root;
  }
  
  let goLeft = visitAll(root.left);
  let goRight = visitAll(root.right);

  return root; // 
}

//traversal practice, using recursion for exploration
// don't actually even need to set the recursive calls as a value ('goLeft', 'goRight')
function traverse(node) {
  if (node != null) {
    traverse(node.left);
    traverse(node.right);
  }
}

// Traverse DFS iteratively with Stack

class StackFrame {
  constructor() {
    this.node
    this.hasBeenLeft
    this.hasBeenRight
  }
}

function dfs(startNode) {
  collection = new Stack(startNode)
  while (collection.length > 0) {
    nextNode = collection.pop()
    child_arr = get_children(nextNode) // assume get_children is defined 
    for child_node in child_arr) {
      collection.push(child_node)
    }
  }
}

// using Stack to traverse, essentially go to right most first instead
// check at each node "have we expored it's children yet?" and pop current, add it's children to the stack

// BFS with Queue

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


