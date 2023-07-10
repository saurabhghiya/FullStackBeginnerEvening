function filter(arr, callback) {
    let res = [];
    arr.forEach((el) => callback(el) ? res.push(el):0);
    return res;
}

let A = [1,2,3,4,5];
function op(num){
    return !(num%2);
}

console.log(filter(A,op));