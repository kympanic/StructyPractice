pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
const pairProduct = (numbers, targetProduct) => {
  let previousNums = {};
  for(let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    let complement = targetProduct / num;
    if(complement in previousNums) return [i,previousNums[complement]]


    previousNums[num] = i
  }
};


module.exports = {
  pairProduct,
};

