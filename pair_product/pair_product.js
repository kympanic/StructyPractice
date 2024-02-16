const pairProduct = (numbers, targetProduct) => {
  let results = {}
  for(let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    let complement = targetProduct / num;
    if(complement in results) return [i,results[complement]]
    results[num] = i
  }
};
​
module.exports = {
  pairProduct,
};
​