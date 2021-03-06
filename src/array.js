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
    if (arr) {
      this.#arr = arr;
      this.#indexCounter = arr.length;
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

  /**
   * Used to delete first element of an Array.
   * @returns {element} Returns deleted element
   * @author Avinash Kumar
   */
  shift() {
    let temp = [];
    for (let i = 1; i < this.#indexCounter; i++) {
      temp.push(this.#arr[i]);
    }
    this.#indexCounter -= 1;
    let deletedValue = this.#arr[0];
    this.#arr = temp;
    return deletedValue;
  }

  /**
   * Used to add an element at start of an Array.
   * @param {any} element Element to be added.
   * @returns {Array} Return new array length
   * @author Avinash Kumar
   */
  unshift(element) {
    let tempArray = [element];
    for (let i = 0; i < this.#indexCounter; i++) {
      tempArray.push(this[i]);
    }
    this.#indexCounter++;
    this.#arr = tempArray;
    return this.#indexCounter;
  }

  /**
   * Used Slice out elements from array in given range.
   * @param {number} start Start index to slice
   * @param {number} end End index to slice
   * @returns {Array} Returns sliced array.
   * @author Avinash Kumar
   */
  slice(start, end) {
    if (start < 0) {
      start = this.#arr.length + start;
    }
    if (end < 0) {
      end = this.#arr.length + end;
    }
    let slicedArr = new Array();
    for (let i = start; i < end; i++) {
      slicedArr.push(this.#arr[i]);
    }
    return slicedArr.#arr;
  }

  /**
   * Used for add, replace and remove elements from source array.
   * @param {number} index Used to pass number to specify index position.
   * @param {number} count Used to pass number of element to be replaced.
   * @param {any} element Pass element that need to be addeed.
   * @author Avinash Kumar
   */
  splice(index, count, element) {
    if (index >= this.length()) {
        this.push(element);
        return;
    }
    let temp = new Array();
    for (let i = 0; i < this.length(); i++) {
      if (i == index) {
        temp.push(element);
      }
      if (i >= index + count || i < index) {
        temp.push(this.#arr[i]);
      }
    }
    this.#arr = temp.#arr;
  }
}

let arrObj = new Array([10, 20, 30, 40, 50]);
arrObj.splice(5, 0, 5);
console.log(arrObj);

export { Array };
