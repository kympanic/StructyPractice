const mostFrequentChar = (s) => {
  let counter = {};
  for(let char of s){
    if(!(char in counter)){
      counter[char] = 0;
    }
    counter[char]+= 1;
  }
  let best = null
  for(char in counter){
    if(best === null || counter[char] > counter[best]){
      best = char
    }
  }
  return best
};
​
module.exports = {
  mostFrequentChar,
};
​