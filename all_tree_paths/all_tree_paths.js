// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const allTreePaths = (root) => {
  if(root === null) return [];
  if(root.left === null && root.right === null) return [[root.val]]
  
  let paths = []
  let leftPath = allTreePaths(root.left)
  for(let subPath of leftPath){
    paths.push([root.val,...subPath])
  }
  let rightPath = allTreePaths(root.right)
  for(let subPath of rightPath){
    paths.push([root.val,...subPath])
  }
  
  return paths;
};
​
module.exports = {
  allTreePaths,
};
​
  