const intersection = (a, b) => {
  
  let results = [];
  let setA = new Set(a);
  for(let val of b){
    if(setA.has(val)){
      results.push(val)
    }
  }








  return results;
};


module.exports = {
  intersection,
};

