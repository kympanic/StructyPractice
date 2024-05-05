pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
pairSum([9, 9], 18); // -> [0, 1]
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]
const pairSum = (numbers, targetSum) => {
  let pairs = {};
  for(let i = 0; i < numbers.length; i++){
    let num = numbers[i]
    let complement = targetSum - num;
    if(complement in pairs) return [i,pairs[complement]]
    pairs[num] = i
  }
};


module.exports = {
  pairSum,
};

