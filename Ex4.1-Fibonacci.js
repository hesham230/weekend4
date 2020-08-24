// iterative solution
function fibonacci(num){
  let a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
// recursive solution
const fibonacciRec = (num) => {
  if (num <= 1) {
    return 1;
  }
  return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

console.log(fibonacci(8));
console.log(fibonacciRec(8));