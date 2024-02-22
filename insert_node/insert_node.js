class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const insertNode = (head, value, index) => {
  if(index === 0){
    let newHead = new Node(value)
    newHead.next = head;
    return newHead;
  }
  let current = head;
  let count = 0;
  while(current !== null){
    let next = current.next;
    if(count === index - 1){
      current.next = new Node(value);
      current.next.next = next;
    }
    count += 1
    current = current.next
  }
  return head;
};
​
module.exports = {
  insertNode,
};
​