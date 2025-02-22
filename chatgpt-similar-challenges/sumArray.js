// Question
// Write a function sumArray(arr) that takes an array of numbers and returns their sum.


function sumArray(arr){
    let sum = 0;
    for(n = 0; n < arr.length; n++){
        sum = sum + arr[n];
    }
    return sum;
}

console.log(sumArray([0, 1, 2]));
