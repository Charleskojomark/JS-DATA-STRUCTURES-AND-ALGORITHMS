function reverseString(str){
    let stringArr = str.split("")
    let word = ""
    for(let i = stringArr.length - 1; i >= 0; i--){
        word = word + stringArr[i]
    }
    return word;
}


let result = reverseString('hello') // 'olleh'
console.log(result);
