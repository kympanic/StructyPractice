// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;
  while(current !== null){
    if(count === index) return current.val;
    current = current.next;
    count += 1
  }
  return null
};
​
module.exports = {
  getNodeValue,
};
​