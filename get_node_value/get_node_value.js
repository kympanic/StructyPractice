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
      if(count === index)return current.val;
      current = current.next;
      count +=1
    }
  return null;
};
​
module.exports = {
  getNodeValue,
};
​
  while(current1 !== null && current2 !== null){