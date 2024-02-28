class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const createLinkedList = (values) => {
  let dummyHead = new Node(null)
  let tail = dummyHead;
  
  for(let char of values){
    tail.next = new Node(char)
    tail = tail.next;
  }
  return dummyHead.next;
};
​
module.exports = {
  createLinkedList,
};
​
  