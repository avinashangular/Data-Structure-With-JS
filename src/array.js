class Array {
  #arr = [];
  #indexCounter = 0;

  /**
   * Used to create an instace of Array.
   * @param {Array} arr Takes array as input which is optional.
   * @returns {Array} Returns Array instance
   * @author Avinash Kumar
   */
  constructor(arr) {
      if(arr){
          this.#arr = arr
          this.#indexCounter = arr.length
      }
  }

  /**
   * Used to add an element at last index of array.
   * @param {any} element Take input to add.
   * @author Avinash Kumar
   */
  push(element) {
    this.#arr[this.#indexCounter] = element;
    this.#indexCounter += 1;
  }

  /**
   * Used to remove last element from an Array.
   * @returns {any} Returns last element.
   * @author Avinash Kumar
   */
  pop() {
    this.#indexCounter--;
    return this.#arr[this.#indexCounter];
  }

  /**
   * Used to get element by index of Array.
   * @returns {any} Returns an element
   * @author Avinash Kumar
   */
  getElementByIndex(index) {
    return this.#arr[index];
  }

  /**
   * Used to get index of first occurence of an element.
   * @param {any} element Take input element to be find.
   * @returns {number) Return index of element.
   * @author Avinash Kumar
   */
  indexOf(element) {
    for (let i = 0; i < this.#indexCounter; i++) {
      if (this.#arr[i] == element) {
        return i;
      }
    }
  }

  /**
   * Used to get length of an Array.
   * @returns {number} Returns Array length
   * @author Avinash Kumar
   */
  length() {
    return this.#indexCounter;
  }
}

export { Array };
