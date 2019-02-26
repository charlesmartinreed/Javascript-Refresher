Q: What array method is used to turn a HTML collection into an Array?
A: Array.from()

EX: let elements = document.links;
console.log(elements);

let elementsArray = Array.from(elements);
elementsArray.forEach(function(element) {
	console.log(element);
});

Q: What are some differences between a HTML Collection and a Node List?
A: Both are collections of DOM nodes, but an HTML Collection will only contain a node element while a Node List can contain ANY node type. (Node being an object)
