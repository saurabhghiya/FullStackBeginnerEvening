const fs = require('fs');

//Create, Read, Update & Delete (CRUD)
//writing in a file
fs.writeFileSync('roungwork.txt','I am data in roughwork');
//overwriting the same file
fs.writeFileSync('roungwork.txt','I am overwrting data in roughwork');

//update a file
fs.appendFileSync('roungwork.txt',' & this is updated content');

//reading from a file
let contentOfFile = fs.readFileSync('roungwork.txt');

console.log(contentOfFile+'');

fs.writeFileSync('roughwork.txt','I am data in roughwork');
//delete file
fs.unlinkSync('roungwork.txt');

// //create directory
// fs.mkdirSync('class1');
// fs.mkdirSync('test');

// 
fs.rmdirSync('test');