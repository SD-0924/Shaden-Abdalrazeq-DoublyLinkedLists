const DoublyLinkedList = require("./classes.js");

let myList = new DoublyLinkedList();
myList.push(6);
myList.push(5);

myList.push(55);
myList.push(66);
myList.push(1);
//myList.shift();
//myList.unshift(11);
console.log(myList.set(0, 7));
console.log(myList.get(0));
console.log(myList.get(1));
console.log(myList.get(2));
console.log(myList.get(3));
console.log(myList.get(4));
console.log(myList.get(5));
myList.insert(0,23);
myList.remove(5);
console.log(myList.get(0));
console.log(myList.get(1));
console.log(myList.get(2));
console.log(myList.get(3));
console.log(myList.get(4));
console.log(myList.get(5));


//console.log(myList);
//console.log(myList);