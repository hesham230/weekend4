const arr = [19, 5, 42, 2, 77];

// sort the array
const sortedArray = arr.sort((a,b) => a - b );
// sum arr[0] + arr[1]
const result = sortedArray[0] + sortedArray[1];

console.log(sortedArray);
console.log(`The sum the two lowest: ${result}`);