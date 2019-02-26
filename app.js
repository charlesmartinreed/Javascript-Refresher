// REPLACING ELEMENTS

// CREATE AN ELEMENT
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Get the parent, because we're replacing our old child with the new child, newHeading
const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading, oldHeading);


// REMOVING AN ELEMENTS
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove individual list item
lis[0].remove();

// Remove child element from parent
list.removeChild(lis[3]);

// CLASSES and ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]; //gives us the link in our list item
console.log(link);

let val;

//CLASSES
val = link.className;
val = link.classList; //DOM token list, similar to array
val = link.classList[0];
link.classList.add('test');

link.classList.remove('test');
val = link;

//ATTRIUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link.removeAttribute('href');

val = link;

console.log(val);
