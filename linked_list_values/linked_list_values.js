// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const linkedListValues = (head) => {
  let array = [];
  let current = head;
  while(current !== null){
    array.push(current.val)
    current = current.next
  }
  
  return array;
};
​
module.exports = {
  linkedListValues,
};
​