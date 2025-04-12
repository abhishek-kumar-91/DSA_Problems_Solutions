
//Print all array element 
// const exam = [7,9,8,9,5,5,5,5,9,65,5,6,26,56,2,65,92,6259,5,6,9];

// for(val of exam){
//     console.log(val);
// }

// class of average
// const arr = [85, 97, 44, 37, 76, 60];
// const size = arr.length
// const result = arr.reduce((pr, cr, idx)=> (
//     (pr+cr)
// ))/size
// const average = result / size;

// console.log(result, "result")

let price = [250, 645, 300, 900, 50];

for(let i = 0; i < price.length; i++){
    let finalPrice = price[i] - ((price[i] * 10) / 100);
    price[i] = finalPrice;
}   

for(val of price){
    console.log(val);
}