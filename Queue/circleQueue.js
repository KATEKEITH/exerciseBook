class CircleQueue {
  constructor(size) {
    this.maxSize = size;
    this.array = [];
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.front == this.rear;
  }

  isFull() {
    return (this.rear + 1) % this.maxSize == this.front;
  }

  enQueue(item) {
    if (this.isFull()) {
      console.log("큐가 포화상태입니다");
    } else {
      this.rear = (this.rear + 1) % this.maxSize;
      this.array[this.rear] = item;
    }
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log(new Error("큐가 비었습니다."));
    } else {
      this.fron = (this.front + 1) % this.maxSize;
      return this.array[this.front];
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log(new Error("큐가 비었습니다."));
    }
    let string = "";
    let i = this.front;
    do {
      i = (i + 1) % this.maxSize;
      string += this.array[i] + "|";
      if (i == this.rear) {
        console.log(string);
        break;
      }
    } while (i != this.fron);
  }
}

let queue = new CircleQueue(5);
queue.enQueue(1);
queue.deQueue();
queue.enQueue(2);
queue.deQueue();
queue.enQueue(3);
queue.deQueue();
queue.enQueue(4);
queue.deQueue();
queue.enQueue(5);
queue.deQueue();
queue.deQueue();

queue.print();
