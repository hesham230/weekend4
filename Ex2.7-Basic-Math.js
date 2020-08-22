const basicMath = (op, value1, value2) => {
  let result = 0;
  switch(op){
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
      break;
  }
  return result;
}

console.log(basicMath('/',49,7));