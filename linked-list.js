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

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    } else if (index == 0) {
      this.head = this.head.next;
    } else {
      let at = 0;
      let current = this.head;
      let prev = this.head;
      while (at < index) {
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
  }

  isEmpty() {
    return this.size == 0;
  }

  get size_of_list() {
    return this.size;
  }

  printList(){
    let list = [];
    let current = this.head;
    while(current != null){      
      list.push(current.element);
      current = current.next;
    }
    
    return list;
  }

  indexOf(element){
    let index = -1;
    let currentIndex = 0;
    let current = this.head;
    while(current != null){      
      if(current.element == element) {
        index = currentIndex;
        break;
      }
      currentIndex++;
      current = current.next;
    }
    return index;
  }

}
