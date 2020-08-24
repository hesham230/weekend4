const trimString = (str) => {
 let newStr = '';
  if (str.length > 2){
    for(let i=1; i<str.length-1; i++){
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(trimString('heshamMo'));