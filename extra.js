
// what will be the output??

// var arrA = [0,1,2,3,4,5];
// var arrB = arrA;
// arrB[0]=42;
// console.log(arrA)

// var arrA = [0,1,2,3,4,5];
// var arrB = arrA.slice();
// arrB[0]=42;
// console.log(arrA)

// var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
// var arrB = arrA;
// arrB[0].prop1=42;
// console.log(arrA);

var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
var arrB = arrA.slice();
arrB[0].prop1=42;
arrB[3] = 20;
console.log(arrA);