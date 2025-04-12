//print even number
// let nums = 100;

// for(let i = 0; i < num; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// } 

// Guesing Number game
const res = document.getElementsByClassName("res")[0];
const btn = document.getElementsByTagName("button")[0];
const input = document.querySelector("input");

function checkGuessNumber(){
    const nums = parseInt(input.value);
    const guessNumberArr = [24,25,777,15,35,889,655,1,2,3,4,99,66,200,44,88,89];
    let checkRes = false;
    for(let i = 0; i < guessNumberArr.length; i++){
        if(nums === guessNumberArr[i]){
            res.innerHTML = `<h1>You are a winner! 🎉 Number: ${nums}</h1>`;
            checkRes = true;
            break;
        }

        if(!checkRes){
            res.innerHTML = "<h1>You are a loser 😢</h1>";
        }
        input.value = "";
       
    }
}

btn.addEventListener("click", checkGuessNumber);
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkGuessNumber();
    }
});


//creating username;


const userInput = document.getElementById("userInput");
const userBtn = document.getElementById("userBtn");
const userRes = document.getElementById("userRes");

function usernameCreate(){
    const userName = userInput.value;
    const resUser = userName.trim();
    const userNameLength = resUser.length;
    userRes.innerHTML = `<h1>You name is ${userName} and username is @${resUser+userNameLength}`
    userInput.value = "";
}

userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        usernameCreate();
    }
})

userBtn.addEventListener('click', usernameCreate)