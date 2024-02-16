const pairProduct = (numbers, targetProduct) => {
  let results = {}
  for(let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    let complement = targetProduct / num;
    if(complement in results) return [results[complement],i]
    results[num] = i
  }
};
​
module.exports = {
  pairProduct,
};
​