const compress = (s) => {
  let results = []
  let i = 0;
  let j = 0;
  
  while(j <= s.length ){
    if(s[i] === s[j]){
      j += 1;
    }else{
      let num = j - i
      if(num === 1){
        results.push(s[i])
      }else{
        results.push(String(num),s[i])
      }
      i = j
    }
  }
  
  return results.join("")
  
};
​
module.exports = {
  compress,
};
​
​