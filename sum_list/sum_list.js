// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const sumList = (head) => {
  // todo
  let sum = 0
  let current = head
  while(current !== null){
    sum += current.val;
    current = current.next
  }
  return sum;
};
​
module.exports = {
  sumList,
};
​
  if(head === null) return;