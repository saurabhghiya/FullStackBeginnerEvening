function reduce(arr, reducer) {
    // Write your solution here ========================
    let ans = arr[0];
    for(let i=1; i<arr.length; i++){
        ans = reducer(ans,arr[i]);
    }
    return ans;
}

function op(a,b){
    return a*b;
}

let A = [2,3,4,5];

console.log(reduce(A,op));