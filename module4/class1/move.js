const fs = require('fs');
const path = require('path');

let srcPath = `D:\\Scaler\\Mohd Aman GitHub Repo\\FullStackBeginnerEvening\\module2\\class27\\trickyQuestion.js`;

// dest path = dest dir path + base name of file
let destDirPath = path.resolve(`D:\\Scaler\\Mohd Aman GitHub Repo\\FullStackBeginnerEvening\\module4\\class1`);
let baseName = path.basename(srcPath);
let destPath = path.join(destDirPath,baseName);

//move file - copy and delete
fs.copyFileSync(destPath,srcPath);
fs.unlinkSync(destPath);

// console.log(destPath);


