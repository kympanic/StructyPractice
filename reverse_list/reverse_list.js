// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const reverseList = (head) => {
  let currentNode = head;
  let previousNode = null;
  while(currentNode !== null){
    let next = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = next;
  }
  return previousNode
};
​
module.exports = {
  reverseList,
};
​