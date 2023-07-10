function map(arr, callback) {
    // Write your solution here ========================
    // let res = [];
    for(let i=0; i<arr.length; i++){
        arr[i] = callback(arr[i]);
    }
    return arr;
}

console.log(map([1,2,3,4,5] , (num) => num+1));