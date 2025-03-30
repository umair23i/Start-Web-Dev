console.log("this is a tutorial about MAP FILTER REDUCE");

let arr = [1,2,3,4,5,6]


// let red = (a,b)=>{
//     return a+b;
// } this means we use function when we perfrom a task in array or other we use reduce to perfrom it in console  

// console.log(arr.reduce(red))








// let gretter = (e)=>{
//     return e>7 ?  true: false;
// }
// console.log(arr.filter(gretter))

// in gretter the e show element of the arr thats why we show e we use return in e
// let newarr= []
// for (const key in arr) {
//     if (Object.prototype.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         newarr=(element) 
//         console.log(newarr)
//        }
// }

// this is a lengthy method to add one variable array value to other variable array 

// this is a short method to add one variable array value to other variable array MAP

let newarr = arr.map((e,value,array) =>{
    return e**2;
})




