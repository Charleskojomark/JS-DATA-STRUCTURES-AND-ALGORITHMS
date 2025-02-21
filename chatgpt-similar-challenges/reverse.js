// Question
// Write a function reverseString(str) that takes a string and returns the reversed version of it

function reverseString(str){
    let sep = str.split("")
    sep.reverse()
    return sep.join("")
}

console.log(reverseString("Charles"));
