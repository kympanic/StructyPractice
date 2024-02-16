const pairSum = (numbers, targetSum) => {
  let result = {}
  let final =[]
  for(let i = 0; i < numbers.length;i++){
    let num = numbers[i]
    let complement = targetSum - num;
    if(complement in result){
      final.push(i, result[complement])
    }
    result[num] = i;
  }
  return final
};
​
module.exports = {
  pairSum,
};
​