var prompt = require("prompt-sync")();

// Practice ser
// Practice 1

// let arr = [9,6,34,3,46,243,52,5]
// let a = prompt("Enter a number not letter> ")
// a = Number.parseInt(a);
// arr.push(a)
// console.log(arr)

// Practice 2
// let arr = [9, 6, 34, 3, 46, 243, 52, 5];
// let a;
// do {
//   a = prompt("Enter a number not letter> ");
//   a = Number.parseInt(a);
//   arr.push(a);
// } while (a != 0);
// console.log(arr);

// Practice 3
// let arr2 = [8134,345,12435,14,3882,3,2,2,235,145,4,4]
// let n = arr2.filter((x)=>{
//     return x % 10 == 0
// })
// console.log(n)

// Practice 4

let arr2 = Array.from({ length: 50 }, (_, i) => i + 1);
console.log(arr2)
// let n = arr2.map((x) => {
//   return x * x;
// });
// console.log(n);
// console.log(arr2)