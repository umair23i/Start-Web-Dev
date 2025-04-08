var prompt = require("prompt-sync")();

let number = Math.ceil((Math.random())*100) +1;
console.log(number)

let chances = 0;
let input = parseInt(prompt("Enter a Number"))
++chances;
do {
    if (number > input) {
        console.log("This number is lesser then you number")
        input = parseInt(prompt("Plz try again"))
        ++chances;
        continue;
    }
    else if(number < input){
        console.log("This number is greater then you number")
        input = parseInt(prompt("Plz try again"))
        ++chances;
        continue;
    }
} while (number != input);
let score = 100 - chances;
console.log(`This is your number ${input} and this is orginal number ${number}
    your chances = ${score}`)