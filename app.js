// A few cool console tricks
var greeting = 'Yo';
console.log(greeting);
console.table({a:1, b:2});
console.error('This is an error!');
console.warn('This is a warning!');

//console.time displays the time it takes to execute a script
console.time('Hello');
	console.log('Hello world');
	console.log('Hello world');
	console.log('Hello world');
	console.log('Hello world');
	console.log('Hello world');
	console.log('Hello world');
console.timeEnd('Hello');

//console.clear();
