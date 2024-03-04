const anagrams = (s1, s2) => {
  if(s1.length !== s2.length)return false;
  
  let counter = {}
  
  for(let char of s1){
    if(!(char in counter)){
      counter[char] = 0;
    }
    counter[char] += 1;
  }
  
  for(let char of s2){
    if(counter[char] === undefined){
      return false;
    }
    counter[char] -= 1
  }
  
  for(let char in counter){
    if(counter[char] !== 0) return false;
  }
  
  return true;
​
};
​
module.exports = {
  anagrams,
};
​