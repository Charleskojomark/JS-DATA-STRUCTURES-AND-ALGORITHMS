function calculator(a, b, operator){
    if (operator == '+'){
        return a + b;
    }else if(operator == '-'){
        return a - b;
    }else if(operator == '/'){
        return a / b;
    }else if(operator == '*'){
        return a * b;
    }else {throw new Error('Invalid Operator')}
}

console.log(calculator(3, 4, '-'));
