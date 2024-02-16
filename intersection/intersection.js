const intersection = (a, b) => {
  let setA = new Set(a);
  let result = []
  for(let item of b){
    if(setA.has(item)){
      result.push(item)
    }
  }
  return result
};
​
module.exports = {
  intersection,
};
​