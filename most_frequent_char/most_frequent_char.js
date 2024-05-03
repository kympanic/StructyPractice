mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'
const mostFrequentChar = (s) => {
  let counter = {};
  for(let char of s){
    if(!(char in counter)){
      counter[char] = 0;
    }
    counter[char] += 1;
  }


  let best = null;
  for(let char of s){
    if(best === null || counter[char] > counter[best]) best = char  
  }


  return best;
};


module.exports = {
  mostFrequentChar,
};

