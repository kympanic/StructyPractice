// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const reverseList = (head) => {
  // todo
  let current = head;
  let prev = null;
  while(current !== null){
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next
  }
  return prev;
};
​
module.exports = {
  reverseList,
};
​