// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const allTreePaths = (root) => {
  if(root === null) return []
  if(root.left === null && root.right == null) return [[root.val]]
  
  let paths = []
  
  let lethPath = allTreePaths(root.left)
  
  for(let path of lethPath){
    paths.push([root.val,...path])
  }
  let rightPath = allTreePaths(root.right)
  for(let path of rightPath){
    paths.push([root.val,...path])
  }
  
  
  return paths;
};
​
module.exports = {
  allTreePaths,
};
​