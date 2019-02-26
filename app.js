//A LITTLE BIT ABOUT ARRAYS

// MAKING A BASIC ARRAY
const numbers = [43, 56, 23, 99, 82, 15];
const numbers2 = new Array(295, 285, 9538, 312, 11);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

//heterogenerous arrays are possible in JS as well
const mixed = [22, 'Hello', undefined, null, {a:1, b:1}, new Date()];

let val;

//GET THE ARRAY LENGTH
val = numbers.length; //6

//CHECK FOR ARRAY
val = Array.isArray(fruit); //true

//GRAB SINGLE VALUE FROM ARRAY
val = numbers[3]; //99

// INSERT INTO AN ARRAY
numbers[2] = 100;

// FIND INDEX OF A VALUE
val = numbers.indexOf(44); //-1, not in the array

//MUTATING ARRAYS

//PUSH adds to the END OF AN ARrAY
//UNSHIFT ADDS TO THE FRONT OF AN ARRAY
//POP REMOVES THE LAST OF AN ARRAY
//SHIFT REMOVES THE FIRST OF AN ARRAY

// numbers.push(300); //adds 300
// numbers.unshift(55); //adds 55
// numbers.pop(); //removes 300
// numbers.shift(); //removes 300

//CUTTING FROM ARRAYS
// numbers.splice(1, 1); //start at index 1, end at index 1
// numbers.splice(1, 3); //start at index 1, end at 3
//
// numbers.reverse();

//CONCATENATE TWO ARRAYS
val = numbers.concat(numbers2);

//SORTING ARRAYS
// val = fruit.sort();
// val = numbers.sort(); //only compares first digit

//to sort according to numeric value, pass a callback into sort method
// val = numbers.sort(function(x, y) {
// 	return x - y;
// })
//
// val = numbers.sort(function(a, b) {
// 	return b - a;
// })

//FINDING ELEMENTS IN ARRAY
function under50(number) {
	return number < 50
} //returns the first number under 50 in the array

val = numbers.find(under50);

val = numbers.find((num) => { return num > 50} )

console.log(numbers)
console.log(val)
