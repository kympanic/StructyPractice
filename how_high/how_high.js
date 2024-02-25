// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const howHigh = (node) => {
  if(node === null) return -1;
  let leftSide = howHigh(node.left)
  let rightSide = howHigh(node.right)
  console.log(leftSide)
  return 1 + Math.max(leftSide,rightSide)
};
​
module.exports = {
  howHigh,
};
​