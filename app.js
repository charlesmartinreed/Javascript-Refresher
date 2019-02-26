/*
	PRIMITIVE DATA TYPES
		- Stored directly in the location the variable accesses
		- Stored on the stap

	REFERENCE DATA TYPE
		- Accessed by reference, so the objects are stored in memory heap, referenced by a pointer to a memory location

		Primitive Types:
		String, Number (int, float), Boolean, Null, Undefined
		ES6 introduced Symbols

		Reference types are objects:
		Arrays, Object Literals, FUnctions, Dates, anything else you STORE...

		JS is Dynamically Typed, so the types are associated with VALUES, not variables. This means that the same variable can hold multiple types and we don't have to specify types when creating variables.
*/

// Examples
const name = 'John Doe';
console.log(typeof name);

const age = 45;
console.log(typeof age);

const hasKids = false;
console.log(typeof hasKids);

const car = null;
console.log(typeof car); //interestingly enough, this is an 'Object'. This is a bug that can be explained by the type tag for JS objects being 0 and null being represented by the null pointer 0x00, or 0, during the early days of JS. It is, of course, not an object. This is a bug.

let test;
console.log(typeof test);

const sym = Symbol();
console.log(typeof sym);

// REFERENCE type examples
const hobbies = ['movies', 'music']
console.log(typeof hobbies);

const address = {
	city: 'Dallas',
	state: 'TX'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);
