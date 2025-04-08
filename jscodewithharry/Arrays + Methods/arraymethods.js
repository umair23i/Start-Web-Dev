console.log(
  "This is about the methods fo arrays in javascript and their use map reduce filter"
);

let arr = [90, 909, 124, 1435, 6, 235];
// 1. Map method

let mapping = arr.map((value, index, array) => {
  // console.log(value, index, array);
})


// console.log(mapping)
// if we use map function that not change the orginal array the made a new array but the foreach loop they change the orginal array but map not

// 2. Filter method  they also made a new array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ar2 = arr2.filter((value) => {
  return value < 5;
});

// console.log(ar2)


// Reduce funtion  they edit the orignal array

let arr_red = [1,2,3,5,6,4,7];

let arr_redf = arr_red.reduce((a , b)=>{
  return a + b
})

console.log(arr_redf)
