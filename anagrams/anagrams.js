anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('paper', 'reapa'); // -> false
anagrams('elbow', 'below'); // -> true
anagrams('tax', 'taxi'); // -> false
anagrams('taxi', 'tax'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('abbc', 'aabc'); // -> false
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo') // -> false
const anagrams = (s1, s2) => {
  if(s1.length !== s2.length) return false;
  let counter ={};
  for(let char of s1){
    if(!(char in counter)){
      counter[char] = 0;
    }
    counter[char] +=1
  }


  for(let char of s2){
    if(!(char in counter)){
      return false
    }else{
      counter[char] -=1;
    }
  }


  for(let char in counter){
    if(counter[char] !== 0) return false
  }


  return true;
};


module.exports = {
  anagrams,
};

