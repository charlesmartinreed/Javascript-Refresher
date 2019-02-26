const firstName = 'William';
const lastName = 'Bailey';
const age = 59;
const str = 'Hello there my name is Charles'
const tags = 'web development,software engineering,developer for hire'

let val;
val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Appending
val = 'Charles ';
val += 'Martin';

val = 'Hello, my name is ' + firstName + ' and I am ' + age + '.';

//Escaping is done with the \ character
val = 'That\'s awesome, I cant\'t wait.';

// Length
val = firstName.length;

val = firstName.concat(' ', lastName);

//Changing case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//Strings are treated like arrays
//Get last character
// let lastLetter = firstName[firstName.length - 1];

val = firstName.indexOf('l'); //returns index of first match, -1 if no match
val = firstName.lastIndexOf('l');
val = firstName.charAt('2');
val = lastName.charAt(lastName.length - 1);

//substring
val = firstName.substring(0, 4); //wiil out of william

//slice - can start from back and move forward
val = firstName.slice(-3);

//split - split string into array
val = str.split(' ');
val = tags.split(',');

//replace
val = str.replace('Charles', 'Derrick');

//includes - returns true or false based upon whether or not the passed argument is in the string
val = str.includes('Goodbye')

console.log(val);
// console.log(lastLetter);
// console.log(typeof lastLetter); //string
