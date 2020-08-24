const linearSearch = (arr, x) => {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  } return -1;
}

const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];

console.log(linearSearch(arr,110));
console.log(linearSearch(arr,175));