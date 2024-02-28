
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const levelAverages = (root) => {
  let  levels = []
  let avgLevel = []
  fillLevels(root,levels,0)
  for(level of levels){
    avgLevel.push(avg(level))
  }
  return avgLevel
};
​
const fillLevels = (root,levels, levelNum)=>{
  if(root === null) return [];
  if(levels.length === levelNum){
    levels[levelNum] = [root.val]
  }else{
    levels[levelNum].push(root.val)
  }
  fillLevels(root.left,levels,levelNum + 1)
  fillLevels(root.right,levels,levelNum + 1)
}
​
​
​
const avg = (array)=> {
  let sum = 0;
  for(let value of array){
    sum += value
  }
  
  return sum / array.length
}
​
module.exports = {
  levelAverages,
};
​