function titleCase(string){
    let words = string.toLowerCase().split(" ")
    for(i in words){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ")    
}

let ans = titleCase('sHoRt AnD sToUt')
console.log(ans);
