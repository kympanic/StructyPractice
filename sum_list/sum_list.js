// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const sumList = (head) => {
  if(head === null) return 0;
  if(head.next === null)return head.val
  return head.val + sumList(head.next)
};
​
module.exports = {
  sumList,
};
​