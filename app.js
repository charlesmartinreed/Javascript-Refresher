//Template literals were added in ES6
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//inserting data in html, the old way
//this is demonstrably horrible
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '</li><li>City: ' + city +' </li></ul>'

// html = '<ul>' +
// 				'<li>Name: ' + name + '</li>' +
// 				'<li>Age: ' + age + '</li>' +
// 				'<li>Job: ' + job + '</li>' +
// 				'<li>City: ' + city + '</li>' +
// 				'</ul>';

function hello() {
	return 'I don\'t know why you say goodbye, I say hello.';
}

//NOW, with TEMPLATE LITERALS
//note that things within the literal, ${}, can be evaluated
html = `
			<ul>
				<li>Name: ${name}</li>
				<li>Age: ${age}</li>
				<li>Job: ${job}</li>
				<li>City: ${city}</li>
				<li>${2+2}</li>
				<li>${hello()}</li>
				<li>${ age >= 30 ? 'Over 30': 'Under 30'}</li>
			</ul>
`;

document.body.innerHTML = html;
