class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.RootNode = null;
  }

  insert(data) {
    let node = new Node(data);
    if (this.RootNode == null) {
      this.RootNode = node;
    } else {                          
      this.insertNode(this.RootNode, node);
    }
  }

  searchByNode(node, value) {
    if (value < node.data) {
      return this.searchByNode(node.left, value);
    } else if (value > node.data) {
      return this.searchByNode(node.right, value);
    } else {
      return node;
    }
  }

  search(value) {
    let currentNode = this.RootNode;
    while (currentNode.left != null && currentNode.right != null) {
      if (value < currentNode.data) {
        if (currentNode.left == null) {
          return -1;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.right) {
        if (currentNode.right == null) {
          return -1;
        } else {
          currentNode = currentNode.right;
        }
      }
      if (currentNode.data == value) {
        return currentNode;
      }
    }
    if (currentNode.data == value) {
      return currentNode;
    } else {
      return -1;
    }
  }

  remove(value) {

    let currentNode = this.RootNode;
    while (currentNode.data != value) {
      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.right) {
        currentNode = currentNode.right;
      }
    }

    if(currentNode.data == value) {
      return this.removeNode(currentNode, value);
    }
    return null;
  }

  removeNode(rootNode, value) {
    // Condition 1: No Leaf Node


    if (
      rootNode.data == value &&
      rootNode.left == null &&
      rootNode.right == null
    ) {
      rootNode = null;
      return rootNode;
    }

    // Condition 2: Has One Child
    else if (
      rootNode.data == value &&
      ((rootNode.left != null && rootNode.right == null) ||
        (rootNode.left == null && rootNode.right != null))
    ) {
      if (rootNode.left != null) {
        rootNode = rootNode.left;
      } else {
        rootNode = rootNode.right;
      }
      return rootNode;
    }

    // Condition 3: Has Two child
    else if (
      rootNode == value &&
      rootNode.left != null &&
      rootNode.right != null
    ) {
      let max = this.maxNodeFromLeftSubTree(rootNode);
      let tempNode;
      while (max != null) {
        rootNode.data = max;
        tempNode = rootNode;
        rootNode = rootNode.left;
        max = this.maxNodeFromLeftSubTree(rootNode);
      }
      tempNode.left = null;
    }
    return tempNode;
  }

  /* private function */

  maxNodeFromLeftSubTree(node) {
    if (node.left != null) {
      return node.left.data;
    }
    return null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  
  levelOrderTravesal(node){    
    if(node == null) {
        return;
    } 
    let arr = [node];
    while(arr.length != 0) {
      let curr = arr.shift();
      console.log(curr.data);
      if(curr.left) {
        arr.push(curr.left);
      }
      if(curr.right) {
        arr.push(curr.right);
      }
    }
}

}

debugger;
let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(70);
bst.insert(60);
bst.insert(80);
bst.insert(30);
bst.insert(20);
bst.insert(40);

console.log(bst.RootNode);
bst.levelOrderTravesal(bst.RootNode);