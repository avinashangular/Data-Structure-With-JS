class Nodes {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Nodes(element);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, location) {
    let node = new Nodes(element);
    if (location < 0 || location > this.size) {
      return;
    } else {
      let x = 0;
      let current = this.head;
      let previous = this.head;

      if (x == location) {
        node.next = current;
        this.head = node;
        this.size++;
        return;
      }

      while (x < location) {
        previous = current;
        current = current.next;
        x++;
      }
      node.next = current;
      previous.next = node;
    }
    this.size++;
  }

  removeFrom(location) {
    if (location < 0 || location > this.size) {
      return;
    } else if (location == 0) {
      this.head = this.head.next;
    } else {
      let at = 0;
      let current = this.head;
      let prev = this.head;
      while (at < location) {
        prev = current;
        current = current.next;
        at++;
      }
      prev.next = current.next;
    }
  }

  removeElement(element) {
    let current = this.head;
    let prev = null;
    
    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
    //  prev.next = current.next;
  }
}

// functions to be implemented
// add(element)
// insertAt(element, location)
// removeFrom(location)
// removeElement(element)

// Helper Methods
// isEmpty
// size_Of_List
// PrintList

let linkObj = new LinkedList();
linkObj.add(10);
linkObj.add(20);
linkObj.add(30);
linkObj.add(40);
linkObj.add(50);

linkObj.insertAt(15,1);
linkObj.insertAt(5,0)
linkObj.insertAt(60,7);

linkObj.removeElement(60);

console.log(linkObj.head);
