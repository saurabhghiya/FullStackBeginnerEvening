function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
var ans = multiply(2,3) (4);

console.log(ans);

// function counter(a) {
//     return (b) => b ? add(a+b):a; // if b is truthy return fn add(a+b) else return a
// }

// let res = add(2)(3)(4)(5)();
// console.log(res);