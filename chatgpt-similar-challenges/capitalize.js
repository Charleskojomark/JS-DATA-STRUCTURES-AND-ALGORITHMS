// Question
// Write a function capitalizeFirstLetter(str) that capitalizes the first letter of a given string.

function capitalizeFirstLetter(str){
    let arr = str.split("")
    arr[0] = str[0].toUpperCase()
    return arr.join("")
}

console.log(capitalizeFirstLetter("charles"));
