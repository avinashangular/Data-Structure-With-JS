class Stack {
  #array = [];
  #currentPointer = 0;

  constructor() {}

  /**
   * Used to insert element
   *
   * @param {any} element insert any type element
   *
   * @author Avinash Kumar
   */
  push(element) {
    this.#array[this.#currentPointer] = element;
    this.#currentPointer++;
  }

  /**
   * Returns last element from stack.
   *
   * @returns {any} Returns element.
   *
   * @author Avinash Kumar
   */
  pop() {
    this.#currentPointer--;
    return this.#array[this.#currentPointer];
  }

  /**
   * Used to check Stack is Empty or not.
   *
   * @returns {boolean} Return boolean value.
   *
   * @author Avinash Kumar
   *
   */
  isEmpty() {
    return this.#currentPointer == 0;
  }

  /**
   * Used to get top element from Stack.
   *
   * @returns {element} Return element.
   *
   * @author Avinash Kumar
   *
   */
  top() {
    return this.#array[this.#currentPointer - 1];
  }
}

export { Stack };
