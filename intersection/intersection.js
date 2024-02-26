const intersection = (a, b) => {
  let results = []
  let setA = new Set(a)
  for(let char of b){
    if(setA.has(char)){
      results.push(char)
    }
  }
​
  return results;
};
​
module.exports = {
  intersection,
};
​