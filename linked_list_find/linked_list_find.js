// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const linkedListFind = (head, target) => {
  let current = head;
  while(current !== null){
    if(current.val === target){
      return true;
    }else{
      current = current.next
    }
  }
  return false
};
​
module.exports = {
  linkedListFind,
};
​
  if(head === null) return;