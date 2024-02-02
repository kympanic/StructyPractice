const uncompress = (s) => {
  // todo
  let result = [];
  let i = 0;
  let j = 0;
  let numbers = "0123456789"
  
  while(j < s.length){
    if(numbers.includes(s[j])){
      j+=1;
    }else{
      let count = Number(s.slice(i,j))
      for(let x = 0; x < count;x++){
        result.push(s[j])
      }
      j+=1;
      i= j
    }
  }
  return result.join("")
};
uncompress("2c3a1t")
module.exports = {
  uncompress,
};
​
​