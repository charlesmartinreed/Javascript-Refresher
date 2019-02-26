//DEFINING AN OBJECT LITERAL
const person = {
	firstName: 'Steve',
	lastName: 'Wilitis',
	age: 59,
	email: 'steve@msn.com',
	hobbies: ['music', 'sports'],
	address: {
		city: 'miami',
		state: 'FL'
	},
	getBirthYear: function() {
		return 2019 - this.age; //this pertains to the object itself
	}
}

let val;
val = person.firstName; //or person[firstName]
val = person.hobbies[1]; //sports
val = person.address.state; //FL
val = person.address['city']; //miami
val = person.getBirthYear();

console.log(val);

const people = [
	{name: 'John', age: 30},
	{name: 'Mike', age: 23},
	{name: 'Barry', age: 17},
	{name: 'Debra', age: 41}
];

for (var i=0; i < people.length; i++) {
	console.log(people[i].name); //prints John, Mike, Barry, Debra
}
