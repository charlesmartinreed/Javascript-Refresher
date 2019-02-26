//CONVERTING VARIABLES BETWEEN TYPES

let val;

//NUMBER TO STRING
val = String(555);
val = String(4+4);

//BOOL to STRING
val = String(true);

//DATE to STRING
val = String(new Date());

//ARRAY to STRING
val = String([1, 2, 3, 4]);

//there's also a toString() method
val = (5).toString();

//STRING TO NUMBER
val = Number('5');

//BOOL to NUMBER
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); //NaN

//there's also a parseInt method
val = parseInt('100');
val = parseFloat('100.30')


//TYPE COEERCION is handled by Javascript interpreter
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;


//OUTPUT
console.log(sum); //56
console.log(typeof sum); //string
//console.log(val.length); //undefined when a number
//console.log(val.toFixed()); //only works on numbers, for defining decimal points
