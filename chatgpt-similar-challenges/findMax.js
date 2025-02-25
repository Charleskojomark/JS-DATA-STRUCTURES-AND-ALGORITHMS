// Question
// Write a function findMax(arr) that returns the largest number in an array.

function findMax(arr){
    let max = arr[0];
    for(i in arr){
        if (max < arr[i]){
            max = arr[i]
        }
    };
    return max;
};

console.log(findMax([7,12, 1, 3, 5,9, 4, 3, 8]));
