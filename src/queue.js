class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    } else {
      return this.items.shift();
    }
  }

  front() {
    if (this.isEmpty()) {
      return "No Element in Queue";
    } else {
      return this.items[0];
    }
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue(){
      let str = "";
      for(let i of this.items){
        str = `${str} ${i}`
      }
      return str;
  }
}


let queueObj = new Queue();
queueObj.enqueue(10);
queueObj.enqueue(20);
queueObj.enqueue(30);
queueObj.enqueue(40);
queueObj.enqueue(50);

queueObj.dequeue();
console.log(queueObj.front());
console.log(queueObj.printQueue());