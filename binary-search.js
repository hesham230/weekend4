const binarySearch = (sortedArray, x) =>{
  let lowIndex = 0;
  let highIndex = sortedArray.length - 1;
  while (lowIndex <= highIndex) {
    var midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (sortedArray[midIndex] === x) {
      return 'Element found!';
    } else if (sortedArray[midIndex] < x) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  } return 'Element not found!';
}

const arr = [1, 3, 5, 7, 8, 9];
console.log(binarySearch(arr,5));
console.log(binarySearch(arr,6));