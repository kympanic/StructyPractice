// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;
  while(current !== null){
    if(count === index){
      return current.val;
    }
    count++
    current = current.next
  }
  return null
};
​
module.exports = {
  getNodeValue,
};
​