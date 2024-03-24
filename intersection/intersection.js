const intersection = (a, b) => {
  let setA = new Set(a)
  let results = [];
  for(let value of b){
    if(setA.has(value)){
      results.push(value)
    }
  }
  return results
};
​
module.exports = {
  intersection,
};
​