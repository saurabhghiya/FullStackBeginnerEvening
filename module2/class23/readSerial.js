let fs = require("fs");
let fileNames = ['f1.txt','f2.txt','f3.txt'];


// Asynchronous reading of file 

// fs.readFile("f1.txt",function(error,data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Data of file 1 : "+data)
//         fs.readFile("f2.txt",function(error,data){
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log("Data of file 2 : "+data)
//                 fs.readFile("f3.txt",function(error,data){
//                     if(error){
//                         console.log(error);
//                     }else{
//                         console.log("Data of file 3 : "+data)
//                     }
//                 })
//             }
//         })
//     }
// })

// function fileData(k){
//     if(k==fileNames.length) return;
//     fs.readFile(fileNames[k],function(error,data){
//         if(error){
//             console.log(error);
//         }else{
//             console.log(`Data of file ${k+1} : `+data)
//             fileData(k+1);
//         }
//     });
// }
// fileData(0);

async function fileData(){
    let data = await fs.promises.readFile('f1.txt');
    console.log(data+'');
    data = await fs.promises.readFile('f2.txt');
    console.log(data+'');
    data = await fs.promises.readFile('f3.txt');
    console.log(data+'');
}
fileData();


