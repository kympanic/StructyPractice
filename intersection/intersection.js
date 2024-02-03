const intersection = (a, b) => {
  // todo
  let newArray = []
  let theSet = new Set(a)
  for(let i = 0; i < b.length;i++){
    if(theSet.has(b[i])){
      newArray.push(b[i])
    }
  }
  return newArray
};
​
​
module.exports = {
  intersection,
};
​