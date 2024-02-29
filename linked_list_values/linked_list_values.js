// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const linkedListValues = (head) => {
  let results = [];
  let current = head;
  while(current !== null){
    results.push(current.val)
    current = current.next;
  }
  return results
};
​
module.exports = {
  linkedListValues,
};
​