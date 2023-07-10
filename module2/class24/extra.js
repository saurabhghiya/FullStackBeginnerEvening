// let fs = require("fs");

// console.log("Before");

// let f1Promise = fs.promises.readFile("f1.txt");
// let f2Promise = fs.promises.readFile("f2.txt");
// let f3Promise = fs.promises.readFile("f3.txt");


// f1Promise.then(function(data){
//     console.log("Data "+ data);
//     return f2Promise;
// }).then(function(data){
//     console.log("Data " + data);
//     return f3Promise;
// }).then(function(data){
//     console.log("Data "+data)
// })

// console.log("After");

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data"), 1000);
//   });
// }
// async function logData() {
//   const result = await fetchData();
//   console.log(result);
// }
// logData();
// console.log("End");


// function debounce(func, delay) {
//   let timeoutId;
//   return function () {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(func, delay);
//   };
// }
// function logMessage(message) {
//   console.log(message);
// }
// const debounceFunction = debounce(logMessage, 300);
// debounceFunction("Hello");
// debounceFunction("World");
// debounceFunction("!");

