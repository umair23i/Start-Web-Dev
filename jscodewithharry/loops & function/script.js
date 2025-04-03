const ps = require("prompt-sync");
const prompt = ps();
console.log("This is pracitce about loops and functions");

let marks = {
    harry: 99,
    shubham: 89,
    aditya: 90,
    ansh: 95,
    shivam: 98
}
// This is a for loop
// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
    
// }

// for (const keys in marks) {
//     console.log("the marks of " + keys + " are " + marks[keys]);
// }


// Enter A correct number

let num = 90;
let i 

while (i != num) {
    i = prompt("Enter a number to> ");
}

console.log("You have entered the correct number " + num);



let check = (num1,num2,num3)=>{
    return(num1+num2+num3)/3;
}

console.log(check(10,20,30));
