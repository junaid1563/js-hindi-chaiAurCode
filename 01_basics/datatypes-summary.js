const one = 1;
const str = "String";
let obj = { one: 1, two: 2 };
let arr = [1, 2, 3, "4"];
let bool = true;
let nuLL = null;
let undeFined = undefined;
const myFunction = function () {
  console.log("Inside function");
};

console.table([
  typeof one,
  typeof str,
  typeof obj,
  typeof arr,
  typeof bool,
  typeof nuLL,
  typeof undeFined,
  typeof myFunction
]);
