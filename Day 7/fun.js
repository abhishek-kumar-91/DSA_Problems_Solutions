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
    let factorial = 1;
    for(let i = 1; i <= f; i++){
        factorial *= i;
    }
    return factorial;
}


console.log(factorial(4));

//Medium questions start from here

// Create a function that takes an array and returns the sum of all numbers.


function sumOfArra(arr){
   const sum =  arr.reduce((back, curr) => (
        back+curr
    ))

    return sum
}

// Create a function that checks if a string is a palindrome.

function checkStrPalindrom(str){
    let reverse = "";
    for(let i = str.length-1; i >= 0; i--){
            reverse += str[i];
    }

    if(str === reverse){
        return "string is palindrom"
    }else{
        return "String is not palindrom"
    }
}

// console.log(checkStrPalindrom("dee"));

//Write a function that counts vowels in a string.

function countVowels(vow){
    let count = 0;
    for(let i = 0; i < vow.length; i++){
        if(vow[i] === "a" || vow[i] === "e" || vow[i] === "i" || vow[i] === "o" || vow[i] === "u"){
            count++;
        }
    }

   if(count === 0){
    return "Vowel not found"
   }else{
    return count;
   }
}

// console.log(countVowels("abhishek"));

//Write a function that returns all prime numbers up to n.

function primeNumber(n){
    let res = [];
    for(let i = 2; i <= n; i++){
        let isPrime = true;
       for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
       }

       if(isPrime){
        res.push(i);
       }
    }
    return res;
}

// console.log(primeNumber(100))

//Write a function that checks if a number is in a given array.

function isNumberPresent(a){
    let arr = [5,5,62,62,54,2,621,54156165,16541651,5641,5,1,26,216,23,2,626,2326,26,2,62,62];
    if(arr.includes(a)){
        return "true"
    }else{
        return "false"
    }
}

// console.log(isNumberPresent(100));

//Create a function that accepts another function as an argument (callback).

function callBack(cb){
    let profit = 2500 * 10 / 100
    return cb(profit);
}

function cb(p){
    return `cost of P: 2500 + profit ${p} = ${2500 + p}`
}

// console.log(callBack(cb));

//Write a recursive function to calculate factorial.

function facRecursive(n){
    if (n === 0 || n === 1) return 1;
    return n * facRecursive(n - 1);
}

// console.log(facRecursive(5))

//Write a function that flattens a nested array.

function flattenBruteForce(arr) {
    let result = [];
    let stack = [...arr]; // Clone the array into a stack

    while (stack.length) {
        let item = stack.shift(); // take first element

        if (Array.isArray(item)) {
            // Push its elements to the front of the stack
            stack = item.concat(stack); 
        } else {
            result.push(item); // Flat value, add to result
        }
    }

    return result;
}

// console.log(flattenBruteForce([1, [2, 3], [4, [5, 6]], 7]));
// // Output: [1, 2, 3, 4, 5, 6, 7]

//Write a function that reverses each word in a sentence.

function reverseEachWord(sentence) {
    let result = "";
    let word = "";

    for (let i = 0; i <= sentence.length; i++) {
        let char = sentence[i];

        // If we reach space or end of sentence
        if (char === " " || i === sentence.length) {
            // Reverse the word manually
            for (let j = word.length - 1; j >= 0; j--) {
                result += word[j];
            }

            if (char === " ") {
                result += " ";
            }

            word = ""; // Reset for next word
        } else {
            word += char; // Build the current word
        }
    }

    return result;
}

// Example usage:
console.log(reverseEachWord("hello world")); 
// Output: "olleh dlrow"


function countArguments(){
    console.log(arguments.length);
}

countArguments(1,6,6,6,6,465,456,1,561,65,1456);