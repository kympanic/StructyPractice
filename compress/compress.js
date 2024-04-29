const compress = (s) => {
  let i = 0;
  let j = 0;
  let result = [];
  while(j <= s.length){
    if(s[i] === s[j]){
      j+= 1;
    }else{
      let number = j - i
      if(number === 1){
        result.push(s[i])
      }else{
        result.push(number,s[i])
      }
      i = j;
    }
  }




  return result.join('')
};


module.exports = {
  compress,
};

