const pairProduct = (numbers, targetProduct) => {
  let counter = {};


  for(let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    let complement = targetProduct / num;
    if(complement in counter){
      return [counter[complement], i]
    }
    
    counter[num] = i; 
  }


  
};


module.exports = {
  pairProduct,
};

