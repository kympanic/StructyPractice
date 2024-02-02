const anagrams = (s1, s2) => {
  // todo
  if(s1.length !== s2.length) return false;
  let count = {}
  for(let char of s1){
    if(!(char in count)){
      count[char] = 0
    }
    count[char]+=1
  }
  for(let char of s2){
    if(char in count){
      count[char]-=1
    }else{
      return false
    }
  }
  for(let char in count){
    if(count[char]!== 0)return false
  }
​
  return true;
};
​
module.exports = {
  anagrams,
};
​
  }