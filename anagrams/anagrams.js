const anagrams = (s1, s2) => {
  let counter = {}
  if(s1.length !== s2.length) return false;
  
  for(let char of s1){
    if(!(char in counter)){
      counter[char] = 1;
    }else{
      counter[char] += 1;
    }
  }
  
  for(let char of s2){
    if(char in counter){
      counter[char] -= 1
    }else{
      return false;
    }
  }
  
  for(char in counter){
    if(counter[char] !== 0){
      return false;
    }
  }
  
  return true
};
​
module.exports = {
  anagrams,
};
​