const arr = [5,5,5,5,5,6,5,5];

const sortedArray = arr.sort((a,b) => a - b );

const x = (arr) => {

  for(let i=0; i<sortedArray.length; i++){
  return (sortedArray[i] === sortedArray[i+1] ? sortedArray[sortedArray.length-1] : sortedArray[i]);
  } 
  return ;
}

console.log(sortedArray);
console.log(x(arr));