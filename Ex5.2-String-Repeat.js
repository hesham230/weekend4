const repeat_str = (n,str) => {
  let newStr = '';
  for(let i=1; i<=n; i++){
    newStr += str;
  }
  return newStr;
}

console.log(repeat_str(5,'Hello'));