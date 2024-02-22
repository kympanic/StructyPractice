const pairProduct = (numbers, targetProduct) => {
  let previousNums = [];
  for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    let complement = targetProduct / number;
    if(complement in previousNums) return [i,previousNums[complement]]
    
    previousNums[number] = i
  }
};
​
module.exports = {
  pairProduct,
};
​