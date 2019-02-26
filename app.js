// We interact with our web page through event listeners

// Adding an event listener to the 'clear task' button
// addEventListener takes the event to listen for and the anonymous function that describes what should occur when that event is detected

document.querySelector('.clear-tasks').addEventListener('click', (e) => {
	//e is the param name for the event object, we're using it to prevent the default behavior for this link, i.e,. stop it from redirecting
	//e.preventDefault();
})

// triggering named functions
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
	let val;
	val = e; //has many different properties

	//event target element
	val = e.target; //this is the element that was clicked on
	val = e.target.className;
	val = e.target.classList;
	// e.target.innerText = 'Hello';

	//anything you can do with the DOM outside of an event can also be done INSIDE of an event.

	//check the event type
	val = e.type;

	//get the timestamp
	val = e.timeStamp;

	//get coords relative to the window
	val = e.clientY; //from the top of the window to where the click was registered on the element.
	val = e.clientX;

	//get coords relative to element itself
	val = e.offsetY;
	val = e.offsetX;

	console.log(val);
}
