const intersection = (a, b) => {
  let setA = new Set(a);
  let results = []
  for(let char of b){
    if(setA.has(char)){
      results.push(char)
    }
  }
return results;
};
​
module.exports = {
  intersection,
};
​