let arr = [12, 3, 45, 68, 3, 78, 3, 78, 8, 8, 5];
let new_arr = [12, 3, 45, 68, 3, 78, 3, 78, 8, 8, 5];

// delete arr[0]; // Deletes the element at the specified index (does not change the length of the array)

// let merge = arr.concat(new_arr); // Merges two or more arrays and returns a new array but they not change the original array

// let sorting = arr.sort(); // Sorts the elements of an array in place and returns the sorted array (default is ascending order) they change the original array 

// let compare = (a, b) => {  
//     return a - b; // For ascending order
// }
// arr.sort(compare); // Sorts the elements of an array in place and returns the sorted array (custom sorting function)
// console.log(arr); // 3,3,3,5,8,8,12,45,68,78,78

// arr.reverse(); // Reverses the elements of an array in place and returns the reversed array (changes the original array)


// let arr_num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr_num4.splice(2,1,"Harry"); // Adds new elements at the specified index (2) and removes 0 elements (does not change the original array)
// console.log(arr_num4)

let arrdou = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newnum = arrdou.slice(2, 5); // Returns a shallow copy of a portion of an array into a new array object selected from start to end (does not change the original array)
console.log(newnum); // 45,68,3
