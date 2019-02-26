// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

//these are separate variables because they're in a different scope
// function test() {
// 	var a = 4;
// 	let b = 5;
// 	const c = 6;
// 	console.log('Function scope: ', a, b, c);
// }
//
// test()
//
// console.log('Global scope: ', a, b, c);

//block level scope involves anything in a if-statement, for-loop, etc. Anything in { } basically
if(true) {
	// Block Scope
	var a = 4; //note that this is hoisted up from the block scope to the variable scope
	let b = 5;
	const c = 6;
	console.log('Block scope', a, b, c); //4, 5, 6
}

console.log('Global scope: ', a, b, c); //4, 2, 3

//with let, this stays confined. with var a, it hoists up to the global scope.
for(let a = 0; a < 10; a++) {
	console.log(`Loop: ${a}`);
}

console.log('Global scope: ', a, b, c);
