
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeLevels = (root) => {
  let levels = [];
  fillLevels(root,levels,0)
  return levels;
};
​
const fillLevels = (root,levels,levelNum) => {
  if(root === null) return;
  if(levels.length === levelNum){
    levels.push([root.val])
  }else{
    levels[levelNum].push(root.val)
  }
  fillLevels(root.left, levels, levelNum + 1)
  fillLevels(root.right, levels, levelNum + 1)
}
​
module.exports = {
  treeLevels,
};
​