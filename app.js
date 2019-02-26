// MORE ON MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//clearBtn.addEventListener('click', runEvent);
//clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent); //click and hold
//clearBtn.addEventListener('mouseup', runEvent);

// card.addEventListener('mouseenter', runEvent); //when the mouse enters the element's bounds
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);

card.addEventListener('mousemove', runEvent); //any movement, all movement, inside that element

// EVENT HANDLER FUNCTION
function runEvent(e) {
	console.log(`EVENT TYPE: ${e.type}`);
	heading.innerText = `X: ${e.offsetX}, Y: ${e.offsetY}`; //this shows our coordinates
	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}
