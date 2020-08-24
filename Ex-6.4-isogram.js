// function isIsogram(str){
//   return str.toLowerCase().split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
//  }

const isIsogram = (str) => {
  
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
} 

 console.log(isIsogram('Dermatoglyphics')); // true
 console.log(isIsogram('aba')); // false
 console.log(isIsogram('moOse')); // false
 