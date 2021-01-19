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
}
