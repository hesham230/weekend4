function isIsogram(str){
  return str.toLowerCase().split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
 }

 console.log(isIsogram('Dermatoglyphics')); // true
 console.log(isIsogram('aba')); // false
 console.log(isIsogram('moOse')); // false
 