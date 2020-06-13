class Stack {
  constructor() {
    this.mylist = [];
  }
  insertToStack(number) {
    this.mylist.push(number)
  } 
  removeFromStack() {
    return this.mylist.pop()
  } 
  getLengthOfStack() {
    return this.mylist.length;
  }
}

class Queue {
  constructor() {
    this.mylist =[];
  }
  // O(1)
  insert(thing) {
    this.mylist.unshift(thing)
  }
  // O(1)
  remove() {
    return this.mylist.pop()
  }
  // O(1)
  length() {
    return this.mylist.length;
  }
}

new List()

class List {
	insertToRight() {
  }
  removeFromRight() {
  
  }
  getAtIndex() {
  
  }
  modifyAtIndex() {
  
  }
  
  // non-standard
  insertAtLeft() {
  	//calls the fundamental operations
  }

}

insertToRight() removeFromRight getAtIndex()
modifyAtIndex()

insertLeft() {
  modify()// a bunch of times
	insertRight()
}

() -> () -> () -> ()

class Node {
	constructor(element, nextThing) {
    this.element = element;
    this.nextThing = nextThing;
  }
  
  modifyElement(newElement) {
  	this.element = newElement;
  }
  
}


class Chain {
  constructor(element) {
    this.total = 1;
    this.firstNode = new Node(element, null)
  }
  
  addToChainEnd(element) {
    var alias = this.firstNode;
    while (alias.next != null) {
    	alias = alias.nextThing
    }   
    alias.nextThing = new Node(element, null); 
    this.total++; 
  }
  
  //^O(n) how to make this O(1)?
  
  // O(1)
  addToChainStart(first) {
    var newLink = new Node(first, null)
    this.newLink.nextThing = this.firstNode
    this.firstNode = newLink;
    this.total++;
  }
  
  // O(n)
  // Bonus - can you modify the Chain class to make this O(1)?
  getChainLength() {
    return this.total;
  }
}

// binary search tree
class Node {
  contructor(root, left, right) {
    this.root = root;
    this.left = null;
    this.right = null;
  }
}

class Binary {
  update(branch) {
    let newNode = new Node(branch);
    if (this.root == null) {
      this.root = newNode;
      break;
    } else {
      this.add(this.root, newNode);
    }
  }
  add(node, newNode) {
    
    if (newNode.branch < node.branch) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.add(node.left, newNode);
      }
    }
    if (branch > this.root) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.add(node.right, newNode);
      }
    }
  }

  find(root, data) {
    if (root === null || root.data === data) { // == for null or undefined, === everything else
      return root
    } else if (data < root.data) {
      return find(root.left, data)
    } else { // data > root.data
      return find(root.right, data)
    }
  }

  remove(root, data) {
    this.root = this.removeNode()
  } 
  removeNode(node, key) {
    // 
    if (node == null) {
      return null;
    }
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } 
    else if (node.left == null && node.right == null) {
      return null;
    } else if (node.left == null) {
      return node.right;
    } else if (node.right == null) {
      return node.left;
    }

    // Deleting node with two children 
    // minumum node of the rigt subtree 
    // is stored in aux 
    var aux = this.findMin(node.right); // could also find max on left
    node.data = aux.data; 

    node.right = this.removeNode(node.right, aux.data); 
    return node; 

  }

  find_min(node) { //local
    if (node.left == null) {
      return node;
    } else {
      return find_min(node.left)
    }
  }
  findMinNode() { //global
    return find_min(root);

  }

  find_max(node) { //local
    i
  }
  findMaxNode() { //global
    return find_max(root)
  }
  
  update()
}


