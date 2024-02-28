// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const longestStreak = (head) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let current = head;
  let previousValue = null;
  while(current !== null){
    if(current.val === previousValue){
      currentStreak +=1
    }else{
      currentStreak = 1;
    }
    previousValue = current.val
    current = current.next;
    
    if(currentStreak > maxStreak){
      maxStreak = currentStreak;
    }
  }
  
  return maxStreak;
};
​
module.exports = {
  longestStreak,
};
​