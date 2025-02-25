let vowels = ['a', 'e', 'i', 'o', 'u']

function countVowels(str){
    let strArr = str.toLowerCase().split("")
    count = 0
    for(i in strArr){
        if(vowels.includes(strArr[i])){
            count ++;
        };
    };
    return count;
}

console.log(countVowels('hello'));
console.log(countVowels('why'));
console.log(countVowels('mississippi'));
