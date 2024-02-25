class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
​
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
​
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
​
​
const allTreePaths = (root) => {
  if(root === null) return [] ;
  if(root.left === null && root.right === null) return [[root.val]];
  
  let paths = [];
  let leftPath = allTreePaths(root.left)
  for(let path of leftPath){
    console.log(path,"this is left")
    paths.push([root.val,...path])
  }
  let rightPath = allTreePaths(root.right)
  for(let path of rightPath){
    console.log(path,"this is right")
    paths.push([root.val,...path])
  }
  
  return paths
};
​
allTreePaths(a)
​
module.exports = {
  allTreePaths,
};
​