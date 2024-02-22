// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const reverseList = (head) => {
  let currentNode = head;
  let prev = null;
  while(currentNode !== null){
    let next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
};
​
module.exports = {
  reverseList,
};
​