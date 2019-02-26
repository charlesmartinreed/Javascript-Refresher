// FUNCTION DECLARATIONS
// function greet(firstName, lastName) { //name is a type of parameter, or argument
// 	//anything in here is the function scope
// 	return `Hello, ${firstName} ${lastName}!`
//}

//call the function
// console.log(greet('David', 'Lowe')); //without the passed in parameters, these values are "undefined"

//handling default values, the 'old' way
function oldGreet(firstName, lastName) {
	if(typeof firstName === 'undefined'){firstName = 'John'}
	if(typeof lastName === 'undefined'){lastName = 'Doe'}

	return `Hello, ${firstName} ${lastName}!`

}

//handling default the modern way
function greet(firstName = 'John', lastName = 'Doe') {
	return `Hello, ${firstName} ${lastName}!`
}

//console.log(greet()); // returns Hello, John Doe
//console.log(greet('David', 'Lowe'));

//Function expressions = seting a function to a variable
const square = function(x = 3) {
	return x * x;
};

//console.log(square()); //returns 9, using the default value of 3
console.log(square(8)); //64

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFES
//A function that is declared and run at the same time
// (function() {
// 	console.log('IIFE Ran...');
// })()

//this is used often in the module pattern, 'a bunch of IIFEs with private properties'
// (function(name) {
// 	console.log(`Hello, ${name}`);
// })('Bradley');

//remember that objects can contain functions - these are called methods
const todo = {
	add: function(){
		console.log('Add todo...');
	},
	edit: function(id){
		console.log(`Edit todo: ${id}`);
	}
}

//functions, like other object properties, can also be defined outside of the declaration body of that object
todo.delete = function() {
	console.log('Delete todo...');
}

todo.add();
todo.edit(13);
todo.delete();
