const pairProduct = (numbers, targetProduct) => {
  let previousNums = {};
  for(let i = 0; i < numbers.length; i++){
    let number = numbers[i]
    let complement = targetProduct / number;
    if(complement in previousNums) return [previousNums[complement], i]
    
    previousNums[number] = i;
  }
};
​
module.exports = {
  pairProduct,
};
​
    if(!(counter.has(char))){