const uncompress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  let numbers = "0123456789"
  while(j < s.length){
    if(numbers.includes(s[j])){
      j+=1
    }else{
      let count = Number(s.slice(i,j))
      for(let k = 0; k < count; k ++){
        result.push(s[j])
      }
      j+=1;
      i = j
    }
  }




  return result.join('')
};


module.exports = {
  uncompress,
};

