// DOM SELECTORS allows us to directly access elements from the DOM
// This also us to do much of the work previously handled by jQuery

// Single element selectors let you grab an element by class or id. Only stores one thing, so if you target a class, it'll only grab the first element that uses that class.

// Multiple element selectors can be used to return HTML Collections comprising the full array of items that use an id or class

//document.getElementById();
const taskTitle = document.getElementById('task-title');
console.log(taskTitle); //shows the h5 in index.html

//grab things from the element
console.log(taskTitle.id);
console.log(taskTitle.className);

//we can also change styling by targeting
//anythign you can do in CSS, can be done via this method
taskTitle.style.background = '#333';
taskTitle.style.color = '#FFF';
taskTitle.style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';

//you can also change the content by changing the content or even the HTML
taskTitle.textContent = 'Task List!';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: orange">Task List</span>'

//document.querySelector();
// takes any CSS selector
console.log(document.querySelector('#task-title')); //by id
console.log(document.querySelector('.card-title')); //by class
console.log(document.querySelector('h5')); //the first h5 on the page

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue'; //you can also nest elements, as in CSS

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'purple';
document.querySelector('li:nth-child(4)').textContent = 'Changed with Query Selector!';
