const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


linkedListFind(a, "c"); // true
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


linkedListFind(a, "d"); // true
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


linkedListFind(a, "q"); // false
const node1 = new Node("jason");
const node2 = new Node("leneli");


node1.next = node2;


// jason -> leneli


linkedListFind(node1, "jason"); // true
const node1 = new Node(42);


// 42


linkedListFind(node1, 42); // true
const node1 = new Node(42);


// 42


linkedListFind(node1, 100); // false
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const linkedListFind = (head, target) => {
  if(head === null) return false;
  if(head.val === target) return true;
  return linkedListFind(head.next,target)
  
};


module.exports = {
  linkedListFind,
};

