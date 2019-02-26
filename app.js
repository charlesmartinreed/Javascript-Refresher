//var, let and const

// var name = 'Jane Doe';
// console.log(name); //prints Jane Doe in the console
//
// name = 'Steve Smith';
// console.log(name); //prints Steve Smith in the console

// var names can only include letters, numbers, _, and $.
// Can't begin with numbers
var greeting;
console.log(greeting); // "undefined"
greeting = 'Hello';
console.log(greeting);

//Multi word vars
var firstName = 'John'; //camel case tends to be preferred
var first_name = 'Sara'; //snake case
var FirstName = 'Tom'; //Pascal case - classes use this convention.

//LET works similarly to VAR
let name = 'Jane Doe';
console.log(name); //prints Jane Doe in the console

name = 'Steve Smith';
console.log(name); //prints Steve Smith in the console

//CONST, in this case, can't be changed after initialization
// const name = 'Jason';
// console.log('name');

//also have to assign a value for const AT initialization
//const greeting; //this is invalid, missing declaration error

const person = {
	name: 'John',
	age: 30
}

console.log(person);

//you can, however, change the data INSIDE the const object.
person.name = 'Sara';
console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
//number = [2, 3, 4, 5, 6]; //can't be done. Reassign not allowed.

console.log(numbers);
