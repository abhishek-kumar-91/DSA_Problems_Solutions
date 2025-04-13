// Write a function to add two numbers.

function add(a, b){
    return a+b;
}

//Write a function to find the square of a number.

function square(a){
    return a*a;
}


//Write a function that returns the length of a string.

function lengthOfString(str){
    return str.length;
}

//Create a function that returns true if a number is even.

function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

//Convert a function to arrow syntax.
const even = (num) => {
    if(num%2 === 0){
        return true;
    }else{
        return false;
    }
}

//Write a function to return the maximum of two numbers.

function maxReturn(a, b){
    if(a > b){
        return a;
    }else if(b > a){
        return b;
    }
}

//Write a function to return "Hello, [name]".

function returnName(name){
    return `Hello, ${name}`;
}

//Create a function that returns the type of a parameter.

function typeOfParameter(a){
    return typeof a;
}

//Create a function with a default parameter.

function defaultPara(a = 5, b){
    return a * b;
}

//Write a function that returns the factorial of 5.

function factorial(f){
    
}
