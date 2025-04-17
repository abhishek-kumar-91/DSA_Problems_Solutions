let arr = [100,2,3,400,5,6,99];
console.log("Before adding the elements", arr.length)
arr[arr.length ] = 76;
arr.push(99);
console.log("After adding the elements", arr.length)

arr.shift(); // remove first element from the array
console.log(arr);

console.log(arr.length); //finding length of the array

console.log(arr[2]); //access the third item from the array

console.log(typeof arr);
const strarr = arr.toString();
console.log(typeof strarr, strarr)

console.log(arr.includes(100))

for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
        if(arr[j] < arr[i]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr)

arr.reverse()

for(let i = 0; i < arr.length/2; i++){
    let j = arr.length - 1 - i; // Index from the end
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(arr)

let arr2 = [5,5,454,54,5,45,4,4,4];
let mergedarr= arr.concat(arr2);
// console.log(mergedarr);

mergedarr.forEach((val, i) => {
    console.log(val, i);
})

Medium questions
let largest = arr[arr.length-1];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest)

const filterEvenNumber = arr.filter((ele) => (
    ele % 2 === 0
))
console.log(filterEvenNumber)

const squareNumber = arr.map((val) => (
    val * val
))
console.log(squareNumber);

function findingDuplicate(arr){
    const seen = new Set();
    const duplicates = new Set();
  
    for (let num of arr) {
      if (seen.has(num)) {
        duplicates.add(num);
      } else {
        seen.add(num);
      }
    }
  
    return [...duplicates];
}

console.log(findingDuplicate([1, 2, 3, 2, 4, 5, 1]))

const falsyarr = [0, 1, false, 2, "", 3, null, undefined, NaN];

const newArr = falsyarr.filter(item => item)
console.log(newArr);
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = arr1.filter(item => arr2.includes(item));
console.log(intersection);