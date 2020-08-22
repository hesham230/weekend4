const abbreviate = (str) => {
  let result = '';
  let first = '';
  let last = '';
  const newStr = str.split(' ');
  for(let i=0; i<newStr.length; i++){
    first = newStr[0];
    last = newStr[1];
    result = first[0].toUpperCase() + "." + last[0].toUpperCase();
  }
  return result;
}
 console.log(abbreviate('sam harris'));
 console.log(abbreviate('Patrick Feeney'));