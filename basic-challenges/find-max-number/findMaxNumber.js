function findMaxNumber(arr){
    let maxNumber = arr[0];
    for(i in arr){
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        };
    };
    return maxNumber;
};

console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
console.log(findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // 10
console.log(findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6])); // 10
