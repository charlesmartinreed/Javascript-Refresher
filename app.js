// WORKING WITH FORMS
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//clears out the form input
taskInput.value = '';

//form.addEventListener('submit', runEvent);

//taskInput.addEventListener('keydown', runEvent);
//taskInput.addEventListener('keyup', runEvent);
//taskInput.addEventListener('keypress', runEvent);

// task.addEventListener('focus', runEvent); // click inside of an input
// task.addEventListener('blur', runEvent); //click outside of an input

//task.addEventListener('cut', runEvent); //when you cut text from input
//task.addEventListener('paste', runEvent);

//task.addEventListener('input', runEvent); // generalized input event, catches ANY event that occurs with the input

//change events are used with select elements
select.addEventListener('change', runEvent);


function runEvent(e){
	//e.preventDefault();
	//console.log(taskInput.value); //this will reflect what is being submitted
	console.log(`EVENT TYPE: ${e.type}`);
	console.log(e.target.value);

	//e is the event, target is the element the event happens on, value is whatever is being added
	//heading.innerText = e.target.value; //heading value becomes the typed value
	//console.log(e.target.value)
}
