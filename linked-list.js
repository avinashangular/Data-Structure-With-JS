class Nodes {
  /**
   * Create an Instance of Node.
   *
   * @param {} element Element to be added.
   *
   * @returns {Nodes} Return Node instance.
   * 
   * @author Avinash Kumar
   */
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  /**
   * Create an instance of Linked List.
   *
   * @returns {LinkedList} Returns LinkedList Instance.
   * 
   * @author Avinash Kumar
   */
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Used to Add element to linked list
   *
   * @param {any} element The element to be added.
   *
   * @author Avinash Kumar
   */
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

  /**
   * Used to insert element at specific position
   *
   * @param {} element The element to be added.
   * @param {number} index Index to add element.
   *
   * @returns {void} Does not return anything.
   */
  insertAt(element, index) {
    let node = new Nodes(element);
    if (index < 0 || index > this.size) {
      return;
    } else {
      let x = 0;
      let current = this.head;
      let previous = this.head;

      if (x == index) {
        node.next = current;
        this.head = node;
        this.size++;
        return;
      }

      while (x < index) {
        previous = current;
        current = current.next;
        x++;
      }
      node.next = current;
      previous.next = node;
    }
    this.size++;
  }

  /**
   * Used to remove element from specified index.
   *
   * @param {number} index Index position to delete element.
   *
   * @author Avinash Kumar
   *
   */
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

  /**
   * Used to remove element from List.
   *
   * @param {} element Element to be removed.
   *
   * @returns Returns removed element or -1.
   *
   * @author Avinash Kumar
   *
   */
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

  /**
   * Check list is empty or not.
   *
   * @returns Returns boolean value.
   *
   * @author Avinash Kumar
   *
   */
  isEmpty() {
    return this.size == 0;
  }

  /**
   * Get size of Linked List
   * 
   * @returns {number} Returns number.
   * 
   * @author Avinash Kumar
   */
  get size_of_list() {
    return this.size;
  }

  /**
   * Returns all elements as array.
   *
   * @returns Returns Array of elements
   *
   * @author Avinash Kumar
   */
  printList() {
    let list = [];
    let current = this.head;
    while (current != null) {
      list.push(current.element);
      current = current.next;
    }

    return list;
  }

  /**
   * Return index of specified element
   *
   * @param {} element Element that need to searched.
   *
   * @returns {number} Returns index of specified element.
   *
   * @author Avinash Kumar
   */
  indexOf(element) {
    let index = -1;
    let currentIndex = 0;
    let current = this.head;
    while (current != null) {
      if (current.element == element) {
        index = currentIndex;
        break;
      }
      currentIndex++;
      current = current.next;
    }
    return index;
  }
}

