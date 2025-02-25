function isStringOdd(str){
    let strArr = str.split("");
    if(strArr.length % 2 == 0){
        return false
    }
    return true
}

function isPalindrome(string){
    let stringArray = string.split("")
    let value
    if(string == " "){
        value = true
    } else if(!isStringOdd(string)){
        value = false
    }else{
        for(i in stringArray){
            if(stringArray[0+i] !== stringArray[stringArray.length - 1+i]){
                value = false
            } else value = true
        } 
    }
    
    return value
}

let result = isPalindrome('mbccbm')
console.log(result);
