// const num = prompt("Enter the number to check isMultiple or not: ");

const num = 15;

if(num % 5 === 0){
    console.log("yes, number is multiple of 5");
}else{
    console.log("Not, number is not multiple of 5");
}

//switch statement

const score = 79;

switch(true){
    case score >= 80:
                    console.log("Grade A:", score);
                    break;
    case score >= 70 && score <= 89:
                    console.log("Grade B:", score);
                    break;
    case score >= 60 && score <= 69:
                    console.log("Grade C:", score);
                    break;
    case score >= 50 && score <= 59:
                    console.log("Grade D: ", score);
                    break;
    default:
            console.log("Fail: ", score);
}