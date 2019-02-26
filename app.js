//MULTIPLE ELEMENT DOM SELECTORS

// const items = document.getElementsByClassName('collection-item');

// console.log(items); //gets us an HTML Collection
// console.log(items[0]); //gives us the first list item
// items[0].style.color = 'red';
// items[3].textContent = 'Hello again!';
//
// const listItems = documents.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// GET ELEMENTS BY TAG NAME
// let lis = document.getElementsByTagName('li');

// console.log(lis); //gets us an HTML Collection
// // console.log(items[0]); //gives us the first list item
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';
//
// //convert the HTML function into an array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index){
// 	console.log(li.className)
// 	li.textContent = `${index}: 'Hello'`
// });
//
// console.log(lis);

//querySelectorAll returns a node list
const items = document.querySelectorAll('ul.collection li.collection-item');

//note that we don't need to convert
items.forEach(function(item, index) {
	item.textContent = `${index}: Goodbye`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
	li.style.background = '#333';
});

for (let i=0; i<liEven.length; i++) {
	liEven[i].style.background = '#F4F4F4';
}

console.log(items); //gives us a node list
