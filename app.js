const num1 = 100;
const num2 = 50;
let val;

//Basic math
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Using the Math object
val = Math.PI;
val = Math.round(2.8);
val = Math.ceil(2.4); //round up
val = Math.floor(2.9); //round down
val = Math.abs(-15);
val = Math.sqrt(64);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 12, 19, -5);
val = Math.max(2, 33, 4, 1, 12, 19, -5);
val = Math.floor(Math.random() * 3 + 1);

console.log(val);
