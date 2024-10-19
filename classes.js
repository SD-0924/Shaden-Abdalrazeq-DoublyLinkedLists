class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length += 1;
    }
  }
  pop() {
    if (!this.head) {
      return "The list is Empty";
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length -= 1;
    }
  }

  shift() {
    if (!this.head) {
      return "The list is empty";
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length -= 1;
    }
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
  }

  get(index) {
    if (!this.head || index >= this.length || index < 0) {
      return "The list is empty or the index is invalid";
    } else {
      let currentNode;

      if (index < this.length / 2) {
        currentNode = this.head;
        let counter = 0;

        while (counter < index) {
          currentNode = currentNode.next;
          counter += 1;
        }
      } else {
        let counter = this.length - 1;
        currentNode = this.tail;
        while (counter > index) {
          currentNode = currentNode.prev;
          counter -= 1;
        }
      }

      return currentNode.value;
    }
  }

  set(index, val) {
    if (!this.head || index >= this.length || index < 0) {
      return false;
    }
    let counter = 0;
    let currentNode;
    if (index < this.length) {
      currentNode = this.head;
      while (counter < index) {
        counter += 1;
        currentNode = currentNode.next;
      }
    }
    currentNode.value = val;
    return true;
  }

  insert(index, val) {
    if (index >= this.length || index < 0) {
      return false;
    }

    this.push(this.tail.value);

    let currentNode = this.tail;
    let counterBack = this.length - 1;

    //const tempValue = lastNode.value;
    while (index < counterBack) {
      currentNode.value = currentNode.prev.value;
      currentNode = currentNode.prev;

      counterBack -= 1;
    }
    currentNode.value = val;

    return true;
  }

  remove(index) {
    if (!this.head || index >= this.length || index < 0) {
      return false;
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter < index) {
      counter += 1;
      currentNode = currentNode.next;
    }
    if (currentNode === this.head) {
      this.head = null;
      this.tail = null;
    }
    if (currentNode.prev) {
      currentNode.prev.next = currentNode.next;
    }
    if (currentNode.next) {
      currentNode.next.prev = currentNode.prev;
    }
    if (currentNode === this.head) {
      this.head = currentNode.next;
    }
    if (currentNode === this.tail) {
      this.tail = currentNode.prev;
    }
    this.length--;
    return true;
  }
}

module.exports = DoublyLinkedList;
