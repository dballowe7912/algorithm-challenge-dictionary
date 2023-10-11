class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
      var newNode = new Node(val)
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length ++;
      return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let removedHead = this.head;
        this.head = removedHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return removedHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
       let foundNode = this.get(index);
       if (foundNode) {
        foundNode.val = val;
        return true;
       }
       return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;
        console.log(removedNode);
        return removedNode;
    }
    reverse() {
    // - Swap the head and the tail
    let node = this.head;
    // - Create a variable called node and initialize it to the head property
    this.head = this.tail;
    this.tail = node;
    // - Create a variable called next
    let next = null;
    // - Create a variable called prev
    let prev = null;
    // - Loop through the list
        for (let i = 0; i < this.length; i++) {
        // - Set next to be the next property on whatever node is
        next = node.next;
        // - Set the next property on the node to be whatever prev is
        node.next = prev;
        // - Set prev to be the value of the node variable
        prev = node;
        // - Set the node variable to be the value of the next variable
        node = next;
        }
        return this;
    }
    print() {
        var arr = [];
        var current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let groceryList = new SinglyLinkedList();

groceryList.push("eggs");
groceryList.push("bacon");
groceryList.push("bread");
groceryList.push("milk");
groceryList.print();
groceryList.reverse();
groceryList.print();
