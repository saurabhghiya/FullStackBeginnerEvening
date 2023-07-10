/* 
let is block scope
var is function scope

cannot access variable before declaration if created using let/const
*/

for (var i = 1; i < 6; i++) {
    fn(i);
}

function fn(i){
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}