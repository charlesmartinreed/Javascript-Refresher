//Document Object Model

// Tree of nodes (elements like h1, a, p, etc...) created by the browser
// Javascript can e used to read/write/manipulate to the DOM
// the DOM is object-oriented, meaning the page is represented by a series of objects that themselves can offer properties and methods.

let val;

val = document; //gives us the entire document, anything and everything in the html

val = document.all; //HTML COLLECTION of tag elements. This is zero based, like an array.
val = document.all[3]; //gives us the 4th
val = document.all.length; //count of elements in the dom
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Though it isn't recommended, you can grab reference to html elements by referring to their semantic name
val = document.forms;
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links; //HTML COLLECTION of the links in current DOM
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images; //this will be empty for us, of course

val = document.scripts;
val = document.scripts[2].getAttribute('src'); //app.js

//HTML COLLECTIONS CAN BE TURNED INTO ARRAYS
//THIS ALLOWS US TO USE ARRAY CLASS METHODS ON THEM
let scripts = document.scripts;
let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script) {
	console.log(script);
});
console.log(val);
