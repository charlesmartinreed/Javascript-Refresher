//CONDITIONALS

const id = 100;

//EQUAL COMPARISON
// if(id == 101) { // == means evaluate, = means assign
// 	console.log('CORRECT');
// } else {
// 	console.log('INCORRECT');
// }
//
// //NOT EQUAL TO
// if(id != 101) {
// 	console.log('CORRECT');
// } else {
// 	console.log('INCORRECT');
// }
//
// // == doesn't check type, it just checks value
// // === or, strict equality, checks value AND type
// if(id === 100) { //since id is '100', this evaluates to incorrect
// 	console.log('CORRECT');
// } else {
// 	console.log('INCORRECT');
// }
//
// if(id !== 100) { //since id is '100', this evaluates to correct
// 	console.log('CORRECT');
// } else {
// 	console.log('INCORRECT');
// }

//CHECKING FOR UNDEFINED
// if(typeof id !== 'undefined'){
// 	console.log(`The ID is ${id}`);
// } else {
// 	console.log('NO ID');
// }

// if(id >= 100) {
// 	console.log('CORRECT');
// } else {
// 	console.log('INCORRECT');
// }

// IF ELSE
// const color = 'yellow';
// if (color === 'red') {
// 	console.log('color is red');
// } else if (color === 'blue') {
// 	console.log('color is blue');
// } else {
// 	console.log('color is not red or blue');
// }

// LOGICAL OPERATORS
const name = 'Don';
const age = 25;

//&& = AND
if (age > 0 && age < 12) {
	console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
	console.log(`${name} is a teenager`);
} else {
	console.log(`${name} is an adult`);
}

// || = OR
if (age < 16 || age > 66) {
	console.log(`${name} is unable to run in the race`);
} else {
	console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');
