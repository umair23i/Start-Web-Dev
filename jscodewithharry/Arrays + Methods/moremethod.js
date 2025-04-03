let arr = [12, 3, 45, 68, 3, 78, 3, 78, 8, 8, 5];
let new_arr = [12, 3, 45, 68, 3, 78, 3, 78, 8, 8, 5];

delete arr[0]; // Deletes the element at the specified index (does not change the length of the array)

let merge = arr.concat(new_arr); // Merges two or more arrays and returns a new array but they not change the original array

let sorting = arr.sort(); // Sorts the elements of an array in place and returns the sorted array (default is ascending order) they change the original array 