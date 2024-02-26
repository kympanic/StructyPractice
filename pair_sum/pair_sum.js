const pairSum = (numbers, targetSum) => {
  let previousNums = {}
  
  for(let i = 0; i < numbers.length; i++){
    let number = numbers[i]
    let complement = targetSum - number
    if(complement in previousNums) return [previousNums[complement],i]
    previousNums[number] = i;
  }
  
  
};
​
module.exports = {
  pairSum,
};
​
    if(!(counter.has(char))){