const mostFrequentChar = (s) => {
  let counter = {};
  for(let char of s){
    if(!(char in counter)){
      counter[char] = 0;
    }
    counter[char]+=1
  }
  
  let mostChar = null;
  for(let char of s){
    if(mostChar === null || counter[char] > counter[mostChar]){
      mostChar = char
    }
  }
  return mostChar
};
​
module.exports = {
  mostFrequentChar,
};
​
  }