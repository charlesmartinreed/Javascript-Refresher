let val;

const list = document.querySelector('.collection');
const listItem = document.querySelector('li.collection-item:first-child'); //first item

// looking a different properties attached to these so-called nodes

//get the child nodes of the ul
val = list.childNodes; //returns node list of all the child nodes, including text nodes
//line breaks count as text nodes

// get the children element nodes -
val = list.chiildren; // returns html collection, just the elements, no text nodes. Generally this is more frequently used that childNodes.

val = list.childNodes[0];
val = list.childNodes[0].nodeName; //#text
val = list.childNodes[0].nodeType; //3 - Text node

// The numbers returned by nodeType pertain to what type of node they are
// 1 - element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

val = list.children;
val = list.children[1].textContent = 'Hello';

// we can also get children of children
val = list.children[3].children; //our list items have a link in them, which represents our delete button
list.children[3].children[0].id = 'test-link'; //we can also manipuate children of children
val = list.children[3].children[0];


// first child
val = list.firstChild; //gives first node, element OR text
val = list.firstElementChild; // gives first element node, not including text nodes

// last child
val = list.lastChild;
val = list.lastElementChild;

//get the child count for elements
val = list.childElementCount;

//get parent node or parents of parents
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling; //nodes, including text
val = listItem.nextElementSibling.nextElementSibling; //nodes, excluding text

val = listItem.previousSibling; //nodes, including text
val = listItem.previousElementSibling.previousElementSibling; //nodes, excluding text

console.log(val);
