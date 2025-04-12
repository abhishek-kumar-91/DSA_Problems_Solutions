
// Print all array element 
const exam = [7,9,8,9,5,5,5,5,9,65,5,6,26,56,2,65,92,6259,5,6,9];

for(val of exam){
    console.log(val);
}

// class of average
const arr = [85, 97, 44, 37, 76, 60];
const size = arr.length
const result = arr.reduce((pr, cr, idx)=> (
    (pr+cr)
))/size
const average = result / size;

console.log(result, "result")

let price = [250, 645, 300, 900, 50];

for(let i = 0; i < price.length; i++){
    let finalPrice = price[i] - ((price[i] * 10) / 100);
    price[i] = finalPrice;
}   

for(val of price){
    console.log(val);
}

const company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

company.shift();
company.splice(1,1,"OLA");
company.push("Amazon");

for(val of company){
    console.log(val);
}

// let count = 0;
const vow = "abhishek"
function vowelsCount(vow){
    for(let v of vow){
        if(v === "a" || v === "e" || v === "o" || v === "u" || v === "i"){
            count++;
        }
    }
}
vowelsCount(vow)

console.log(count)
let count = 0;
const str = "abhishek";

const vowels = (vow) => {
    for(let char of vow){
        if(char === "a" || char === "i" || char === "e" || char === "o" || char === "u"){
            count++;
        }
    }
}

vowels(str);

console.log(count);


// for each

const arrd = [55,5,6,2652,6,262,6262,62,56,256,26,525,62,652,652];

arrd.forEach((val) => {
    let square = val * val;
    console.log("Square of val: ", square);
})

const studentMarks = [97,56,89,64,24,3,100,10,99,96,95,33,66,47];

const finalRes = studentMarks.filter((val) => (
    val > 90
))

for(let v of finalRes){
    console.log(v)
}

const res = finalRes.reduce((prr, crr)=> {
    console.log("prr: ", prr, "crr: ", crr);
    return prr*crr;
})

console.log("Product: ", res);