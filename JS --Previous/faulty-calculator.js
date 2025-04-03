console.log("This is a faulty calculator")

// let percent= Math.floor(Math.random() * 100);
// console.log(percent);
// let a = parseFloat(prompt("enter a number"));
// let b = parseFloat(prompt("enter a second number"));
// let operator = prompt("enter a operator ")

// console.log(percent);
// function less(){
//     switch (operator){
//         case "+" : alert(a-b);
//         break;
//         case "-" : alert(a**b);
//         break;
//         case "**" : alert(a/b);
//         break;
//         case "/" : alert(a/b);
//         break;
//         case "*" : alert(a*b);
//         break;
//         default : 
//         alert("Enter A operator")
//         break;
//     }
// }
 
// function correct(){
//     switch (operator){
//         case "+" : alert(a+b);
//         break;
//         case "-" : alert(a-b);
//         break;
//         case "**" : alert(a**b);
//         break;
//         case "/" : alert(a/b);
//         break;
//         case "*" : alert(a*b);
//         break;
//         default : 
//         alert("Enter A operator ")
//         break;
//     }
// }

// if(percent < 10){
//     correct();
// }

// else{
//    less();
// }


let random = Math.random();
console.log(random)
let number1 = prompt("Enter First Numberr");
let operator = prompt("enter operator")
let number2 = prompt("Enter Second Number");
let obj = {
    "+":"-",
    "/":"*",
    "*":"+",
    "-":"/"
}
if(random < 0.1){
    console.log(`This is the ans ${eval(`${number1} ${operator} ${number2}`)} `)
    alert(`This is the ans ${eval(`${number1} ${operator} ${number2}`)} `)
}
else{
    operator = obj[operator];
    alert(`This is the ans ${eval(`${number1} ${operator} ${number2}`)} `)
}



