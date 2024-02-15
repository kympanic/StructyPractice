const pairProduct = (numbers, targetProduct) => {
  let prevNums = {};
 for(let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    let complement = targetProduct / num;
    if(complement in prevNums){
      return [prevNums[complement],i]
    }
    prevNums[num] = i;
  }
};
​
module.exports = {
  pairProduct,
};
​