//loops are used to run the same block of code, using different iterations each time

// GENERAL LOOPS
// FOR LOOP - "use this when you know how many iterations you will need"
// for(let i=0; i<10; i++) { //i = i+1
//
// 	if(i === 2) {
// 		console.log(`${i} is my favorite number!`);
// 		continue; //move on the the next statement, i=3
// 	}
//
// 	if(i === 5){
// 		console.log(`${i}!?! I'm outta here!`)
// 		break; //terminates the loop
// 	}
// 	console.log(i); //logs 0-9
// }

// WHILE LOOP - "use when you dont know how many iterations you will need"
// let i = 0;
// while(i < 10) {
// 	console.log(`Number is: ${i}`);
// 	i++; //make sure you increment your value IN THE LOOP. Otherwise, this code block will run infinitely.
// }

// DO WHILE - ALWAYS RUNS AT LEAST ONCE
// let i = 100;
// do {
// 	console.log(`Number is: ${i}`);
// 	i++;
// }
// while(i < 10);

//LOOPING THROUGH ARRAYS
//basic for loops work, as do while and do-while loops
// const cars = ['Ford', 'Chevy', 'Honda', 'BMW'];
// for(let i=0; i <cars.length; i++) {
// 	console.log(cars[i]);
//}

//unique to arrays is a forEach - takes in an anonymous function
//the function can take in three things: iterator, index or the entire array itself
// cars.forEach(function(car, index, array){
// 	console.log(`${index}: ${car}`); //car is capturing the value
// 	console.log(array);
// });

//MAP is used to transform the contents of the array and return those changes as a new array
// const users = [
// 	{id:523, name:'John'},
// 	{id:289, name:'Sara'},
// 	{id:431, name:'Karen'},
// 	{id:902, name: 'Steven'}
// ];
//
// const ids = users.map(function(user){
// 	return user.id;
// });
// console.log(ids);

//FOR-IN LOOPS
const user = {
	firstName: 'John',
	lastName: 'Doe',
	age: 40
}

//key value pairs, x is the key
//read this as for key in object, do something with the value. In this example, we're just logging it to the console.
for(let x in user){
	console.log(`${x}: ${user[x]}`);
}
