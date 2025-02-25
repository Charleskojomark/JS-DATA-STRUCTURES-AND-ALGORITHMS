// function removeDuplicates(arr){
//     return [...new Set(arr)]
// }


function removeDuplicates(arr){
    const newArr = []
    for(i in arr){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true]));
