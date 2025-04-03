console.log("This is about Arrays in JavaScript");

let arr = [1, 2, 3, 4, 5,null,undefined,"hello",true,{}];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// Methods of Arrays
let tostr = arr.toString(); // Converts the array to a string

// console.log(tostr); 
let c = arr.join("_"); // Joins the array elements with a specified separator
// console.log(c);

let d = arr.pop(); // Removes the last element from the array and returns it
// console.log(d); // {} they remove this

let e = arr.push("Harry"); // Adds a new element to the end of the array and returns the new length of the array
console.log(arr,e); // 10

let f = arr.shift(); // Removes the first element from the array and returns it
// console.log(f); // 1

let g = arr.unshift("Harry"); // Adds a new element to the beginning of the array and returns the new length of the array
// console.log(g); // 10


