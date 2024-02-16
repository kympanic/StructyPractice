const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  while(j <= s.length){
    if(s[j]=== s[i]){
      j += 1;
    }else{
      let count = j - i;
      if(count ===1){
        result.push(s[i])
      }else{
        result.push(String(count),s[i])
      }
      i = j
    }
  }
  
  return result.join("")
};
​
module.exports = {
  compress,
};
​