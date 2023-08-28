//write code for printing 1,2,3,4,5 after each second.
//what will be the output of code given 



// for(var i=1;i<6;i++){

//     setTimeout(function(){
//         console.log(i);
//     },i*1000);

// }


// for(let i=1;i<6;i++){

//     setTimeout(function(){
//         console.log(i);
//     },i*1000);

// }


// for(var i=1;i<6;i++){

//     function fxn(i){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }

//     fxn(i);
// // }

// const person = { 
//     name: 'John',
//     sayHello: function () {
//       console.log(`Hello, ${this.name}!`);
//      },
//    };
//    const greet = person.sayHello;
//   greet();


// function sum(args) {
//     let total=0;
//     if(args){
//         total += args;
//         return function inner(args){
//             if(args){
//                 total += args;
//                 return inner;
//             }
//             else{
//                 return total;
//             }
//         }
//     }
//     else{
//         return total;
//     }
// }

// console.log(sum(3)())
// console.log(sum(3)(4)()); // 7
// console.log(sum(3)(7)(8)()); //18 


let obj = { 
    name: "Steve", 
   address: {
      state: "Newyork",
      city: "Manhatten"
   },
   sayHi: () => {
    //   console.log(`${this.name} say's Hi`);
   }
};

let obj2 = structuredClone(obj);
let obj3 = obj;

obj2.name = 'Tony';

console.log(obj==obj2);