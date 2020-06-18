// If we connect the leaf to the start root, 
// how do we prevent traversal from running forever

let stopCycle = function(node) {
  let tree = new Stack(node)
  while (tree.length > 0) {
    let next = tree.pop()
    
    if (tree.get_children(next)) {
      break;
    
    } else {
      let children = get_children(next);
      tree.push(children);
      for (i = 0; i < children.length; i++) {
        tree.push(children[i]);
      }
    }
  }
}


// use Set to store unique values
// if Set.has() -> break
// else Set.add()

const stopCycles = function(root) {
  let repeated = new Set();
  
  const aux = function(node) {
    if (node != null) {      
      if (repeated.includes(node.value)) {
          return ;
      }
      repeated.add(node.value);
      return aux(node.child);
    }
  }
  aux(root);
}

class Node {
    
    value
    children [node node node node]

}

adjacency list 

{
    node1: [node2, node3]
    node2: [node1]
    node55: [node3]

}


