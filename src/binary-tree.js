class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(node, val) {
    if (node == null) {
      node = new Node(val);
    } else {
    }
  }

  levelOrderTravesal(node) {
    if (node == null) {
      return;
    }
    let arr = [node];
    while (arr.length != 0) {
      let curr = arr.shift();
      console.log(curr.data);
      if (curr.left) {
        arr.push(curr.left);
      }
      if (curr.right) {
        arr.push(curr.right);
      }
    }
  }
}
