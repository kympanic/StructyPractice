const compress = (s) => {
  //two pointers
  let i = 0;
  let j = 0;
  let results = [];


  while(j <= s.length){
      if(s[i] === s[j]){
        j+=1
      }else{
        let string = s.slice(i,j)
        if(string.length === 1){
          results.push(s[i])
          i = j
        }else{
            results.push(string.length,s[i])
            i = j
        }
      }
  }
  




  return results.join('')
  
};


module.exports = {
  compress,
};

