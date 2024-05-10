sumNumbersRecursive([5, 2, 9, 10]); // -> 26
sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1
sumNumbersRecursive([]); // -> 0
sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]); // -> 1001
sumNumbersRecursive([700, 70, 7]); // -> 777
sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55
sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // -> 0
sumNumbersRecursive([123456789, 12345678, 1234567, 123456, 12345, 1234, 123, 12, 1, 0]); // -> 1836311903
const sumNumbersRecursive = (numbers) => {
  if(!numbers.length) return 0;
  return numbers[0] + sumNumbersRecursive(numbers.slice(1))
};


module.exports = {
  sumNumbersRecursive,
};

