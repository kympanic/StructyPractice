class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const insertNode = (head, value, index) => {
  if(index === 0){
    newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  let count = 0;
  let current = head
  while(current !== null){
    if(count === index - 1){
      next = current.next;
      current.next = new Node(value);
      current.next.next = next;
    }
    count += 1;
    current = current.next;
  }
  return head;
};
​
module.exports = {
  insertNode,
};
​