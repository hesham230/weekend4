const weirdCase = (str) => {
  let newStr = '';
  for(let i=0; i<str.length; i++){
    newStr += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  return newStr;
}


console.log(weirdCase('string'));
console.log(weirdCase('Weird string case'));

