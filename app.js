//  CREATING elements
const li = document.createElement('li');

// Add class or ID
li.className = 'collection-item';
li.id = `new-item`;

// Add any attribute
li.setAttribute('title', 'New Item');

// Create text node by appending it
li.appendChild(document.createTextNode('Hello World'));

// Create the new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content'
link.innerHTML = '<i class="fa fa-remove"</i>'

// Append link to li
li.appendChild(link);

// Attach it to ul as a child
document.querySelector('ul.collection').appendChild(li);

console.log(li);
