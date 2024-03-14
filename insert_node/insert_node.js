class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const insertNode = (head, value, index) => {
  if(index === 0){
    const newHead = new Node(value)
    newHead.next = head;
    return newHead;
  }
  
  let current = head;
  let count = 0;
  while(current !== null){
    if(count === index -1){
      let next = current.next;
      let newNode = new Node(value)
      current.next = newNode;
      current.next.next = next
    }
    count ++
    current = current.next;
  }
  return head;
};
​
module.exports = {
  insertNode,
};
​