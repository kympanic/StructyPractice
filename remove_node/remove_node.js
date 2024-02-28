// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const removeNode = (head, targetVal) => {
  if(head.val === targetVal) return head.next;
  
  let current = head;
  let prev = null;
  while(current !== null){
    let nextNode = current.next;
    if(current.val === targetVal){
      prev.next = nextNode;
      break;
    }
    prev = current;
    current = current.next;
  }
  
  
  return head;
};
​
module.exports = {
  removeNode,
};
​
      currentStreak +=1