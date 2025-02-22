// Question
// Write a function fizzBuzz(n) that prints numbers from 1 to n, but 
// for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", 
// and for multiples of both 3 and 5 print "FizzBuzz".

function fizzBuzz(n){
    for(i = 1; i <= n ; i++){
        if(i % 3 == 0 && i % 5 ==0){
            console.log(`FizzBuzz`);
        }else if(i % 3 == 0){
            console.log(`Fizz`);
        }else if(i % 5 == 0){
            console.log(`Buzz`);
        }else{
            console.log(i);
        };
    };
};

fizzBuzz(20)