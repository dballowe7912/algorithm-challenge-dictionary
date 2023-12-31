class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(value === current.value) return undefined;
        if(value < current.value) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if(value > current.value) {
          if(current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
	}
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true;
      }
    }
    return false;
  }
  breadthFirstSearch() {
    let queue = [];
    let data = [];
    let node = this.root;
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  depthFirstPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  depthFirstPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  depthFirstInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      // node.left && traverse(node.left)
      data.push(node.value);
      if (node.right) traverse(node.right);
      // node.right && traverse(node.right)
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)
// console.log(tree.insert(16)) undefined
// console.log(tree.breadthFirstSearch())
// console.log(tree.depthFirstPostOrder())
console.log(tree.depthFirstInOrder())
// console.log(tree.find(100)) false
// console.log(tree)
//      10
//    5    13
//  2  7  11  16
