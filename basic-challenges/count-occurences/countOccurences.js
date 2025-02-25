function countOccurrences(string, char){
    let stringArray = string.split("");
    let count = 0;
    for(i in stringArray){
        if(stringArray[i] == char){
            count += 1;
        }
    };
    return count;
};

console.log(countOccurrences('hellowow', 'w')); // 2

console.log(countOccurrences('hello', 'z'))