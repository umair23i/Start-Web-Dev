console.log("This is a loop with arrays");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Array using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Array using for each loop

arr.forEach((element)=> { 
    console.log(element)
})

// If we have any html collection we need to convert to Array first then we use Array.from function
let name = "Umair";
let nameArr = Array.from(name);
console.log(nameArr); // ['U', 'm', 'a', 'i', 'r']


// For...of

for (let item of arr) {
    console.log(item)  // they return the values of the array
}

for(let item in arr) {
    console.log(arr[item])  // they return the index of the array
}