const intersection = (a, b) => {
  let interArr = [];
  let newSet = new Set(a);
  console.log(newSet)
 for(let i = 0; i < b.length; i++){
   if(newSet.has(b[i])){
     interArr.push(b[i])
   }
 } 
  return interArr
};
intersection([4,2,1,6], [3,6,9,2,10])
​
module.exports = {
  intersection,
};
​