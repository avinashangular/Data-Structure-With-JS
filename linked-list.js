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
    let current = null;
    if (this.head == null) {
      this.head = node;
    } else {
      this.current = this.head;

      while (this.current.next) {
        this.current = this.current.next;
      }

      this.current.next = node;
    }
    this.size++;
  }

  insertAt(element, location) {
    if (location < 0 || location > this.size) {
      return;
    } else {
      let x = 0;
      let current = this.head;
      let previous = this.head;

      if (x == location) {
        element.next = current;
        this.head = element;
        return;
      }

      while (x < location) {
        previous = current;
        current = current.next;
        x++;
      }
      element.next = current;
      previous.next = element;
    }
    this.size++;
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
linkObj.add(new Nodes(10));
linkObj.add(new Nodes(20));
console.log(linkObj.head);
linkObj.insertAt(new Nodes(5), 0);
console.log(linkObj.head);
