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
  for(let item of values){
    tail.next = new Node(item)
    tail = tail.next
  }
  return dummyHead.next
};
​
module.exports = {
  createLinkedList,
};
​
};